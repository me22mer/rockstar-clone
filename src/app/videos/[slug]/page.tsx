"use client";

import { useParams } from "next/navigation";
import { VideoPlayer } from "@/components/video-player";

const videos = {
  "gta-vi-trailer": {
    video_title: "Grand Theft Auto VI Trailer 1",
    src: "/videos/GTAVI/Trailer-1.mp4",
    game: "Grand Theft Auto VI",
    title: "Trailer 1",
    description:
      "Grand Theft Auto VI heads to the state of Leonida, home to the neon-soaked streets of Vice City and beyond in the biggest, most immersive evolution of the Grand Theft Auto series yet. Coming 2025 to PlayStation 5 and Xbox Series X|S.",
    publishDate: "December 5, 2023",
  },
};

export default function VideoPage() {
  const { slug } = useParams();
  const video = videos[slug as keyof typeof videos];

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="bg-zinc-950 text-white min-h-[100dvh]">
      <VideoPlayer src={video.src} title={video.video_title} />
      {video.description && (
        <div className="w-full px-4 sm:px-6 md:px-8 py-8 bg-zinc-950">
          <div className="max-w-5xl mx-auto my-8 sm:my-12 md:my-16 lg:my-20">
            <p className="mb-4 sm:mb-6 text-base sm:text-lg font-semibold leading-relaxed">
              {video.game} <span className="ml-2 sm:ml-4 text-zinc-400">{video.publishDate}</span>
            </p>
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">{video.title}</h1>
            <p className="text-lg sm:text-xl leading-relaxed">{video.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

