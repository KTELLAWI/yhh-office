import React from 'react'
import PackageColumn, { Package } from './PackageColumn';
const packages = [
    // {
    //   name: "Bronze Package",
    //   id: "bronze",
    //   href: "#",
    //   price: " 7000",
    //   slogan: "Your Gateway to the Digital World",
    //   description: "Your Gateway to the Digital World",
    //   detailsOfCost: "AED 350/month starting from the second year",
    //   features: [
    //     ".ae Domain Hosting",
    //     "Email Setup",
    //     "Website Hosting",
    //     "Professionally Designed Pages",
    //     "Hero Page",
    //     "Product Page",
    //     "About Page",
    //     "Contact Us Page",
    //     "Template Selection",
    //     "Efficient Turnaround Time"
    //   ],
    // },
    // {
    //   name: "Silver Package",
    //   id: "silver",
    //   href: "#",
    //   price: " 9000",
    //   slogan: "Elevate Your Online Presence",
    //   detailsOfCost: "AED 450/month starting from the second year",
    //   description: "Elevate Your Online Presence",
    //   popoular: true,
    //   features: [
    //     "All of the mentioned in the Bronze Package",
    //     "Pro Templates Access",
    //     "Enhanced Contact Us Page",
    //     "Efficient Turnaround Time"
    //   ],
    // },
    {
        name: "Gold Package",
        variant: "Gold",
        id: "gold",
        href: "#",
        price: "12000",
        slogan: "Maximizing Your Global Reach",
        detailsOfCost: "AED 600/month starting from the second year",
        description: "Maximizing Your Global Reach",
        features: [
            "All of the mentioned in the Silver Package",
            "Up to 5 email users",
            "Content Management System Support for 4 Pages",
            "Secondary Language Option",
            "Efficient Turnaround Time"
        ],
    },
    {
        name: "Platinum Package",
        variant: "Platinum",
        id: "platinum",
        href: "#",
        price: "16000",
        slogan: "The Pinnacle of Web Excellence",
        detailsOfCost: "AED 800/month starting from the second year",
        description: "The Pinnacle of Web Excellence",
        features: [
            "All of the mentioned in the Gold Package",
            "Up to 8 email users",
            "Extended CMS Support",
            "Multilingual Capability",
            "Integration of Meeting Management Tools",
            "Prioritized turnaround time"
        ],
    },
    {
        name: "Diamond Package",
        id: "diamond",
        variant: "Diamond",
        href: "#",
        price: "23000",
        slogan: "Seamless Transactions Suite",
        detailsOfCost: "AED 1000/month starting from the second year",
        description: "Seamless Transactions Suite",
        features: [
            "All of the mentioned in the Platinum Package",
            "Simplified Payment Gateway",
            "Prioritized turnaround time"
        ],
    },
];
function WebsitesService({ packages }: { packages: Package[] }) {
    return (
        <div className="animate__animated animate__slower  animate__fadeIn delay-500 text-white mt-6 md:mt-10">
            <span className="font-semibold text-sm mb-2 md:text-lg xl:text-2xl">
                Website creation service
            </span>
            <span className="font-bold flex w-[50%] pb-3 border-[#E12120] border-b-4  text-xl md:text-2xl xl:text-[32px] ">
                Design, Build, and host with ease
            </span>
            <div className="flex flex-col lg:flex-row lg:flex-nowrap  justify-center animate__animated animate__slow animate__fadeInUp p-8">
                {
                    packages?.map((item, index) => (
                        <div className='mr-5 col-span-1 mb-4  lg:w-1/3'>
                        <PackageColumn
                            key={item.id}
                            packageDetails={item}
                        />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WebsitesService