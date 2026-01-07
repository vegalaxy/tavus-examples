import { AnimatedWrapper } from "@/components/DialogWrapper";
import React, { useRef, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { screenAtom } from "@/store/screens";
import { ChevronRight } from "lucide-react";
import AudioButton from "@/components/AudioButton";

export const StaticIntroVideo: React.FC = () => {
  const [, setScreenState] = useAtom(screenAtom);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  const handleContinue = () => {
    setScreenState({ currentScreen: "instructions" });
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
        setVideoError(true);
      });
    }
  }, []);

  // If video fails or doesn't exist, skip to instructions after 3 seconds
  useEffect(() => {
    if (videoError) {
      const timeout = setTimeout(handleContinue, 500);
      return () => clearTimeout(timeout);
    }
  }, [videoError]);

  return (
    <AnimatedWrapper>
      <div className="flex size-full flex-col items-center justify-center bg-white">
        {/* Static intro video */}
        <video
          ref={videoRef}
          src="/videos/chanel-intro.mp4"
          autoPlay
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-contain"
          onEnded={handleContinue}
          onError={(e) => {
            console.error("Video failed to load:", e);
            setVideoError(true);
          }}
        />

        {videoError && (
          <div className="relative z-10 text-center">
            <p className="text-black font-chanel mb-4">Loading...</p>
          </div>
        )}

        {/* Overlay controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <AudioButton
            onClick={handleContinue}
            className="bg-black text-white hover:bg-chanel-dark-gray"
          >
            Continue
            <ChevronRight className="size-5 ml-2" />
          </AudioButton>
        </div>

        {/* Skip button */}
        <button
          onClick={handleContinue}
          className="absolute top-8 right-8 z-10 text-black hover:text-chanel-dark-gray transition-colors text-sm font-chanel"
        >
          Skip Introduction →
        </button>
      </div>
    </AnimatedWrapper>
  );
};
