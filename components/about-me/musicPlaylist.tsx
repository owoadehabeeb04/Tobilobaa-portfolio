import { musicPlaylist } from "@/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// The marquee needs enough copies to fill the track before it loops. The
// keyframes in globals.css translate by (-340px * 15), so 15 copies.
const MARQUEE_COPIES = 15;

const MusicPlaylist = () => {
  const duplicatedPlaylists = Array.from({ length: MARQUEE_COPIES }).flatMap(
    () => musicPlaylist
  );

  return (
    <section className="mt-20">
      <div className="mx-auto max-w-screen-xl px-5 md:px-[2rem]">
        <h2 className="text-start font-display text-fig-32 uppercase text-title md:text-fig-40">
          Some of my music playlists.
        </h2>
      </div>
      <div className="relative mx-auto mt-6 w-full max-w-screen-2xl overflow-x-auto px-0">
        <div className="music-playlist-scroll flex w-max flex-row items-center gap-8 pb-4 sm:scroll-smooth sm:snap-x sm:snap-mandatory sm:px-0">
          {duplicatedPlaylists.map((music, index) => (
            <div
              key={`${music.title}-${index}`}
              className="max-[640px]:w-[240px] shrink-0 cursor-pointer snap-start"
            >
              <Link
                href={music?.link}
                className="flex items-center text-fig-16 font-normal text-accent"
              >
                <div className="flex flex-col gap-4">
                  <div className="relative w-full max-[640px]:w-full sm:h-[281px]">
                    <Image
                      src={music?.image}
                      alt={music?.title}
                      width={340}
                      height={281}
                      className="object-cover max-[640px]:w-full sm:h-[281px]"
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
    </section>
  );
};

export default MusicPlaylist;
