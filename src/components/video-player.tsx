"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Repeat,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface VideoPlayerProps {
  className?: string;
  title: string;
  qualityOptions: { label: string; src: string }[];
  width?: number;
  loop?: boolean;
}

export function VideoPlayer({
  className,
  title,
  qualityOptions,
  loop = false,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState(
    qualityOptions[0].label
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / (video.duration || 1)) * 100;
      setProgress(progress);
      setCurrentTime(video.currentTime);
    };

    const updateDuration = () => {
      if (video.readyState >= 1 && video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("durationchange", updateDuration);

    updateDuration();

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("durationchange", updateDuration);
    };
  }, []);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const handleInteraction = () => {
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    };

    player.addEventListener("mousemove", handleInteraction);
    player.addEventListener("touchstart", handleInteraction);

    return () => {
      player.removeEventListener("mousemove", handleInteraction);
      player.removeEventListener("touchstart", handleInteraction);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            if (error.name === "NotAllowedError") {
              console.log("Autoplay prevented. User interaction required.");
            } else {
              console.error("Playback was prevented:", error);
            }
          });
        }
      }
      setIsPlaying((prev) => !prev);
      setIsEnded(false);
    }
  }, [isPlaying]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const toggleFullscreen = () => {
    if (!playerRef.current) return;

    if (!document.fullscreenElement) {
      if (playerRef.current.requestFullscreen) {
        playerRef.current.requestFullscreen();
      } else if ((playerRef.current as any).webkitRequestFullscreen) {
        (playerRef.current as any).webkitRequestFullscreen();
      } else if ((playerRef.current as any).msRequestFullscreen) {
        (playerRef.current as any).msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setIsEnded(false);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const clickPosition =
      (e.clientX - progressBar.getBoundingClientRect().left) /
      progressBar.offsetWidth;
    if (videoRef.current && duration) {
      videoRef.current.currentTime = clickPosition * duration;
    }
  };

  const formatTime = (time: number | null) => {
    if (time === null || isNaN(time) || time === 0) {
      return "--:--";
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setIsEnded(true);
      setShowControls(true);
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const handleQualityChange = (quality: string) => {
    const selectedOption = qualityOptions.find(
      (option) => option.label === quality
    );
    if (selectedOption && videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const wasPlaying = !videoRef.current.paused;
      videoRef.current.src = selectedOption.src;
      videoRef.current.currentTime = currentTime;
      setSelectedQuality(quality);
      if (wasPlaying) {
        videoRef.current.play();
      }
    }
  };

  return (
    <div className="relative w-full xl:h-[89dvh] aspect-video">
      <div ref={playerRef} className={cn("bg-black", className)}>
        <video
          ref={videoRef}
          className="absolute w-full h-full bg-black"
          onClick={togglePlay}
          playsInline
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          preload="metadata"
          muted={isMuted}
          loop={loop}
        >
          <source
            src={
              qualityOptions.find((option) => option.label === selectedQuality)
                ?.src
            }
            type="video/mp4"
          />
        </video>

        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300",
            showControls ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="absolute top-0 left-0 right-0 p-4">
            <h1 className="text-lg text-white">{title}</h1>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-3 sm:p-8 transition-colors"
              aria-label={
                isEnded
                  ? "Replay video"
                  : isPlaying
                  ? "Pause video"
                  : "Play video"
              }
            >
              {isEnded ? (
                <Repeat size={30} />
              ) : isPlaying ? (
                <Pause size={30} />
              ) : (
                <Play size={30} />
              )}
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
            <div
              className="mb-3.5 h-1 bg-white/30 cursor-pointer"
              onClick={handleProgressClick}
            >
              <div
                className="h-full bg-white"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between space-x-3">
              <div className="flex items-center space-x-3">
                <button
                  onClick={togglePlay}
                  className="bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-1.5 sm:p-3 transition-colors"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause size={20} />
                  ) : (
                    <Play size={20} />
                  )}
                </button>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleMute}
                    className="bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-1.5 sm:p-3 transition-colors"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <VolumeX size={20} />
                    ) : (
                      <Volume2 size={20} />
                    )}
                  </button>
                  <Slider
                    value={[volume]}
                    onValueChange={(value) => handleVolumeChange(value[0])}
                    max={1}
                    step={0.01}
                    aria-label="Volume"
                    className="relative hidden sm:flex w-16 h-1 cursor-pointer bg-white/30 rounded-full"
                  />
                </div>
                <div className="text-white text-xs">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Select
                  value={selectedQuality}
                  onValueChange={handleQualityChange}
                >
                  <SelectTrigger className="w-max bg-black/50 text-white border-none focus:ring-0">
                    <SelectValue placeholder="Quality" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/90 text-white border-none z-50">
                    {qualityOptions.map((option) => (
                      <SelectItem key={option.label} value={option.label}>
                        {option.label}
                        {option.label === "2160p" && (
                          <sup className="ml-1 text-xs text-[#fcaf17]">4K</sup>
                        )}
                        {(option.label === "1440p" ||
                          option.label === "1080p") && (
                          <sup className="ml-1 text-xs text-green-400">HD</sup>
                        )}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <button
                  onClick={toggleFullscreen}
                  className="bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-1.5 sm:p-3 transition-colors"
                  aria-label="Toggle fullscreen"
                >
                  {isFullscreen ? (
                    <Minimize size={20} />
                  ) : (
                    <Maximize size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
