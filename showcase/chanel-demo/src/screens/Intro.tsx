import { AnimatedWrapper } from "@/components/DialogWrapper";
import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { screenAtom } from "@/store/screens";
import { Sparkles } from "lucide-react";
import AudioButton from "@/components/AudioButton";
import { apiTokenAtom } from "@/store/tokens";

export const Intro: React.FC = () => {
  const [, setScreenState] = useAtom(screenAtom);
  const [, setToken] = useAtom(apiTokenAtom);

  // Load API token from environment variable on mount
  useEffect(() => {
    const envToken = import.meta.env.VITE_TAVUS_API_KEY;
    if (envToken) {
      setToken(envToken);
    }
  }, [setToken]);

  const handleClick = () => {
    setScreenState({ currentScreen: "staticIntroVideo" });
  };

  return (
    <AnimatedWrapper>
      <div className="flex size-full flex-col items-center justify-center bg-white">
        {/* Minimalist Chanel branding */}
        <div className="relative z-10 flex flex-col items-center gap-8 max-w-md">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl md:text-5xl font-display text-black tracking-tight text-center">
              CHANEL
            </h1>
            <div className="w-16 h-px bg-black" />
            <p className="text-lg font-chanel text-chanel-dark-gray text-center">
              Personal Style Advisor
            </p>
          </div>

          <p className="text-base font-chanel text-chanel-dark-gray text-center px-6 max-w-lg">
            Experience personalized style recommendations from your AI advisor.
            Discover timeless elegance tailored to your unique preferences.
          </p>

          <AudioButton
            onClick={handleClick}
            className="bg-black text-white hover:bg-chanel-dark-gray transition-colors font-chanel text-base px-8 py-6"
          >
            <Sparkles className="size-5" />
            Meet Your Style Advisor
          </AudioButton>
        </div>
      </div>
    </AnimatedWrapper>
  );
};
