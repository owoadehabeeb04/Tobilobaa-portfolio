import React from "react";
import Image, { type StaticImageData } from "next/image";
import customerPhoto from "../../public/assets/images/adepa/research-questions-customer.webp";
import storeOwnerPhoto from "../../public/assets/images/adepa/research-questions-storeowner.webp";
import businessPhoto from "../../public/assets/images/adepa/research-questions-business.webp";

type Category = {
  image: StaticImageData;
  alt: string;
  title: string;
  questions: string[];
};

const categories: Category[] = [
  {
    image: customerPhoto,
    alt: "A customer shopping at Adepa African Grocery",
    title: "Customers",
    questions: [
      "We explored why customers come to Adepa",
      "The difficulties they encounter while shopping",
      "How smooth or stressful their experience is from start to finish"
    ]
  },
  {
    image: storeOwnerPhoto,
    alt: "A store employee at Adepa African Grocery",
    title: "Store Owners & Employees",
    questions: [
      "What services do they offer to their customers?",
      "What are their service chain like? including front end and back end services?",
      "How do they keep their existing customers informed"
    ]
  },
  {
    image: businessPhoto,
    alt: "Adepa African Grocery storefront",
    title: "Business",
    questions: [
      "How did the business start?",
      "What is the background story of the business?",
      "Does the business like new customers every time or prefer returning customers?"
    ]
  }
];

const ResearchQuestions = () => {
  return (
    <div className="pt-[60px] sm:pt-[90px] md:pt-[120px]">
      <h1 className="text-title font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-[normal]">
        Research Questions
      </h1>
      <p className="pt-[16px] sm:pt-[20px] md:pt-[24px] text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
        On getting there, We had to create 3 categories to be able to
        understand the pain points, So we asked questions based on these
        categories of people that use Adepa :
      </p>
      <div className="pt-[30px] sm:pt-[40px] md:pt-[48px] grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[32px]">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-[20px] sm:gap-[24px]">
            <Image
              src={category.image}
              width={340}
              height={330}
              alt={category.alt}
              className="w-full max-w-[320px] h-auto aspect-square rounded-[40%] object-cover"
            />
            <div className="flex flex-col items-center gap-[8px] text-center">
              <h2 className="text-title font-tinyBrushy text-[24px] sm:text-[26px] md:text-[28px] font-normal leading-[normal]">
                {category.title}
              </h2>
              <ol className="pt-[4px] flex flex-col gap-[10px] list-decimal ms-[20px] text-left">
                {category.questions.map((question, qIndex) => (
                  <li
                    key={qIndex}
                    className="text-body text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[normal] font-Beginning"
                  >
                    {question}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchQuestions;
