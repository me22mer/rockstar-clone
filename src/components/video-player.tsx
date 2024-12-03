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
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Slider } from "@/components/ui/slider";
import { useMediaQuery } from "react-responsive";

interface VideoPlayerProps {
  src: string;
  className?: string;
  title: string;
}

export function VideoPlayer({ src, className, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isEnded, setIsEnded] = useState(false); // Added state for video end
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

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

    const handleMouseMove = () => {
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    };

    const handleMouseLeave = () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      setShowControls(false);
    };

    player.addEventListener("mousemove", handleMouseMove);
    player.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      player.removeEventListener("mousemove", handleMouseMove);
      player.removeEventListener("mouseleave", handleMouseLeave);
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
            console.error("Playback was prevented:", error);
          });
        }
      }
      setIsPlaying((prev) => !prev);
      setIsEnded(false); // Reset isEnded when toggling play
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

    if (!isFullscreen) {
      if (playerRef.current.requestFullscreen) {
        playerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
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

    const handleTouchStart = () => {
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    };

    video.addEventListener("touchstart", handleTouchStart);

    return () => {
      video.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setIsEnded(true); // Set isEnded to true when video ends
      setShowControls(true);
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="relative w-full xl:h-[89dvh] aspect-video">
      <video
        ref={videoRef}
        className="w-full h-full sm:hidden"
        onClick={togglePlay}
        playsInline
        preload="metadata"
        controls
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        ref={playerRef}
        className={cn(" bg-black hidden sm:block", className)}
      >
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full"
          onClick={togglePlay}
          playsInline
          preload="metadata"
        />
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
              className="bg-white/10 hover:bg-white/50 backdrop-blur-sm text-white rounded-lg p-8 transition-colors"
              aaria-label={
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
                className="h-full bg-[#fcaf17]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={isEnded ? handleReplay : togglePlay}
                  className="text-white hover:text-white/80 transition-colors"
                  aria-label={
                    isEnded
                      ? "Replay video"
                      : isPlaying
                      ? "Pause video"
                      : "Play video"
                  }
                >
                  {isEnded ? (
                    <Repeat size={24} />
                  ) : isPlaying ? (
                    <Pause size={24} />
                  ) : (
                    <Play size={24} />
                  )}
                </button>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-white/80 transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
                  <Slider
                    value={[volume]}
                    max={1}
                    step={0.01}
                    onValueChange={(value) => handleVolumeChange(value[0])}
                    className="w-24"
                  />
                </div>
                <div className="text-white text-sm">
                  {formatTime(currentTime)} /{" "}
                  {duration && duration > 0 ? formatTime(duration) : "--:--"}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-white/80 transition-colors"
                  aria-label={
                    isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
                  }
                >
                  {isFullscreen ? (
                    <Minimize size={24} />
                  ) : (
                    <Maximize size={24} />
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
