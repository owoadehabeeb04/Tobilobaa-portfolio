// import React from "react";
// import Image from "next/image";
// // import footericon from "../../public/assets/images/Group 1024.svg"
// import resumeIcon from "../../public/assets/images/Icon.svg";
// import instagram from "../../public/assets/images/instagram.svg";
// import linkedln from "../../public/assets/images/linkedln.svg";
// import twitter from "../../public/assets/images/twitter.svg";
// import Link from "next/link";
// import footerIcon from "../../public/assets/images/footerIcon.svg";
// import behance from "../../public/assets/images/behanceIcon.svg";
// const Footer = () => {
//   const socialIcons = [
//     {
//       text: "Resume",
//       link: "https://docs.google.com/document/d/11wiyXFCkBarWxYcvqqdWChLhKwxxxc6UI-GQ5RKKxIY/edit?tab=t.0",
//       image: resumeIcon
//     },
//     {
//       text: "Twitter",
//       link: "https://x.com/Kaykeed_",
//       image: twitter
//     },
//     {
//       text: "Linkedln",
//       link: "https://www.linkedin.com/in/tobiloba-owoade/",
//       image: linkedln
//     },
//     {
//       text: "Instagram",
//       link: "https://www.instagram.com/kaykeed_/",
//       image: instagram
//     },
//     {
//       text: "Behance",
//       link: "",
//       image: behance
//     }
//   ];
//   return (
//     <div
//       className="mx-auto px-5 md:px-8 py-[92px] sm:py-[112px] lg:px-[6.5rem] mt-4 md:mt-20 "
//       id="contact"
//     >
//       {/* <div className='max-w-screen-xl mx-auto'>
//             <div className='flex justify-between items-center'>
//                 <Image className='w-[15%] sm:w-fit' src={footericon} alt="footer icon " width={111.9} height={67.9} />
//                 <Image  className='w-[15%] sm:w-fit rotate-[30deg]'  src={footericon} alt="footer icon " width={111.9} height={67.9} />
//             </div>
//             <div>
//                 <div className='max-w-[1050px] flex justify-center items-center  flex-col mx-auto  pt-[40px]'>
//                     <h1 className='font-beginning md:text-3xl sm:text-2xl text-xl lg:text-[40px] text-[#999] font-normal leading-[normal] text-center '>Exploring a new product idea? Looking for ways to improve your product?. Send a mail to:</h1>
//                     <a href="mailto:qudusowoade@gmail.com" className='underline text-center font-tinyBrushy text-[#fff] sm:text-3xl pt-6 sm:pt-8 text-2xl md:text-5xl lg:text-[4.5rem] font-normal leading-[normal] '>
//                         QUDUSOWOADE@GMAIL.COM
//                     </a>
//                 </div>
//                 <div className='flex justify-center  gap-[32px] pt-[55px] items-center mx-auto'>
//                     {socialIcons.map((social, index) => (
//                         <Link href={social?.link} key={index}> <div className='flex gap-2 items-center' key={index}>
//                             <Image className='sm:w-fit w-[1rem] sm:h-fit h-[1rem]' src={social?.image} alt={social?.text} width={24} height={24} />
//                             <p className='text-[#fff] sm:block hidden font-beginning text-base font-normal leading-[normal]'>{social?.text}</p>
//                         </div></Link>
//                     ))}
//                 </div>

//                 <p className='font-beginning pt-[86px] text-[#999] text-base font-normal leading-[normal]'>© 2024 Owoade Tobiloba. All Rights Reserved</p>
//             </div>
//             </div> */}

//       <div className="flex justify-between sm:items-center flex-col-reverse md:flex-row ">
//         <div className="sm:max-w-[478px] flex flex-col gap-[12px]">
//           <h1 className="text-[#999] font-Beginning   text-[14px] sm:text-[20px] font-normal leading-[normal]">
//             Exploring a new product idea? Looking for ways to improve your
//             product? Send a mail to:
//           </h1>
//           <p className="text-[#fff] font-tinyBrushy  text-[24px]  sm:text-[32px] font-normal underline leading-[normal]">
//             QUDUSOWOADE@GMAIL.COM
//           </p>
//         </div>
//         <div className="w-1/4 sm:w-fit sm:max-w-[100px]">
//           <Image src={footerIcon} width={100} height={100} alt={"footer"} />
//         </div>
//       </div>

