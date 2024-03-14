import React from 'react'
import Image from "next/image";
import sheraImg from "../../../../../public/sheraaLogo2.png";
import { packageTitleBGs } from './package';
import PackageColumn from './PackageColumn';
import { ServicesButton } from './button';
const packages = [
    {
        name: "Bronze Package",
        variant: 'Bronze' as keyof typeof packageTitleBGs,
        id: "bronze",
        href: "#",
        price: "AED 7000",
        slogan: "Your Gateway to the Digital World",
        description: "Your Gateway to the Digital World",
        detailsOfCost: "AED 350/month starting from the second year",
        features: [
            ".ae Domain Hosting",
            "Email Setup",
            "Website Hosting",
            "Professionally Designed Pages",
            "Hero Page",
            "Product Page",
            "About Page",
            "Contact Us Page",
            "Template Selection",
            "Efficient Turnaround Time"
        ],
    },
    {
        name: "Silver Package",
        variant: 'Silver' as keyof typeof packageTitleBGs,
        id: "silver",
        href: "#",
        price: "AED 9000",
        slogan: "Elevate Your Online Presence",
        detailsOfCost: "AED 450/month starting from the second year",
        description: "Elevate Your Online Presence",
        popoular: true,
        features: [
            "All of the mentioned in the Bronze Package",
            "Pro Templates Access",
            "Enhanced Contact Us Page",
            "Efficient Turnaround Time"
        ],
    },
];
function SheraaService() {
    return (
        <section >
            <div className='animate__animated animate__slower  animate__fadeIn delay-500 flex mt-6 space-x-4 text-white '>
                <span className='flex w-[50%] justify-start text-white space-x-5 border-b-4 border-blue-500 pb-2'>
                    {/* <Image src={sheraImg} alt="sheraa logo" width={95} height={95} /> */}
                    <h1 className="my-0 font-semibold text-2xl">
                        Free Sheraa exclusive consultation{" "}
                    </h1>
                </span>
            </div>

            <div className='flex-col lg:flex lg:flex-row animate__animated animate__slow animate__fadeInUp p-4'>


                <div className='flex flex-col lg:flex-row lg:flex-1 space-x-2 justify-start p-4'>
                    {
                        packages.map((item, index) => (
                            <div className=' col-span-1 mb-4  lg:w-1/2'>
                                <PackageColumn
                                    packageDetails={item}
                                    key={item.id}
                                />
                            </div>
                        ))
                    }
                </div>

                <div className='flex justify-between flex-1  p-4'>
                    <div className="flex  mb-4 p-1">

                        <div className="px-6 pt-8 pb-0 flex flex-col justify-between  bg-[#171717] rounded-[6px] ">
                            <div>
                                <Image src={sheraImg} alt="sheraa logo" width={70} height={70} />

                                <h3 className="my-6 text-white font-semibold text-2xl">
                                    Free Sheraa exclusive consultation{" "}
                                </h3>
                                <p className="text-base text-white mb-8 leading-10">
                                    The Free Sheraa Exclusive Consultation, hosted by the YH&H
                                    team at Sheraa: Sharjah Entrepreneurship Center, offers a
                                    focused 30-minute session every Thursday from 10 AM to 1
                                    PM for entrepreneurs and business owners. This session
                                    allows you to discuss your project and explore
                                    technological avenues without the pressure of immediate
                                    estimations or quotations. It&apos;s a perfect opportunity
                                    to gain expert feedback and strategize for your
                                    venture&apos;s growth in a supportive environment. Take
                                    advantage of this chance to refine your ideas and push
                                    your project forward with professional insights.
                                </p>
                            </div>
                            <ServicesButton calLink="team/yhh-team/sheraa-consultation" className='mb-6'>
                                Book your free meeting
                            </ServicesButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SheraaService