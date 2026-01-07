import { AnimatedWrapper } from "@/components/DialogWrapper";
import React, { useRef, useEffect } from "react";
import { useAtom } from "jotai";
import { screenAtom } from "@/store/screens";
import { ChevronRight } from "lucide-react";
import AudioButton from "@/components/AudioButton";
import { musicVolumeAtom } from "@/store/musicVolume";

export const StaticIntroVideo: React.FC = () => {
  const [, setScreenState] = useAtom(screenAtom);
  const [musicVolume] = useAtom(musicVolumeAtom);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleContinue = () => {
    setScreenState({ currentScreen: "instructions" });
  };

  // Auto-play the video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Auto-play prevented:", error);
      });
    }
  }, []);

  return (
    <AnimatedWrapper>
      <div className="flex size-full flex-col items-center justify-center">
        {/* Static intro video - replace with your avatar's introduction video */}
        <video
          ref={videoRef}
          src="/videos/chanel-intro.mp4"
          autoPlay
          muted={musicVolume === 0}
          playsInline
          className="absolute inset-0 h-full w-full object-contain bg-white"
          onEnded={handleContinue}
        />

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
