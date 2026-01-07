import { createConversation } from "@/api";
import {
  DialogWrapper,
  AnimatedTextBlockWrapper,
} from "@/components/DialogWrapper";
import { screenAtom } from "@/store/screens";
import { conversationAtom } from "@/store/conversation";
import React, { useCallback, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { AlertTriangle, Mic, Video } from "lucide-react";
import { useDaily, useDailyEvent, useDevices } from "@daily-co/daily-react";
import { ConversationLoading } from "./ConversationLoading";
import { ConversationError } from "./ConversationError";
import { Button } from "@/components/ui/button";
import { apiTokenAtom } from "@/store/tokens";

const useCreateConversationMutation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [, setScreenState] = useAtom(screenAtom);
  const [, setConversation] = useAtom(conversationAtom);
  const token = useAtomValue(apiTokenAtom);

  const createConversationRequest = async () => {
    try {
      if (!token) {
        throw new Error("Token is required");
      }
      const conversation = await createConversation(token);
      setConversation(conversation);
      setScreenState({ currentScreen: "conversation" });
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    createConversationRequest,
  };
};

export const Instructions: React.FC = () => {
  const daily = useDaily();
  const { currentMic, setMicrophone, setSpeaker } = useDevices();
  const { createConversationRequest } = useCreateConversationMutation();
  const [getUserMediaError, setGetUserMediaError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingConversation, setIsLoadingConversation] = useState(false);
  const [error, setError] = useState(false);

  useDailyEvent(
    "camera-error",
    useCallback(() => {
      setGetUserMediaError(true);
    }, []),
  );

  const handleClick = async () => {
    try {
      setIsLoading(true);
      let micDeviceId = currentMic?.device?.deviceId;
      if (!micDeviceId) {
        const res = await daily?.startCamera({
          startVideoOff: false,
          startAudioOff: false,
          audioSource: "default",
        });
        // @ts-expect-error deviceId exists in the MediaDeviceInfo
        const isDefaultMic = res?.mic?.deviceId === "default";
        // @ts-expect-error deviceId exists in the MediaDeviceInfo
        const isDefaultSpeaker = res?.speaker?.deviceId === "default";
        // @ts-expect-error deviceId exists in the MediaDeviceInfo
        micDeviceId = res?.mic?.deviceId;

        if (isDefaultMic) {
          if (!isDefaultMic) {
            setMicrophone("default");
          }
          if (!isDefaultSpeaker) {
            setSpeaker("default");
          }
        }
      }
      if (micDeviceId) {
        setIsLoadingConversation(true);
        await createConversationRequest();
      } else {
        setGetUserMediaError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
      setIsLoadingConversation(false);
    }
  };

  if (isLoadingConversation) {
    return <ConversationLoading />;
  }
  if (error) {
    return <ConversationError onClick={handleClick} />;
  }

  return (
    <DialogWrapper>
      <AnimatedTextBlockWrapper>
        <h1 className="mb-6 text-center font-display text-4xl sm:text-5xl lg:text-6xl text-black tracking-tight">
          Your Personal Style Journey
        </h1>
        <p className="max-w-[650px] text-center text-base sm:text-lg text-chanel-dark-gray font-chanel">
          Experience personalized style recommendations from your AI advisor.
          Share your preferences, explore new looks, and discover timeless elegance.
        </p>
        <Button
          onClick={handleClick}
          className="relative my-8 sm:my-10 bg-black text-white hover:bg-chanel-dark-gray font-chanel px-8 py-6 text-base"
          disabled={isLoading}
        >
          Begin Your Consultation
          {getUserMediaError && (
            <div className="absolute -top-1 left-0 right-0 flex items-center gap-1 text-wrap rounded-lg border border-black bg-white p-2 text-black backdrop-blur-sm">
              <AlertTriangle className="size-4" />
              <p className="text-sm">
                Please allow microphone and camera access to continue.
              </p>
            </div>
          )}
        </Button>
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:gap-6 text-chanel-dark-gray">
          <div className="flex items-center gap-2">
            <Mic className="size-6 text-black" />
            <span className="font-chanel text-sm">Microphone required</span>
          </div>
          <div className="flex items-center gap-2">
            <Video className="size-6 text-black" />
            <span className="font-chanel text-sm">Camera required</span>
          </div>
        </div>
        <span className="absolute bottom-6 px-4 text-xs opacity-60 sm:bottom-8 sm:px-8 font-chanel text-chanel-dark-gray">
          By continuing, you accept the Terms of Use and Privacy Policy.
        </span>
      </AnimatedTextBlockWrapper>
    </DialogWrapper>
  );
};
