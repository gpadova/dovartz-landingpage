"use client";

import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function BenefitsVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) {
      return;
    }

    const handleVideoEnd = () => {
      videoElement.currentTime = 1;
      setIsPlaying(false);
    };

    const handleVideoPause = () => {
      setIsPlaying(false);
    };

    const handleVideoPlaying = () => {
      setIsPlaying(true);
    };

    videoElement.addEventListener("ended", handleVideoEnd);
    videoElement.addEventListener("pause", handleVideoPause);
    videoElement.addEventListener("playing", handleVideoPlaying);

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
      videoElement.removeEventListener("pause", handleVideoPause);
      videoElement.removeEventListener("playing", handleVideoPlaying);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center relative">
      {!isPlaying && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/50 rounded-full p-3 cursor-pointer transition-all duration-300 z-10"
          onClick={handlePlay}
        >
          <Play className="size-10 text-white" />
        </div>
      )}

      <video
        src="/benefits/side-video.mp4"
        className="h-10/12 w-11/12 object-cover aspect-video rounded-2xl max-h-screen"
        ref={videoRef}
        playsInline
        loop
        onError={() => console.error("Error loading video")}
        controls={isPlaying}
      />
    </div>
  );
}
