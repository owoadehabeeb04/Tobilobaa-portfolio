import React from "react";
import Image from "next/image";
import { askAiIntro } from "@/constants/askAi";
import avatar from "../../public/assets/images/hero-portrait.png";

const AskAiHero = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* The portrait is a transparent cutout, so the circle needs its own fill
          to read as an avatar rather than a floating figure. */}
      <div className="relative size-[200px] overflow-hidden rounded-full bg-surface sm:size-[280px] lg:size-[400px]">
        <Image
          src={avatar}
          alt="Tobiloba Owoade"
          priority
          className="size-full object-cover object-top"
        />
      </div>
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-display text-fig-32 uppercase text-title md:text-fig-48">
          {askAiIntro.heading}
        </h1>
        <p className="max-w-[523px] text-fig-16 text-label">
          {askAiIntro.subtitle}
        </p>
      </div>
    </div>
  );
};

export default AskAiHero;
