import { AnimatedTextBlockWrapper, DialogWrapper } from "@/components/DialogWrapper";
import React from "react";
import { useAtom } from "jotai";
import { screenAtom } from "@/store/screens";

export const FinalScreen: React.FC = () => {
  const [, setScreenState] = useAtom(screenAtom);

  const handleBackToStart = () => {
    setScreenState({ currentScreen: "intro" });
  };

  return (
    <DialogWrapper>
      <AnimatedTextBlockWrapper>
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl font-display text-black tracking-tight">
              Thank You
            </h1>
            <div className="w-16 h-px bg-black mx-auto" />
          </div>

          <p className="text-base sm:text-lg font-chanel text-chanel-dark-gray max-w-md">
            Your consultation has been completed. We hope you enjoyed discovering personalized style recommendations.
          </p>

          <button
            onClick={handleBackToStart}
            className="mt-4 px-8 py-3 bg-black text-white hover:bg-chanel-dark-gray transition-colors font-chanel text-sm tracking-wide"
          >
            BACK TO START
          </button>
        </div>
      </AnimatedTextBlockWrapper>
    </DialogWrapper>
  );
};
