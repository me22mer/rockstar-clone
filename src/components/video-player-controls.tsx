import React from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/cn";

interface VideoPlayerControlsProps {
  title: string;
  progress: number;
  volume: number;
  duration: number;
  currentTime: number;
  isPaused: boolean;
  isMuted: boolean;
  isFullscreen: boolean;
  showControls: boolean;
  onPlayPause: () => void;
  onVolumeChange: (value: number) => void;
  onMuteToggle: () => void;
  onSeek: (value: number) => void;
  onFullscreenToggle: () => void;
  qualityOptions: { label: string; src: string }[];
  selectedQuality: string;
  onQualityChange: (quality: string) => void;
}

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
  title,
  progress,
  volume,
  duration,
  currentTime,
  isPaused,
  isMuted,
  isFullscreen,
  showControls,
  onPlayPause,
  onVolumeChange,
  onMuteToggle,
  onSeek,
  onFullscreenToggle,
  qualityOptions,
  selectedQuality,
  onQualityChange,
}) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className={`absolute inset-0 flex flex-col justify-between transition-opacity duration-300 ${
        showControls ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="p-4 bg-gradient-to-b from-black/70 to-transparent">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
      </div>
      <div className="p-4 bg-gradient-to-t from-black/70 to-transparent">
        <Slider
          value={[progress * 100]}
          max={100}
          step={0.1}
          onValueChange={(value) => onSeek(value[0] / 100)}
          className={cn(`mb-4 rounded-[8px] `)}
          trackHeight={1}
          thumbSize={4}
          color="bg-zinc-600"
          rangeColor="bg-[#fcaf17]"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onPlayPause}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? <Play size={24} /> : <Pause size={24} />}
            </button>
            <div className="flex items-center space-x-2">
              <button
                onClick={onMuteToggle}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
              <div className="hidden sm:block w-24">
                <Slider
                  value={[volume * 100]}
                  max={100}
                  step={0.1}
                  onValueChange={(value) => onVolumeChange(value[0] / 100)}
                  className=""
                  trackHeight={1}
                  thumbSize={4}
                />
              </div>
            </div>
            <div className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
          <div className="flex items-center space-x-2 relative z-[9999]">
            <Select value={selectedQuality} onValueChange={onQualityChange}>
              <SelectTrigger className="w-max bg-black/50 text-white border-none focus:ring-0">
                <SelectValue placeholder="Quality" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 text-white border-none z-[9999] fixed">
                {qualityOptions.map((option) => (
                  <SelectItem
                    key={option.label}
                    value={option.label}
                    className="text-white hover:bg-white/20"
                  >
                    {option.label}
                    {option.label === "2160p" && (
                      <sup className="ml-1 text-xs text-[#fcaf17]">4K</sup>
                    )}
                    {(option.label === "1440p" || option.label === "1080p") && (
                      <sup className="ml-1 text-xs text-green-400">HD</sup>
                    )}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <button
              onClick={onFullscreenToggle}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerControls;
