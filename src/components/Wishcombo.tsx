import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { SparklesCore } from "./ui/sparkles";

const Wishcombo = () => {
  const words = [
    {
      text: "Happy",
      className: "dheader",
    },
    {
      text: "Birthday",
      className: "dheader",
    },
    {
      text: "SHALOM",
      className: "text-blue-500 dark:text-blue-500 dheader",
    },
  ];

  return (
    <div className="text-pink-500 flex justify-center items-center flex-col w-full max-w-[20rem] sm:max-w-[30rem] md:max-w-[40rem]">
      <TypewriterEffectSmooth words={words} />
      <div className="w-full h-32 sm:h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-40 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-40 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Sparkles Core */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1000}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(300px_150px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

export default Wishcombo;
