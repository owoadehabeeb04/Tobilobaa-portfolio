import { articles } from "@/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ArticlesWritten = () => {
  return (
    <section className="mt-20 pb-4">
      <div className="mx-auto max-w-screen-xl px-5 md:px-[2rem]">
        <h2 className="text-start font-display text-fig-32 uppercase text-title md:text-fig-40">
          Some of the articles i have written,
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <article
              className="rounded-[12px] border border-solid border-base p-[6px] sm:rounded-[40px] sm:p-4 md:p-[24px] lg:p-[32px]"
              key={article.title}
            >
              <div className="grid grid-cols-3 flex-row items-center gap-4 sm:gap-5">
                <Image
                  src={article?.image}
                  alt=""
                  aria-hidden="true"
                  width={153.33}
                  height={116}
                  className="col-span-1 h-full w-full rounded-[6px] object-cover sm:rounded-[28px]"
                />
                <div className="col-span-2 flex h-full flex-col justify-between gap-3 py-2 sm:py-0">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-fig-16 uppercase leading-tight text-title lg:text-fig-20">
                      {article?.title}
                    </h3>
                    <p className="flex items-center gap-2 text-fig-14 text-body">
                      {article?.minRead}
                      <span
                        aria-hidden="true"
                        className="size-1 shrink-0 rounded-full bg-body"
                      />
                      {article?.date}
                    </p>
                  </div>

                  <Link
                    className="flex items-center gap-1 text-fig-14 font-normal text-accent"
                    href={article?.link}
                  >
                    {article?.linkTitle}
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesWritten;
