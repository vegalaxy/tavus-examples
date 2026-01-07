import { memo } from "react";

export const Header = memo(() => {
  return (
    <header className="flex w-full items-center justify-center py-6">
      <h1 className="text-2xl sm:text-3xl font-display tracking-widest text-black">
        CHANEL
      </h1>
    </header>
  );
});
