import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import { musicPlaylist } from "@/constants";

const MusicPlaylist = () => {
  const duplicatedPlaylists = [
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,

    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,

    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,

    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,

    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,

    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist,
    ...musicPlaylist
  ];
  return (
    <div className="mt-20">
      <div className="max-w-screen-xl px-5 md:px-[2rem] mx-auto">
        <p className="text-[#fff]  text-2xl  md:text-3xl lg:text-4xl text-start font-normal leading-[normal] uppercase font-tinyBrushy">
          SOME OF MY MUSIC PLAYLISTS.
        </p>
      </div>
      <div className="relative w-full mt-6 max-w-screen-2xl px-0 mx-auto overflow-x-auto">
        <div className="flex music-playlist-scroll  flex-row gap-8 items-center w-max sm:px-0 pb-4 sm:scroll-smooth sm:snap-x sm:snap-mandatory">
          {duplicatedPlaylists.map((music, index) => (
            <div
              key={index}
              className="snap-start cursor-pointer shrink-0 max-[640px]:w-[240px]"
            >
              <Link
                href={music?.link}
                className="text-[#FFA17A] flex items-center   font-beginning text-base font-normal leading-[normal]"
              >
                {" "}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full sm:h-[281px] max-[640px]:w-full">
                    <Image
                      src={music?.image}
                      alt={music?.title}
                      width={340}
                      height={281}
                      className="max-[640px]:w-full sm:h-[281px] object-cover"
                    />
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    {music?.title}
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPlaylist;
