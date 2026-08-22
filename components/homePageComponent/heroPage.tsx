import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import PillLink from "@/components/ui/pill-link";
import portrait from "../../public/assets/images/hero-portrait.png";
import figmaLogo from "../../public/assets/images/figma-logo.png";
import framerLogo from "../../public/assets/images/framer-logo.png";
import canvaLogo from "../../public/assets/images/canva-logo.png";

const HeroPage = () => {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-[1512px] flex-col justify-center overflow-hidden px-5 pb-16 pt-[112px] md:px-8 lg:px-[112px]">
      {/* Location + role badges, centred above the wordmark */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <MapPin aria-hidden="true" className="size-3 text-label" />
          <span className="text-fig-12 text-label">Toronto, Canada</span>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-[10px] bg-accent px-2 py-[2px]">
          <span className="text-fig-12 text-[#06090f]">Product Designer</span>
          <span aria-hidden="true" className="size-1 shrink-0 rounded-full bg-[#06090f]" />
          <span className="text-fig-12 text-[#06090f]">
            A2 French Language Speaker
          </span>
        </div>
      </div>

      {/* Left-aligned with the bio and CTA below. Sized off the viewport so the
          wordmark stays on one line, capped at the scaled Figma size. */}
      <h1 className="mt-6 whitespace-nowrap text-left font-display uppercase leading-none text-title [font-size:clamp(2rem,10.5vw,calc(200px*var(--font-scale)))] lg:mt-8">
        Tobiloba Owoade
      </h1>

      {/*
        Outer box is square and clips; the portrait is 143.31% of its height
        and anchored top, so the frame crops the lower part of the photo.
        On desktop it is absolutely placed so it overlaps the wordmark from the
        right, as designed — it bleeds slightly past the right edge.
      */}
      <div className="relative mx-auto mt-8 aspect-square w-[240px] overflow-hidden sm:w-[300px] lg:absolute lg:right-0 lg:top-[150px] lg:mt-0 lg:w-[440px] xl:top-[178px] xl:w-[560px]">
        <Image
          src={portrait}
          alt="Tobiloba Owoade"
          priority
          className="absolute left-0 top-0 h-[143.31%] w-full max-w-none object-cover object-top"
        />
      </div>

      <div className="relative mt-10 flex flex-col items-start gap-8 lg:mt-[64px] lg:max-w-[60%]">
        <p className="text-fig-20 text-body lg:text-fig-24">
          A product designer with 5+ years work experience that turns complex
          problems into intuitive designs. Designing scalable products for
          startups and growing companies while leveraging AI to work smarter, not
          harder.
        </p>

        <PillLink href="#contact">Contact me</PillLink>

        <ul className="flex items-center gap-5">
          {/* Each logo keeps its own designed crop — the Figma sprite holds a
              coloured and an outlined mark, and this window selects the coloured one. */}
          <li className="relative h-[64px] w-[49px] overflow-hidden">
            <Image
              src={figmaLogo}
              alt="Figma"
              className="absolute left-[-149.62%] top-[-89.74%] h-[281.52%] w-[663.36%] max-w-none"
            />
          </li>
          <li className="relative size-[64px]">
            <Image src={framerLogo} alt="Framer" className="absolute inset-0 size-full max-w-none object-cover" />
          </li>
          <li className="relative h-[64px] w-[63px] overflow-hidden">
            <Image
              src={canvaLogo}
              alt="Canva"
              className="absolute left-[-21.43%] top-[-20.66%] h-[140.6%] w-[142.86%] max-w-none"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroPage;
