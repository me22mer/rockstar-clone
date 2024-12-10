"use client"

import { useEffect, useRef, useState } from "react"
import VideoPlayerControls from "./video-player-controls"
interface VideoPlayerProps {
  className?: string
  title: string
  qualityOptions: { label: string; src: string }[]
  width?: number
  loop?: boolean
}

export function VideoPlayer({
  className,
  title,
  qualityOptions,
  loop = false,
}: VideoPlayerProps) {
  const [videoProgress, setVideoProgress] = useState<number>(0)
  const [videoDuration, setVideoDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [isPaused, setIsPaused] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [selectedQuality, setSelectedQuality] = useState(qualityOptions[0].label)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const updateProgress = () => {
        setVideoProgress(video.currentTime / video.duration)
        setCurrentTime(video.currentTime)
      }

      const handleLoadedMetadata = () => {
        setVideoDuration(video.duration)
        setIsLoading(false)
      }

      const handleLoadedData = () => {
        setIsLoading(false)
      }

      video.addEventListener("timeupdate", updateProgress)
      video.addEventListener("loadedmetadata", handleLoadedMetadata)
      video.addEventListener("loadeddata", handleLoadedData)

      if (video.readyState >= 2) {
        handleLoadedMetadata()
      }

      return () => {
        video.removeEventListener("timeupdate", updateProgress)
        video.removeEventListener("loadedmetadata", handleLoadedMetadata)
        video.removeEventListener("loadeddata", handleLoadedData)
      }
    }
  }, [])

  const togglePlayPause = () => {
    const video = videoRef.current
    if (video) {
      if (video.paused) {
        video.play()
        setIsPaused(false)
      } else {
        video.pause()
        setIsPaused(true)
      }
    }
  }

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  const handleSeek = (newProgress: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = newProgress * videoDuration
    }
  }

  const toggleFullscreen = () => {
    const video = videoRef.current
    const container = containerRef.current

    if (!document.fullscreenElement) {
      if (video && 'webkitEnterFullscreen' in video) {
        (video as any).webkitEnterFullscreen()
      } else if (container && container.requestFullscreen) {
        container.requestFullscreen()
      } else if (container && (container as any).webkitRequestFullscreen) {
        (container as any).webkitRequestFullscreen()
      } else if (container && (container as any).msRequestFullscreen) {
        (container as any).msRequestFullscreen()
      }
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen()
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen()
      }
      setIsFullscreen(false)
    }
  }

  const handleQualityChange = (quality: string) => {
    const selectedOption = qualityOptions.find(
      (option) => option.label === quality
    )
    if (selectedOption && videoRef.current) {
      const currentTime = videoRef.current.currentTime
      const wasPlaying = !videoRef.current.paused
      videoRef.current.src = selectedOption.src
      videoRef.current.currentTime = currentTime
      setSelectedQuality(quality)
      if (wasPlaying) {
        videoRef.current.play()
      }
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        !!(document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).msFullscreenElement)
      )
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('msfullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('msfullscreenchange', handleFullscreenChange)
    }
  }, [])

  const showControlsTemporarily = () => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false)
    }, 3000)
  }

  const handleMouseEnter = () => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
  }

  const handleMouseLeave = () => {
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false)
    }, 3000)
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full mb-8 xl:h-[89dvh] aspect-video ${className}`}
      onMouseMove={showControlsTemporarily}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        className="w-full h-full bg-black"
        ref={videoRef}
        loop={loop}
        muted={isMuted}
        onClick={togglePlayPause}
        preload="metadata"
      >
        <source
          src={
            qualityOptions.find((option) => option.label === selectedQuality)
              ?.src
          }
          type="video/mp4"
        />
      </video>
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : (
        <VideoPlayerControls
          title={title}
          progress={videoProgress}
          volume={volume}
          duration={videoDuration}
          currentTime={currentTime}
          isPaused={isPaused}
          isMuted={isMuted}
          isFullscreen={isFullscreen}
          showControls={showControls}
          onPlayPause={togglePlayPause}
          onVolumeChange={handleVolumeChange}
          onMuteToggle={toggleMute}
          onSeek={handleSeek}
          onFullscreenToggle={toggleFullscreen}
          qualityOptions={qualityOptions}
          selectedQuality={selectedQuality}
          onQualityChange={handleQualityChange}
        />
      )}
    </div>
  )
}
