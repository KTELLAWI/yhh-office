import React from 'react'
import { packageTitleBGs } from './package'
import PackageColumn from './PackageColumn'
const exclusive =  {
    name: "Exclusive Consultation Package",
    variant: 'Exclusive' as keyof typeof packageTitleBGs,
    id: "exclusive",
    href: "#",
    price: "AED 12000",
    slogan: "Our Exclusive Tier Consultation Package is tailored for entrepreneurs and business owners seeking in-depth analysis and actionable insights for their projects. Priced at a flat rate of AED 12,000, this package offers comprehensive support designed to propel your venture to the next level.Your Global Reach",
    detailsOfCost: "that will be credited as a downpayment towards the total cost of your project if you decided to continue with YH&H",
    description: "Maximizing Your Global Reach",
    features: [
      "Up to 3 Hours of Dedicated Consultation",
      "Persona Development and Responsibility Mapping",
      "Customized Quotation",
      "Business and System Analysis",
      "Comprehensive Report"
    ],
  };
function ExclusiveConsultationService() {
  return (
    <div className="animate__animated animate__slower  animate__fadeIn delay-500 text-white mt-6 md:mt-10">
    <span className="font-semibold text-sm mb-2 md:text-lg xl:text-2xl">
    Exclusive Consultation Package

    </span>
    <span className="font-bold flex w-[50%] pb-3 border-[#E12120] border-b-4  text-xl md:text-2xl xl:text-[32px] ">
        
    </span>
    <div className="flex lg:p-16 flex-col lg:flex-row lg:flex-nowrap  justify-center animate__animated animate__slow animate__fadeInUp p-8">
        <div>
            <PackageColumn packageDetails={exclusive}
            
            />
        </div>
    </div>
</div>
  )
}

export default ExclusiveConsultationService