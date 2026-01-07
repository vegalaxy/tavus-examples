import { useEffect } from "react";
import { useAtom } from "jotai";
import { screenAtom } from "@/store/screens";

export const NiceForm = () => {
  const [, setScreenState] = useAtom(screenAtom);

  useEffect(() => {
    // Redirect to final screen
    setScreenState({ currentScreen: "finalScreen" });
  }, [setScreenState]);

  return null;
};
