import React from "react";
import Image from "next/image";
import footerIcon from "../../public/assets/images/footerIcon.svg";
import linkedln from "../../public/assets/images/linkedln.svg";

const EMAIL = "tobiowoade22@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/tobiloba-owoade/";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="mx-auto px-4 py-[60px] sm:px-5 sm:py-[80px] md:px-8 md:py-[92px] lg:px-[7rem] lg:py-[64px]"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex max-w-[478px] flex-col gap-[12px]">
          <p className="text-fig-16 text-label">
            Exploring a new product idea? Looking for ways to improve your
            product? Send a mail to:
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="font-display text-fig-24 uppercase leading-normal text-title underline underline-offset-2 hover:text-accent md:text-fig-32"
          >
            {EMAIL}
          </a>
        </div>
        <Image
          src={footerIcon}
          width={100}
          height={100}
          alt=""
          aria-hidden="true"
          className="w-[64px] shrink-0 sm:w-[80px] md:w-[100px]"
        />
      </div>

      <div className="my-[32px] flex flex-col justify-between gap-[12px] rounded-[100px] border border-solid border-base bg-surface px-[24px] py-[24px] sm:flex-row sm:items-center sm:gap-[8px] md:my-[56px] md:px-[40px] md:py-[48px]">
        <div className="flex flex-col items-start gap-[4px] sm:flex-row sm:items-end sm:gap-[13px]">
          <h2 className="font-display text-fig-24 leading-normal text-title md:text-fig-32">
            TOBIOWOADE.COM
          </h2>
          <p className="text-fig-16 text-accent md:text-fig-20">
            Product Designer
          </p>
        </div>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[8px] hover:opacity-80"
        >
          <Image src={linkedln} alt="" aria-hidden="true" width={24} height={24} className="h-[24px] w-[24px]" />
          <span className="text-fig-16 text-title">
            Linkedin
          </span>
        </a>
      </div>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-2">
        <p className="text-fig-16 text-label">
          © {new Date().getFullYear()} Owoade Tobiloba. All Rights Reserved
        </p>
        <p className="text-fig-16 text-label sm:text-right">
          Designed by Me, Developed by{" "}
          <a
            href="https://www.linkedin.com/in/owoade-habeeb-temitope-a747601b0/"
            className="cursor-pointer hover:text-accent"
          >
            Habeeb Owoade
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
