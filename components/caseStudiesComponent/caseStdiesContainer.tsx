import { caseStudies } from '@/constants'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
const CaseStudiesCompoenent = () => {
    return (
        <div className='py-[80px] gap-[52px] flex flex-col items-center justify-center mx-auto max-w-screen-lg '>
            {caseStudies.map((caseStudies, index) => (

                <div key={index} className={`rounded-[40px] border border-solid border-[#667085] grid grid-cols-2 gap-[48px] place-items-center place-content-center p-[20px]`}>
                    <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}><Image className='h-full object-contain w-full ' src={caseStudies?.image} width={542} height={380} alt={caseStudies?.title} /></div>
                    <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} flex flex-col  px-[32px]  gap-[72px]`}>
                        <div>
                            <h1 className='text-[#fff] font-tinyBrushy text-[40px] font-normal leading-[normal]'>{caseStudies?.title}</h1>

                            <p className="text-[#C9CFD9] text-[18px] font-normal leading-[normal] pt-[12px] font-Beginning">{caseStudies?.description}</p>
                            <div className="flex flex-row flex-wrap pt-[24px] gap-4 items-center ">
                                {caseStudies?.skills?.map((skills, index) => (
                                    <p key={index} className='text-[#98A2B3] text-center font-tinyBrushy text-[14px] font-normal leadin-[normal]'>{skills}</p>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-row  gap-0 flex-wrap  '>
                            {caseStudies?.links?.map((link, index) => (
                                <div key={index} className=' '>
                                    <Link href={link?.theLink} className='' >

                                        <div className={`${link?.type === 'caseStudy' ? 'text-[#FFA17A] rounded-[100px] backdrop-blur-[7.5px] bg-[#FFFFFF1A] p-4' : 'text-[#FFF] bg-[#06090F] p-4 backdrop-blur-[7.5px] '}  text-[16px] flex flex-row gap-1 items-center   font-Beginning leading-[normal] font-normal text-center   `}>
                                            {link?.text}
                                            {index === 0 && <FaExternalLinkAlt />}
                                        </div>
                                    </Link>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            ))
            }
            <Link href="/projects" className='self-end '>

                <div className='flex self-end text-[#FFA17A]  font-Beginning text-[32px] font-normal leading-[normal] '>
                    Go to Project Page
                    <FaExternalLinkAlt />

                </div>
            </Link>
        </div >
    )
}

export default CaseStudiesCompoenent