//       <div className="rounded-[100px] my-[32px] sm:my-[55px] px-[32px] sm:px-[40px] py-[12px] sm:py-[48px] border border-solid border-[#667085] bg-[#17191C] flex  flex-row  gap-[8px] items-center justify-between">
//         <div className="flex sm:flex-row flex-col sm:items-end  sm:gap-[13px] ">
//           <h1 className="text-[#fff] font-tinyBrushy text-base sm:text-[32px] font-normal leading-[normal]">
//             TOBIOWOADE.COM
//           </h1>
//           <p className="text-[#FFA17A] text-[12px] sm:text-[20px] font-normal leading-[normal] font-Beginning">
//             UX/UI Designer
//           </p>
//         </div>
//         <div className=" sm:flex hidden justify-center  gap-[12px] items-center ">
//           {socialIcons.map((social, index) => (
//             <Link href={social?.link} key={index}>
//               {" "}
//               <div className="flex gap-[4px] items-center" key={index}>
//                 <Image
//                   className="sm:w-fit w-[1rem] sm:h-fit h-[1rem]"
//                   src={social?.image}
//                   alt={social?.text}
//                   width={24}
//                   height={24}
//                 />
//                 <p className="text-[#fff] block font-beginning text-base font-normal leading-[normal]">
//                   {social?.text}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <div className=" flex  sm:hidden  justify-center  mt-[32px] gap-[8px] items-center ">
//           {socialIcons.map((social, index) => (
//             <Link href={social?.link} key={index}>
//               {" "}
//               <div className="flex gap-[8px] items-center" key={index}>
//                 <Image
//                   className="sm:w-fit w-[1rem] sm:h-fit h-[1rem]"
//                   src={social?.image}
//                   alt={social?.text}
//                   width={24}
//                   height={24}
//                 />
//                 <p className="text-[#fff] block font-beginning text-[12px] sm:text-base font-normal leading-[normal]">
//                   {social?.text}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       <div className="flex justify-between sm:mt-0 mt-[32px] sm:tems-center flex-col md:flex-row">
//         <p className="text-[#999] font-Beginning text-base leading-[normal] font-normal">
//           © {new Date().getFullYear()} Owoade Tobiloba. All Rights Reserved
//         </p>
//         <p className="text-[#999] font-Beginning font-normal leading-[normal] text-base">
//           Designed by Me, Developed by{" "}
//           <a
//             href="https://www.linkedin.com/in/owoade-habeeb-temitope-a747601b0/"
//             className="cursor-pointer "
//           >
//             Habeeb Owoade{" "}
//           </a>{" "}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
'use client';
import React from "react";
import Image from "next/image";
import resumeIcon from "../../public/assets/images/Icon.svg";
import instagram from "../../public/assets/images/instagram.svg";
import linkedln from "../../public/assets/images/linkedln.svg";
import twitter from "../../public/assets/images/twitter.svg";
import Link from "next/link";
import footerIcon from "../../public/assets/images/footerIcon.svg";
import behance from "../../public/assets/images/behanceIcon.svg";
import { usePathname } from "next/navigation";

