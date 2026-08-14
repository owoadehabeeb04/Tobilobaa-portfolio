import React from "react";
import ProjectCard from "@/components/ui/project-card";
import { caseStudies } from "@/constants";

const FeaturedWork = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-5 py-16 md:px-8 lg:px-[112px]">
      <h2 className="text-center font-display text-fig-32 uppercase text-title md:text-fig-48">
        Featured work.
      </h2>

      <div className="mx-auto mt-10 flex max-w-[844px] flex-col gap-6">
        {caseStudies.map((study) => (
          <ProjectCard
            key={study.title}
            image={study.image}
            title={study.title}
            skills={study.skills}
            href={study.links[0]?.theLink ?? "/"}
            linkText={study.links[0]?.text}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
