"use client";

import { useParams } from "next/navigation";
import { VideoPlayer } from "@/components/video-player";

const videos = {
  "gta-vi-trailer": {
    title: "Grand Theft Auto VI Trailer 1",
    src: "/videos/GTAVI/Trailer-1.mp4",
  },
  "rdr2-trailer": {
    title: "Red Dead Redemption II - Official Trailer",
    src: "/videos/rdr2-trailer.mp4",
  },
  "gta-online-bounties": {
    title: "GTA Online: Bottom Dollar Bounties",
    src: "/videos/gta-online-bounties.mp4",
  },
  "gta-online-farm-raid": {
    title: "GTA Online: The Cluckin' Bell Farm Raid",
    src: "/videos/gta-online-farm-raid.mp4",
  },
};

export default function VideoPage() {
  const { slug } = useParams();
  const video = videos[slug as keyof typeof videos];

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className=" bg-black text-white">
      <VideoPlayer src={video.src} title={video.title} />
    </div>
  );
}
