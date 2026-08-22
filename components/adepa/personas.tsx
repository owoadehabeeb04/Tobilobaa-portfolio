import React from "react";
import Image, { type StaticImageData } from "next/image";
import personaCustomer from "../../public/assets/images/adepa/persona-customer.webp";
import personaAttendant from "../../public/assets/images/adepa/persona-attendant.webp";
import personaManager from "../../public/assets/images/adepa/persona-manager.webp";

type Persona = {
  image: StaticImageData;
  alt: string;
  width: number;
  height: number;
};

const personas: Persona[] = [
  {
    image: personaCustomer,
    alt: "Persona card for Kenny, a regular customer of Adepa who shops online for self-care and cosmetic products",
    width: 1164,
    height: 662
  },
  {
    image: personaAttendant,
    alt: "Persona card for Akosua Addo, a store attendant at Adepa",
    width: 1180,
    height: 670
  },
  {
    image: personaManager,
    alt: "Persona card for Mr Adepa, the store owner and manager",
    width: 1164,
    height: 664
  }
];

const Personas = () => {
  return (
    <div className="pt-[60px] sm:pt-[90px] md:pt-[120px]">
      <h1 className="text-title font-tinyBrushy text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-[normal]">
        Following the stakeholder map, three personas were created to
        represent the key stakeholders that make up the business of the
        store. they include :
      </h1>
      <ol className="pt-[24px] sm:pt-[28px] md:pt-[32px] flex flex-col gap-[16px] list-decimal ms-[24px]">
        <li className="text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
          Customer
        </li>
        <li className="text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
          Store Attendant
        </li>
        <li className="text-body text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal] font-Beginning">
          Store Manager
        </li>
      </ol>

      <div className="pt-[30px] sm:pt-[40px] md:pt-[56px] grid grid-cols-1 sm:grid-cols-2 gap-[24px] sm:gap-[32px]">
        {personas.slice(0, 2).map((persona, index) => (
          <Image
            key={index}
            src={persona.image}
            width={persona.width}
            height={persona.height}
            alt={persona.alt}
            className="w-full h-auto rounded-[8px] sm:rounded-[12px]"
          />
        ))}
        <Image
          src={personas[2].image}
          width={personas[2].width}
          height={personas[2].height}
          alt={personas[2].alt}
          className="w-full h-auto rounded-[8px] sm:rounded-[12px] sm:col-span-2 sm:max-w-[calc(50%-16px)] sm:mx-auto"
        />
      </div>
    </div>
  );
};

export default Personas;
