// "use client";

import { VideoPlayer } from "@/components/video-player";
// import { useParams } from "next/navigation";

const videos = {
  "gta-vi-trailer": {
    video_title: "Grand Theft Auto VI Trailer 1",
    game: "Grand Theft Auto VI",
    title: "Trailer 1",
    description:
      "Grand Theft Auto VI heads to the state of Leonida, home to the neon-soaked streets of Vice City and beyond in the biggest, most immersive evolution of the Grand Theft Auto series yet. Coming 2025 to PlayStation 5 and Xbox Series X|S.",
    publishDate: "December 5, 2023",
    qualityOptions: [
      {
        label: "1440p",
        src: "https://gul2vtevtamla80v.public.blob.vercel-storage.com/videos/Trailer-1-720p-McyMzkzdPdX8JCJelc2yLrpbc6bhAh.mp4",
      },
      {
        label: "720p",
        src: "https://gul2vtevtamla80v.public.blob.vercel-storage.com/videos/Trailer-1-720p-McyMzkzdPdX8JCJelc2yLrpbc6bhAh.mp4",
      },
    ],
  },
};

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return Object.keys(videos).map((slug) => ({
    slug: slug,
  }));
}

export default function VideoPage({ params }: Params) {
  // const { slug } = useParams();
  const video = videos[params.slug as keyof typeof videos];

  return (
    <div className=" text-white min-h-screen bg-zinc-950">
      <div>
        <VideoPlayer
          title={video.video_title}
          qualityOptions={video.qualityOptions}
          loop={false}
          className="shadow-2xl"
        />
      </div>
      {video.description && (
        <div className="max-w-6xl mx-10 md:px-20 space-y-6 py-20 ">
          <p className="text-lg font-semibold">
            {video.game}{" "}
            <span className="ml-2 text-zinc-400">{video.publishDate}</span>
          </p>
          <h1 className="text-5xl font-bold">{video.title}</h1>
          <p className="text-xl leading-loose">{video.description}</p>
        </div>
      )}
    </div>
  );
}
