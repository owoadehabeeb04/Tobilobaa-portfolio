import React from 'react'

const WhatYouLearnt = () => {
    const arrow = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.25 12C2.25 6.615 6.615 2.25 12 2.25C17.385 2.25 21.75 6.615 21.75 12C21.75 17.385 17.385 21.75 12 21.75C6.615 21.75 2.25 17.385 2.25 12ZM15.61 10.186C15.67 10.1061 15.7134 10.0149 15.7377 9.91795C15.762 9.82098 15.7666 9.72014 15.7514 9.62135C15.7361 9.52257 15.7012 9.42782 15.6489 9.3427C15.5965 9.25757 15.5276 9.18378 15.4463 9.12565C15.3649 9.06753 15.2728 9.02624 15.1753 9.00423C15.0778 8.98221 14.9769 8.97991 14.8785 8.99746C14.7801 9.01501 14.6862 9.05205 14.6023 9.10641C14.5184 9.16077 14.4462 9.23135 14.39 9.314L11.154 13.844L9.53 12.22C9.38783 12.0875 9.19978 12.0154 9.00548 12.0188C8.81118 12.0223 8.62579 12.101 8.48838 12.2384C8.35097 12.3758 8.27225 12.5612 8.26882 12.7555C8.2654 12.9498 8.33752 13.1378 8.47 13.28L10.72 15.53C10.797 15.6069 10.8898 15.6662 10.992 15.7036C11.0942 15.7411 11.2033 15.7559 11.3118 15.7469C11.4202 15.738 11.5255 15.7055 11.6201 15.6519C11.7148 15.5982 11.7967 15.5245 11.86 15.436L15.61 10.186Z"
            fill="#FAC738"
          />
        </svg>
    );
    
    const items = [
        "Designing for a New Industry – This was my first time designing a lifestyle/fitness product, which expanded my understanding of user behaviors in this space and the importance of motivation-driven design.",
        "Product Strategy & Leadership – As the head of design, I refined my strategy skills, critical thinking, and decision-making, shaping the product's direction and vision to align with both user needs and business goals.",
        "Balancing Engagement & Usability – I learned how to create an experience that keeps users engaged while maintaining a clear, intuitive interface, ensuring that both casual and dedicated runners find value in the platform."
    ];
    
    return (
        <div className='pt-[60px] sm:pt-[90px] md:pt-[125px] px-[16px] sm:px-[24px] md:px-0'>
            <h1 className='text-[#C9CFD9] font-tinyBrushy font-normal leading-[normal] text-[32px] sm:text-[40px] md:text-[48px]'>
                What did i learn?
            </h1>
            
            <p className='pt-[16px] sm:pt-[20px] md:pt-[24px] text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] leading-[normal] font-normal font-Beginning'>
                Designing this product was tasking & these are the things I learnt from designing this product:
            </p>
            
            <div className='pt-[24px] sm:pt-[32px] md:pt-[40px] flex flex-col gap-[20px] sm:gap-[24px] md:gap-[32px]'>
                {items.map((item, index) => (
                    <div key={index} className='flex flex-row gap-[12px] sm:gap-[14px] md:gap-[16px] items-start sm:items-center'>
                        <div className='flex-shrink-0 mt-1 sm:mt-0'>
                            {arrow}
                        </div>
                        <p className='text-[#fff] text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.5] font-Beginning'>
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatYouLearnt;