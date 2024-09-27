import React from 'react'
import productdesign from "../../public/assets/images/Component 8.svg"
import uiUx from "../../public/assets/images/Group 3.svg"
import Image from 'next/image'
import ProjectsCaseStudy from '@/components/caseStudiesComponent/projectCaseStudoesComponent'
import dot from "../../public/assets/images/dot.svg"
import TobiProjects from '@/components/caseStudiesComponent/tobiProjects'
const Projects = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-[2rem] relative py-[4rem]'>
            <div className='flex flex-row items-center gap-[23px] pt-[88px]'>

                <h1 className='text-[#fff] font-tinyBrushy text-[48px] font-normal uppercase '>MY PROJECTS</h1>
                <Image src={productdesign} width={62.412} height={56.396} alt="productdesign" />
                <Image src={uiUx} width={62.412} height={56.396} alt="productdesign" />
            </div>
            <Image className='absolute top-[9%] left-[12%]' src={dot} alt="dot" width={4} height={4} />
            <p className='text-[#C9CFD9] font-Beginning text-[20px] font-normal leading-[32px] '>I have worked on different projects since I started UX design in 2021 and I have a few here to show. Some of them are live on Appstore & Playstore while some are live and being used already on websites. Some are also personal projects done by me. </p>

            <div
            >
                <h1 className='text-[#fff] pt-[90px] font-tinyBrushy text-[32px] font-normal uppercase leading-[normal] '>
                    CASE STUDIES.
                </h1>
                <ProjectsCaseStudy /> </div>

            <div
            >
                <h1 className='text-[#fff] pt-[90px] font-tinyBrushy text-[32px] font-normal uppercase leading-[normal] '>
                    My  Projects.
                </h1>
                <TobiProjects /> </div>
        </div>
    )
}

export default Projects
