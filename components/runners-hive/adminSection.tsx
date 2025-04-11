import React from "react";
import vendorPage1 from "../../public/assets/images/vendorpage1.svg";
import vendorPage2 from "../../public/assets/images/Screenshot 2025-03-29 at 23.00.34 2.svg";
import vendorPage3 from "../../public/assets/images/vendorpage3.svg";
import productpage1 from "../../public/assets/images/ProductsPage.svg";
import productpage2 from "../../public/assets/images/ProductsPage2.svg";
import productpage3 from "../../public/assets/images/productpage3.svg";
import productpage4 from "../../public/assets/images/productPage4.svg";
import Image from "next/image";

const AdminSection = () => {
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <circle cx="8" cy="8.5" r="8" fill="#FAC738" />
      <circle cx="8" cy="8.5" r="4" fill="#090909" />
    </svg>
  );
  
  const vendorItems = [
    {
      title: "Add Vendor Page",
      image: vendorPage1
    },
    {
      title: "Add Vendor Modal",
      image: vendorPage2
    },
    {
      title: "Vendors Added",
      image: vendorPage3
    }
  ];

  const productItems = [
    {
      title: "Add Product Page",
      image: productpage1
    },
    {
      title: "Products added showing date added, active date & expiry date",
      image: productpage2
    },
    {
      title: "Product Information (General Info)",
      image: productpage3
    },
    {
      title: "Product Information (Attachment)",
      image: productpage4
    }
  ];
  
  return (
    <>
      <div className="pt-[60px] sm:pt-[90px] md:pt-[126px] mx-auto px-[16px] sm:px-[24px] md:px-[48px] lg:px-[103px] max-w-[1311px]">
        <h1 className="text-[#C9CFD9] font-tinyBrushy text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-[normal]">
          Admin Section
        </h1>
        <p className="pt-[16px] sm:pt-[20px] md:pt-[24px] text-[#fff] font-Beginning text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[normal]">
          After designing, we thought about many things to make the product very
          usable at the first stage. Some of them are:{" "}
        </p>

        <div className="pt-[24px] sm:pt-[32px] md:pt-[40px] flex flex-col gap-[12px]">
          <div className="flex flex-row items-start sm:items-center gap-[12px] sm:gap-[16px] md:gap-[23px]">
            <aside className="mt-1 sm:mt-0 flex-shrink-0">{arrow}</aside>

            <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.4] sm:leading-normal font-Beginning">
              how do we add Products to the application?{" "}
            </p>
          </div>
          <div className="flex flex-row items-start sm:items-center gap-[12px] sm:gap-[16px] md:gap-[23px]">
            <aside className="mt-1 sm:mt-0 flex-shrink-0">{arrow}</aside>

            <p className="text-[#fff] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.4] sm:leading-normal font-Beginning">
              How do we register vendors that want to put their products on the
              application?{" "}
            </p>
          </div>
        </div>

        <div className="pt-[24px] sm:pt-[32px] md:pt-[40px] flex flex-col gap-[12px]">
          <div className="flex flex-row items-start sm:items-center gap-[12px] sm:gap-[16px]">
            <aside className="mt-1 sm:mt-0 flex-shrink-0">{arrow}</aside>

            <p className="text-[#fff] text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy">
              Vendors Page{" "}
            </p>
          </div>
          <div className="pl-[28px] sm:pl-[40px] md:pl-[60px]">
            <p className="text-[#C9CFD9] font-tinyBrushy text-[20px] sm:text-[22px] md:text-[24px] font-normal leading-[normal]">
              Problem : How to add vendors?
            </p>
            <p className="text-[#fff] text-[14px] sm:text-[15px] md:text-base font-normal leading-[1.4] sm:leading-normal font-Beginning">
              Adding vendors means that there are vendors that are ready to put
              up their products on the marketplace and want to register on the
              application.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="grid max-w-[1311px] px-[16px] sm:px-[24px] md:px-[48px] mx-auto grid-cols-1 mt-[24px] sm:mt-[32px] md:mt-[40px] md:grid-cols-2 gap-y-[24px] sm:gap-y-[32px] md:gap-y-[40px] gap-x-[24px] sm:gap-x-[48px] md:gap-x-[96px] place-content-center place-items-center">
        {vendorItems.map((vendor, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index === 2 ? "md:col-span-2 md:max-w-[50%] md:mx-auto" : ""
            }`}
          >
            <p className="text-[#FFF] mb-[8px] sm:mb-[12px] md:mb-[16px] font-Beginning text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-normal">
              {vendor.title}
            </p>
            <div className="w-full relative rounded-[8px] sm:rounded-[10px] md:rounded-[12px] overflow-hidden">
              <Image
                src={vendor.image}
                alt={vendor.title}
                height={380}
                width={585}
                className="rounded-[8px] sm:rounded-[10px] md:rounded-[12px] h-auto w-full"
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-[60px] sm:pt-[90px] md:pt-[126px] mx-auto px-[16px] sm:px-[24px] md:px-[48px] lg:px-[103px] max-w-[1311px]">
        <div className="pt-[24px] sm:pt-[32px] md:pt-[40px] flex flex-col gap-[12px]">
          <div className="flex flex-row items-start sm:items-center gap-[12px] sm:gap-[16px]">
            <aside className="mt-1 sm:mt-0 flex-shrink-0">{arrow}</aside>

            <p className="text-[#fff] text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[normal] font-tinyBrushy">
              Products Page{" "}
            </p>
          </div>
          <div className="pl-[28px] sm:pl-[40px] md:pl-[60px]">
            <p className="text-[#C9CFD9] font-tinyBrushy text-[20px] sm:text-[22px] md:text-[24px] font-normal leading-[normal]">
              Problem : How to add products?{" "}
            </p>
            <p className="text-[#fff] text-[14px] sm:text-[15px] md:text-base font-normal leading-[1.4] sm:leading-normal font-Beginning">
              Adding Products is showing exactly what will show on the
              application, adding the dates of addition, dates the products will
              expire, what type of purchase (discount, buying outrightly etc)
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid max-w-[1311px] px-[16px] sm:px-[24px] md:px-[48px] mx-auto grid-cols-1 mt-[24px] sm:mt-[32px] md:mt-[40px] md:grid-cols-2 gap-y-[24px] sm:gap-y-[32px] md:gap-y-[40px] gap-x-[24px] sm:gap-x-[48px] md:gap-x-[96px] place-content-center place-items-center">
        {productItems.map((product, index) => (
          <div
            key={index}
            className="flex flex-col"
          >
            <p className="text-[#FFF] pb-[8px] sm:pb-[12px] md:pb-[16px] font-Beginning text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-normal">
              {product.title}
            </p>
            <div className="w-full relative rounded-[8px] sm:rounded-[10px] md:rounded-[12px] overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                height={380}
                width={585}
                className="rounded-[8px] sm:rounded-[10px] md:rounded-[12px] h-auto w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminSection;