import { AnimatedWrapper } from "@/components/DialogWrapper";
import React from "react";
import { useAtom } from "jotai";
import { screenAtom } from "@/store/screens";
import { Sparkles } from "lucide-react";
import AudioButton from "@/components/AudioButton";
import { apiTokenAtom } from "@/store/tokens";
import { Input } from "@/components/ui/input";

export const Intro: React.FC = () => {
  const [, setScreenState] = useAtom(screenAtom);
  const [token, setToken] = useAtom(apiTokenAtom);

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

          <div className="flex flex-col gap-4 items-center w-full px-6">
            <Input
              type="text"
              value={token || ""}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Enter Tavus API Token"
              className="w-full bg-white text-black border-black border-2 placeholder:text-gray-400 font-chanel"
            />

            <p className="text-sm text-chanel-dark-gray font-chanel text-center">
              Don't have a token?{" "}
              <a
                href="https://platform.tavus.io/api-keys"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black transition-colors"
              >
                Get your API key
              </a>
            </p>
          </div>

          <AudioButton
            onClick={handleClick}
            className="bg-black text-white hover:bg-chanel-dark-gray transition-colors font-chanel text-base px-8 py-6"
            disabled={!token}
          >
            <Sparkles className="size-5" />
            Meet Your Style Advisor
          </AudioButton>
        </div>
      </div>
    </AnimatedWrapper>
  );
};
