import React from "react";
import Image from "next/image";
import PillLink from "@/components/ui/pill-link";
import polaroid from "../../public/assets/images/polaroid-portrait.png";
import aboutMeEmoji from "../../public/assets/images/aboutMeEmogi.svg";

type AboutMeIntroProps = {
  /** The home page links through to /about; the About page itself does not. */
  showCta?: boolean;
};

/**
 * "About me front page" in Figma — shared by the home page and /about.
 *
 * The polaroid caption is set in TinyBrushy rather than the outlined vector
 * paths the design file ships, so it stays selectable text.
 */
const AboutMeIntro = ({ showCta = false }: AboutMeIntroProps) => {
  return (
    <section className="mx-auto max-w-screen-xl px-5 py-16 md:px-8 lg:px-[85px] lg:py-[64px]">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-[94px]">
        {/* Polaroid, taped to the page at a slight angle */}
        <div className="relative shrink-0 -rotate-[6deg]">
          {/* Tape colours are fixed, not themed — the polaroid is white in both
              modes. Opacity is baked into the hex because Tailwind cannot apply
              an alpha modifier to a hex-valued CSS variable. */}
          <span
            aria-hidden="true"
            className="absolute -left-7 -top-3 z-10 h-[34px] w-[110px] -rotate-[14deg] bg-[#E0C9AEE6]"
          />
          <span
            aria-hidden="true"
            className="absolute -right-7 -top-4 z-10 h-[34px] w-[110px] rotate-[14deg] bg-[#FFA17AE6]"
          />
          <figure className="bg-white p-[18px] pb-5 shadow-2xl">
            <Image
              src={polaroid}
              alt="Tobiloba Owoade"
              className="h-[260px] w-[240px] object-cover object-top sm:h-[320px] sm:w-[300px] lg:h-[398px] lg:w-[375px]"
            />
            <figcaption className="mt-4">
              <p className="font-tinyBrushy text-fig-24 uppercase leading-none text-black">
                Tobiloba Owoade
              </p>
              <p className="bg-gradient-to-b from-[#667085] via-[#98a2b3] to-[#475467] bg-clip-text font-tinyBrushy text-fig-16 uppercase leading-none text-transparent">
                Product Designer
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="flex flex-col items-start gap-6 lg:max-w-[671px]">
          <h2 className="flex items-center gap-3 font-display text-fig-32 uppercase text-title md:text-fig-48">
            About me
            <Image src={aboutMeEmoji} alt="" aria-hidden="true" className="size-8 md:size-10" />
          </h2>

          <div className="flex flex-col gap-5 text-fig-20 text-body lg:text-fig-24">
            <p>
              I am a creative UX/UI Designer with over{" "}
              <strong className="font-bold text-accent">
                5 years of experience designing digital experiences that bridge
                user needs, business goals, and technical innovation.
              </strong>{" "}
              Specialized in transforming complex products into intuitive,
              visually compelling experiences across{" "}
              <strong className="font-bold text-accent">
                AI applications, SaaS platforms, enterprise software, mobile
                apps, and customer-facing web experiences
              </strong>
              .
            </p>
            <p>
              Proven ability to lead projects from user research and strategy
              through high-fidelity design, interactive prototyping, design
              systems, and implementation-ready interfaces.{" "}
              <strong className="font-bold text-accent">
                Experienced partnering with Product Marketing, Engineering, and
                cross-functional teams to create engaging demonstrations,
                scalable design assets, and storytelling-driven experiences that
                increase product understanding, customer engagement, and
                business impact.
              </strong>
            </p>
            <p>
              Outside work, I&apos;m big on personal growth as I have been
              learning French for more than a year, I love listening to podcasts
              about music, personal growth, entertainment and finance. I play
              ping pong really well and i also enjoy playing FIFA (I believe I
              am that good)
            </p>
          </div>

          {showCta && <PillLink href="/about">Learn more about me</PillLink>}
        </div>
      </div>
    </section>
  );
};

export default AboutMeIntro;
