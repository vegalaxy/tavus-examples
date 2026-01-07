import { cn } from "@/utils";
import { motion } from "framer-motion";

const desktopClassName = "lg:aspect-video lg:max-h-none lg:h-auto";
const tabletClassName = "sm:max-h-[680px]";
const mobileClassName = "w-full h-full max-h-[500px] max-w-5xl";

export const DialogWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-black bg-white shadow-lg",
        desktopClassName,
        tabletClassName,
        mobileClassName,
      )}
    >
      {children}
    </div>
  );
};

export const AnimatedWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "relative overflow-hidden rounded-lg border border-black bg-white shadow-lg",
        desktopClassName,
        tabletClassName,
        mobileClassName,
      )}
    >
      {children}
    </motion.div>
  );
};

export const TextBlockWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative flex size-full flex-col items-center justify-center px-2.5 py-6 sm:p-8">
      {children}
    </div>
  );
};

export const AnimatedTextBlockWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex size-full flex-col items-center justify-center px-2.5 py-6 sm:p-8"
    >
      {children}
    </motion.div>
  );
};

export const StaticTextBlockWrapper = ({
  imgSrc,
  title,
  titleClassName,
  description,
  descriptionClassName,
  children,
}: {
  imgSrc: string;
  title: string;
  titleClassName?: string;
  description: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2
        className={cn(
          "text-center font-display text-4xl text-black sm:text-5xl lg:text-6xl tracking-tight",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <div className="w-16 h-px bg-black" />
      <p
        className={cn(
          "max-w-[650px] text-center text-base sm:text-lg font-chanel text-chanel-dark-gray",
          descriptionClassName,
        )}
      >
        {description}
      </p>
      {children}
    </div>
  );
};
