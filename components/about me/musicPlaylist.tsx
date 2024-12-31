import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import { musicPlaylist } from "@/constants";

const MusicPlaylist = () => {
  return (
    <div className="mt-20">
      <div className="max-w-screen-xl px-5 md:px-[2rem] mx-auto">
        <p className="text-[#fff]  text-2xl  md:text-3xl lg:text-4xl text-start font-normal leading-[normal] uppercase font-tinyBrushy">
          SOME OF MY MUSIC PLAYLISTS.
        </p>
      </div>
      <div className="relative w-full mt-6 max-w-screen-2xl px-0 mx-auto overflow-x-auto">
        <div className="flex  flex-row gap-8 items-center w-max sm:px-0 pb-4 sm:scroll-smooth sm:snap-x sm:snap-mandatory">
          {musicPlaylist.map((music, index) => (
            <div key={index} className="snap-start shrink-0 max-[640px]:w-[240px]">
                <div className="flex flex-col gap-4">
            <Image
                src={music?.image}
                alt={music?.title}
                width={340}
                height={281}
                className="max-[640px]:w-full"
              />
           
              <Link
                href={music?.link}
                className="text-[#C9CFD9] flex items-center  font-beginning text-base font-normal leading-[normal]"
              >
                {music?.title}
                <ArrowUpRight size={16} />

              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPlaylist;
