import { articles } from "@/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ArticlesWritten = () => {
  const dots = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="7"
      viewBox="0 0 8 7"
      fill="none"
    >
      <circle cx="3.66699" cy="3.5" r="3.5" fill="black" />
    </svg>
  );
  return (
    <div>
      {" "}
      <div className="mt-20 pb-4">
        <div className="max-w-screen-xl px-[2rem] mx-auto">
          <p className="text-[#fff]  text-4xl text-start font-normal leading-[normal] uppercase font-tinyBrushy">
            Some of the articles i have written,
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div
                className="rounded-[40px] border border-solid border-[#667085]  p-8 "
                key={index}
              >

                <div className="grid grid-cols-3 flex-row gap-5 items-center">
                  <Image
                    src={article?.image}
                    alt={article?.title}
                    width={153.33}
                    height={116} 
                    className="rounded-[28px] h-full col-span-1  w-full   object-cover"
                  />
<div className="flex flex-col  col-span-2 justify-between h-full gap-3">
  <div className="flex flex-col gap-3">
    <h1 className="text-xl leading-[normal] font-normal text-[#fff] uppercase font-tinyBrushy">
      {article?.title}
    </h1>
    <p className="text-[#C9CFD9] flex font-Beginning text-sm leading-[normal] font-normal">
      {article?.minRead} {dots} {article?.date}
    </p>
  </div>
  
  <Link 
    className="text-[#FFA17A] flex items-center gap-1 text-base font-normal leading-[normal] font-Beginning" 
    href={article?.link}
  > 
    {article?.linkTitle} 
    <ArrowUpRight size={14} color="#FFA17A"/> 
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