const Footer = () => {
  const socialIcons = [
    {
      text: "Resume",
      link: "https://docs.google.com/document/d/11wiyXFCkBarWxYcvqqdWChLhKwxxxc6UI-GQ5RKKxIY/edit?tab=t.0",
      image: resumeIcon
    },
    {
      text: "Twitter",
      link: "https://x.com/Kaykeed_",
      image: twitter
    },
    {
      text: "Linkedln",
      link: "https://www.linkedin.com/in/tobiloba-owoade/",
      image: linkedln
    },
    {
      text: "Instagram",
      link: "https://www.instagram.com/kaykeed_/",
      image: instagram
    },
    {
      text: "Behance",
      link: "",
      image: behance
    }
  ];
  const pathname = usePathname()
  console.log(pathname, 'the url path')

  const caseStdiesUrl = ['/sanlam']
  const caseStudiesPathname = caseStdiesUrl.find((url) => pathname.includes(url))
  console.log(caseStudiesPathname, 'the case studies path name')
  return (
   
   <>

    <div
      className="mx-auto px-4 sm:px-5 md:px-8 py-[60px] sm:py-[80px] md:py-[92px] lg:py-[112px] lg:px-[6.5rem] mt-4 md:mt-20"
      id="contact"
    >
      <div className="flex justify-between sm:items-center flex-col-reverse md:flex-row gap-6 md:gap-3">
        <div className="sm:max-w-[478px] flex flex-col gap-[8px] sm:gap-[12px]">
          <h1 className="text-[#999] font-Beginning text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] sm:text-center md:text-left">
            Exploring a new product idea? Looking for ways to improve your
            product? Send a mail to:
          </h1>
          <a 
            href="mailto:qudusowoade@gmail.com" 
            className="text-[#fff] font-tinyBrushy text-[20px] sm:text-[24px] md:text-[32px] font-normal underline leading-[normal] sm:text-center md:text-left"
          >
            QUDUSOWOADE@GMAIL.COM
          </a>
        </div>
        <div className="w-[80px] sm:w-fit sm:max-w-[100px]  md:self-auto">
          <Image src={footerIcon} width={100} height={100} alt={"footer"} />
        </div>
      </div>

      <div className=" rounded-[100px] my-[24px] sm:my-[32px] md:my-[55px] px-[16px] sm:px-[24px] md:px-[40px] py-[16px] sm:py-[24px] md:py-[48px] border border-solid border-[#667085] bg-[#17191C] flex flex-col sm:flex-row gap-[12px] sm:gap-[8px] sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-[4px] sm:gap-[8px] md:gap-[13px]">
          <h1 className="text-[#fff] font-tinyBrushy text-[18px] sm:text-[24px] md:text-[32px] font-normal leading-[normal]">
            TOBIOWOADE.COM
          </h1>
          <p className="text-[#FFA17A] text-[12px] sm:text-[16px] md:text-[20px] font-normal leading-[normal] font-Beginning">
            UX/UI Designer
          </p>
        </div>
        <div className="sm:flex hidden justify-center gap-[8px] sm:gap-[12px] items-center">
          {socialIcons.map((social, index) => (
            <Link href={social?.link} key={index} className="hover:opacity-80 transition-opacity">
              <div className="flex gap-[4px] items-center">
                <Image
                  className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px]"
                  src={social?.image}
                  alt={social?.text}
                  width={20}
                  height={20}
                />
                <p className="text-[#fff] hidden md:block font-beginning text-sm md:text-base font-normal leading-[normal]">
                  {social?.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="flex sm:hidden justify-center mt-[24px] gap-[12px] items-center flex-wrap">
        {socialIcons.map((social, index) => (
          <Link href={social?.link} key={index} className="hover:opacity-80 transition-opacity">
            <div className="flex gap-[6px] items-center">
              <Image
                className="w-[18px] h-[18px]"
                src={social?.image}
                alt={social?.text}
                width={24}
                height={24}
              />
              <p className="text-[#fff] font-beginning text-[11px] font-normal leading-[normal]">
                {social?.text}
              </p>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="flex justify-between mt-[32px] sm:mt-[40px] sm:items-center flex-col sm:flex-row gap-4 sm:gap-2">
        <p className="text-[#999] font-Beginning text-[12px] sm:text-[14px] md:text-base leading-[normal] font-normal  sm:text-left">
          © {new Date().getFullYear()} Owoade Tobiloba. All Rights Reserved
        </p>
        <p className="text-[#999] font-Beginning font-normal leading-[normal] text-[12px] sm:text-[14px] md:text-base  sm:text-right">
          Designed by Me, Developed by{" "}
          <a
            href="https://www.linkedin.com/in/owoade-habeeb-temitope-a747601b0/"
            className="cursor-pointer hover:text-[#FFA17A] transition-colors"
          >
            Habeeb Owoade
          </a>
        </p>
      </div>
    </div>
</>
  );
};

export default Footer;