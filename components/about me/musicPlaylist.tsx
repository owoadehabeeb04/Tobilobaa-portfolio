import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import { musicPlaylist } from "@/constants";

const MusicPlaylist = () => {
  return (
    <div className="mt-20">
      <div className="max-w-screen-xl px-[2rem] mx-auto">
        <p className="text-[#fff]  text-4xl text-start font-normal leading-[normal] uppercase font-tinyBrushy">
          SOME OF MY MUSIC PLAYLISTS.
        </p>
      </div>
      <div className="relative w-full mt-6 max-w-screen-2xl px-8 mx-auto overflow-x-auto">
        <div className="flex flex-row gap-8 items-center w-max px-4 pb-4 scroll-smooth snap-x snap-mandatory">
          {musicPlaylist.map((music, index) => (
            <div key={index} className="snap-start shrink-0">
                <div className="flex flex-col gap-4">
            <Image
                src={music?.image}
                alt={music?.title}
                width={340}
                height={281}
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
