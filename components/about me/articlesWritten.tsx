import { articles } from "@/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ArticlesWritten = () => {
  const dots = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      
      viewBox="0 0 4 5"
      fill="none"
    >
      <circle cx="2" cy="2.5" r="2" fill="#C9CFD9" />
    </svg>
  );
  return (
    <div>
      {" "}
      <div className="mt-20 pb-4">
        <div className="max-w-screen-xl px-5 md:px-[2rem] mx-auto">
          <p className="text-[#fff]  md:text-3xl text-2xl lg:text-4xl text-start font-normal leading-[normal] uppercase font-tinyBrushy">
            Some of the articles i have written,
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8 sm:gap-8">
            {articles.map((article, index) => (
              <div
                className="rounded-[12px] sm:rounded-[40px] border border-solid border-[#667085]  p-[6px] sm:p-4  md:p-[24px] lg:p-[32px] "
                key={index}
              >
                <div className="grid grid-cols-3 flex-row gap-4 sm:gap-5 items-center">
                  <Image
                    src={article?.image}
                    alt={article?.title}
                    width={153.33}
                    height={116}
                    className="rounded-[6px] sm:rounded-[28px] h-full col-span-1  w-full   object-cover"
                  />
                  <div className="flex flex-col  sm:py-0 py-2 col-span-2 justify-between h-full gap-3">
                    <div className="flex flex-col gap-3">
                      <h1 className="md:text-lg sm:text-base text-sm lg:text-xl leading-[normal] font-normal text-[#fff] uppercase font-tinyBrushy">
                        {article?.title}
                      </h1>
                      <p className="text-[#C9CFD9] flex items-center  gap-1 font-Beginning text-sm leading-[normal] font-normal">
                        {article?.minRead} <span className="sm:w-[4px] sm:h-[5px] w-[2px] h-[3px]">{dots} </span>{article?.date}
                      </p>
                    </div>

                    <Link
                      className="text-[#FFA17A] flex items-center gap-1 text-base font-normal leading-[normal] font-Beginning"
                      href={article?.link}
                    >
                      {article?.linkTitle}
                      <ArrowUpRight size={14} color="#FFA17A" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesWritten;
