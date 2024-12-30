'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import resumeIcon from "../../public/assets/images/Icon.svg"
import { navItems } from '@/constants'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);
    // const currentPath =
    //     pathname.split("/")[3] === undefined || pathname.split("/")[3] === "users"
    //         ? "admin"
    //         : pathname.split("/")[3];

    // const getLinkClassName = (route: string) => {
    //     const currentRoute =
    //         route.split("/")[3] === undefined ? "admin" : route.split("/")[3];

    //     return currentPath === currentRoute ? "bg-black text-white" : "text-black";
    // };
    return (
        <div className=' z-[100] mx-auto fixed top-[1] w-full '>
            <div className='flex max-w-screen-xl mx-auto px-[2rem] py-6 flex-row justify-between items-center '>
                <Link href="/"><div>
                    <h1 className='text-[48px] font-normal font-tinyBrushy leading-[normal]'><span className='text-[#fff]'>T</span><span className='text-[#FFA17A] '>0</span></h1>
                </div>
                </Link>
                {/* bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 */}
                <div className='w-fit xbg-clip-padding backdrop-filter   backdrop-blur-2xl    bg-opacity-40  z-[150]  rounded-[300px] '>
                    <div className={`${pathname === '/' ? 'p-6' : 'p-2'} rounded-[300px] w-full  opacity-[25%]   bg-clip-padding backdrop-filter   backdrop-blur-2xl    bg-opacity-40  z-[150]  justify-center items-center border-[#fff] border border-solid      flex flex-row gap-4 `}>

                        {navItems.map((navs, index) => {
                            const isActive = pathname === navs.path || pathname.startsWith(navs.path)
                            return (
                                <Link href={navs?.path} key={index} className={`${isActive ? 'text-[#FFA17A] bg-[#202328] rounded-[100px] p-4' : 'text-[#fff]'}  font-beginning font-normal leading-[normal] text-base`}>
                                    <p className=''> {navs?.text}</p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <a
                    href="https://read.cv/tobiloba.owoade"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <div className='flex items-center gap-2'>
                    <Image src={resumeIcon} width={15} height={15} alt="resume icon" />

                    <h1 className='font-beginning text-[1.5rem] font-normal leading-[normal] text-[#fff]'>Resume</h1>
                </div>
            </a>
        </div>
        </div >
    )
}

export default Navbar