import React from 'react'
import Image from 'next/image'
import { tobiProjects } from '@/constants'
import Link from "next/link"
import { FaExternalLinkAlt } from 'react-icons/fa'
const TobiProjects = () => {
    return (

        <div className='grid md:grid-cols-2 gap-x-[108px] mt-8 md:mt-[4rem] gap-y-4'>
            {tobiProjects.map((project, index) => (
                
            <div key={index} className="flex rounded-[12px] md:rounded-[20px] border border-solid border-[#667085] py-4 md:py-[32px] px-4 md:px-[34px]  flex-col  gap-[32px] ">
                    <Image src={project?.image} width={527} height={415} alt={project?.title} />
                    <div>
                        <h1 className='flex-grow text-[#fff] font-tinyBrushy text-[24px] font-normal uppercase'> {project?.title}</h1>

                        <p className='text-[#C9CFD9] font-Beginning text-[14px] md:text-[20px] font-normal leading-[normal]  pb-[24px] pt-[8px]'>{project?.description}</p>
                        <Link href="">

                            <div className={`text-[#FFA17A] rounded-[100px] backdrop-blur-[7.5px] bg-[#FFFFFF1A] p-4  w-fit  text-[14px] md:text-[16px] flex flex-row gap-1 items-center   font-Beginning leading-[normal] font-normal text-center   `}>
                                {project?.type.toLowerCase() === "behance" ? "View On Behance" :
                                    "View Live  Website"}
                                <FaExternalLinkAlt />

                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TobiProjects
