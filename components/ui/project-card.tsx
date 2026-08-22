import React from "react";
import Image, { type StaticImageData } from "next/image";
import PillLink from "@/components/ui/pill-link";

export type ProjectCardProps = {
  image: StaticImageData | string;
  title: string;
  skills: string[];
  href: string;
  linkText?: string;
};

/**
 * "Project Layout Mini" in Figma — a horizontal project row used by the home
 * page's Featured Work section and by the /ask-ai project list.
 *
 * The MOBILE/WEB type badge seen in Figma is baked directly into each
 * thumbnail's artwork (see e.g. "Sanlam export.png"), not rendered by this
 * component — adding a second badge here would duplicate it.
 */
const ProjectCard = ({
  image,
  title,
  skills,
  href,
  linkText = "View Project"
}: ProjectCardProps) => {
  return (
    <article className="flex flex-col items-start gap-4 rounded-[20px] border border-solid border-base p-3 sm:flex-row sm:items-center">
      <div className="relative h-[132px] w-full shrink-0 overflow-hidden rounded-[7px] sm:w-[190px]">
        <Image src={image} alt="" aria-hidden="true" className="size-full object-cover" />
      </div>

      <div className="flex flex-col items-start gap-2">
        <h3 className="font-display text-fig-20 uppercase leading-tight text-title md:text-fig-24">
          {title}
        </h3>
        <ul className="flex flex-wrap items-center gap-2 text-fig-10 text-label">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <PillLink href={href} size="sm" className="mt-1">
          {linkText}
        </PillLink>
      </div>
    </article>
  );
};

export default ProjectCard;
