import React from 'react'
import Image from 'next/image'
import footericon from "../../public/assets/images/Group 1024.svg"
import resumeIcon from "../../public/assets/images/Icon.svg"
import behance from "../../public/assets/images/behance-2 1.svg"
import instagram from "../../public/assets/images/instagram.svg"
import linkedln from "../../public/assets/images/linkedln.svg"
import twitter from "../../public/assets/images/twitter.svg"
import Link from 'next/link'
const Footer = () => {
    const socialIcons = [
        {
            text: 'Resume',
            link: '',
            image: resumeIcon
        },
        {
            text: 'Twitter',
            link: '',
            image: twitter
        },
        {
            text: 'Linkedln',
            link: '',
            image: linkedln
        },
        {
            text: 'Instagram',
            link: '',
            image: instagram
        },
        {
            text: 'Behance',
            link: '',
            image: behance
        }
    ]
    return (
        <div className='mx-auto px-5 md:px-8 lg:px-[6.5rem] mt-4 md:mt-20 ' id='contact'>
            <div className='max-w-screen-xl mx-auto'>
            <div className='flex justify-between items-center'>
                <Image className='w-[15%] sm:w-fit' src={footericon} alt="footer icon " width={111.9} height={67.9} />
                <Image  className='w-[15%] sm:w-fit rotate-[30deg]'  src={footericon} alt="footer icon " width={111.9} height={67.9} />
            </div>
            <div>
                <div className='max-w-[1050px] flex justify-center items-center  flex-col mx-auto  pt-[40px]'>
                    <h1 className='font-beginning md:text-3xl sm:text-2xl text-xl lg:text-[40px] text-[#999] font-normal leading-[normal] text-center '>Exploring a new product idea? Looking for ways to improve your product?. Send a mail to:</h1>
                    <a href="mailto:qudusowoade@gmail.com" className='underline text-center font-tinyBrushy text-[#fff] sm:text-3xl text-2xl md:text-5xl lg:text-[4.5rem] font-normal leading-[normal] '>
                        QUDUSOWOADE@GMAIL.COM
                    </a>
                </div>
                <div className='flex justify-center  gap-[32px] pt-[55px] items-center mx-auto'>
                    {socialIcons.map((social, index) => (
                        <div className='flex gap-2 items-center' key={index}>
                            <Image className='sm:w-fit w-[1rem] sm:h-fit h-[1rem]' src={social?.image} alt={social?.text} width={24} height={24} />
                            <Link href={social?.link} className='text-[#fff] sm:block hidden font-beginning text-base font-normal leading-[normal]'>{social?.text}</Link>
                        </div>
                    ))}
                </div>

                <p className='font-beginning pt-[86px] text-[#999] text-base font-normal leading-[normal]'>© 2024 Owoade Tobiloba. All Rights Reserved</p>
            </div>
            </div>
        </div>
    )
}

export default Footer
