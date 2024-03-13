import React from 'react'
export interface Package {
    name: string;
    id: string;
    href: string;
    price: string;
    slogan: string;
    description: string;
    popoular?: boolean;
    detailsOfCost: string;
    features: string[];
}

const packages = [
    {
        name: "Bronze Package",
        id: "bronze",
        href: "#",
        price: " 7000",
        slogan: "AED 350/month starting from the second year",
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
        id: "silver",
        href: "#",
        price: " 9000",
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
    {
        name: "Gold Package",
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

const FeatureList = ({ feature }: { feature: string }) => {
    return (
        <li className="flex items-center font-medium space-x-2 text-white">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"></path>
            </svg><span>{feature}</span>
        </li>
    )


}

function HorizentalPricePackage({ packageData }: { packageData?: Package[]; }) {
    return (
        <div className="space-y-5 px-8 py-12">

            <div className="demo-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div
                    className="rounded-[30px] md:rounded-[36px] bg-[#171717] overflow-hidden border-[1px] border-red-600 p-8 relative">
                    <div className="h-full">
                        <div className="h-full z-10 relative">
                            <div className="flex flex-col flex-1 justify-between h-full space-y-5">
                                <div className="flex justify-between flex-col">
                                    <div className="text-xl md:text-2xl font-bold text-white flex justify-between">
                                        <span>{packages[0].name}</span>
                                    </div>
                                    <div className="pt-5 font-medium text-white space-y-1">
                                        <div className="flex items-center align-bottom"><span className="pt-1.5">AED</span>
                                            <div className="ml-1 mr-2 text-2xl md:text-3xl font-bold text-white"><span>{packages[0].price}</span>
                                            </div><span className="pt-1.5"></span>
                                        </div>
                                        <div className="text-white">{packages[0].detailsOfCost}
                                        </div>
                                    </div>
                                    <div className="">
                                        <ul className="space-y-2 pt-8">

                                            {packages[0].features.map((feature, index) => (
                                                <FeatureList key={index} feature={feature} />
                                            )
                                            )}

                                        </ul>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <a href="/billing" type="button" target="_blank"
                                        className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-[#E12120] text-white py-4 px-5 rounded-2xl cursor-pointer"><span
                                            className="w-full font-semibold text-white">Choose Starter</span>
                                        <svg className="inline-block h-6" viewBox="0 0 24 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="hidden">
                                <ul className="space-y-2 pt-8">

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="rounded-[30px] md:rounded-[36px] bg-[#171717] overflow-hidden  shadow-md border-[2px] border-red-600 p-8 relative">
                    <div className="h-full">
                        <div className="h-full z-10 relative">
                            <div className="flex flex-col flex-1 justify-between h-full space-y-5">
                                <div className="flex justify-between flex-col">
                                    <div className="text-xl md:text-2xl font-bold text-white flex justify-between">
                                        <span>{packages[1].name}</span>
                                        <svg className="h-6 w-6 animate-ping-slow text-gray-500" viewBox="0 0 50 50" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M30.5 25C30.5 28.0376 28.0376 30.5 25 30.5C21.9624 30.5 19.5 28.0376 19.5 25C19.5 21.9624 21.9624 19.5 25 19.5C28.0376 19.5 30.5 21.9624 30.5 25Z"
                                                stroke="currentColor" stroke-opacity="0.7" stroke-width="4"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path
                                                d="M38.75 25C38.75 32.5939 32.5939 38.75 25 38.75C17.4061 38.75 11.25 32.5939 11.25 25C11.25 17.4061 17.4061 11.25 25 11.25C32.5939 11.25 38.75 17.4061 38.75 25Z"
                                                stroke="currentColor" stroke-opacity="0.4" stroke-width="4.5"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path
                                                d="M47.5 25C47.5 37.4264 37.4264 47.5 25 47.5C12.5736 47.5 2.5 37.4264 2.5 25C2.5 12.5736 12.5736 2.5 25 2.5C37.4264 2.5 47.5 12.5736 47.5 25Z"
                                                stroke="currentColor" stroke-opacity="0.1" stroke-width="5"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <div className="pt-5 text-gray-500 font-medium text-white space-y-1">
                                        <div className="flex items-center align-bottom"><span className="pt-1.5">AED</span>
                                            <div className="ml-1 mr-2 text-2xl md:text-3xl font-bold text-white"><span>{packages[1].price}</span>
                                            </div><span className="pt-1.5">per month</span>
                                        </div>
                                        <div className="text-white">{packages[1].detailsOfCost}
                                        </div>
                                    </div>
                                    <div className="">
                                        <ul className="space-y-2 pt-8">
                                            {packages[1].features.map((feature, index) => (
                                                <FeatureList key={index} feature={feature} />
                                            )
                                            )}

                                        </ul>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <a href="" type="button" target="_blank"
                                        className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-[#E12120] text-white py-4 px-5 rounded-2xl cursor-pointer"><span
                                            className="w-full font-semibold text-white">Choose Startup</span>
                                        <svg className="inline-block h-6" viewBox="0 0 24 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="hidden">
                                <ul className="space-y-2 pt-8">

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="rounded-[30px] md:rounded-[36px] bg-[#171717] overflow-hidden border-[1px] border-red-600 p-8 relative">
                    <div className="h-full">
                        <div className="h-full z-10 relative">
                            <div className="flex flex-col flex-1 justify-between h-full space-y-5">
                                <div className="flex justify-between flex-col">
                                    <div className="text-xl md:text-2xl font-bold text-white flex justify-between">
                                        <span>{packages[2].name}</span>
                                    </div>
                                    <div className="pt-5 text-gray-500 font-medium text-white space-y-1">
                                        <div className="flex items-center align-bottom"><span className="pt-1.5">AED</span>
                                            <div className="ml-1 mr-2 text-2xl md:text-3xl font-bold text-white"><span>{packages[2].price}</span>
                                            </div><span className="pt-1.5"></span>
                                        </div>
                                        <div className="text-white">{packages[2].detailsOfCost}
                                        </div>
                                    </div>
                                    <div className="">
                                        <ul className="space-y-2 pt-8">
                                            {packages[2].features.map((feature, index) => (
                                                <FeatureList key={index} feature={feature} />
                                            )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <a href="/billing" type="button" target="_blank"
                                        className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-[#E12120] text-white py-4 px-5 rounded-2xl cursor-pointer"><span
                                            className="w-full font-semibold text-white">Choose Pro</span>
                                        <svg className="inline-block h-6" viewBox="0 0 24 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="hidden">
                                <ul className="space-y-2 pt-8">

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="rounded-[30px] md:rounded-[36px] bg-[#171717] overflow-hidden border-[1px] border-red-600 p-8 relative lg:col-span-2">
                    <div className="h-full">
                        <div className="h-full z-10 relative lg:flex lg:justify-between lg:w-full lg:pr-8 lg:items-center">
                            <div className="flex flex-col flex-1 justify-between h-full space-y-5">
                                <div className="flex justify-between flex-col">
                                    <div className="text-xl md:text-2xl font-bold text-white flex justify-between">
                                        <span>{packages[3].name}</span>
                                    </div>
                                    <div className="pt-5 text-gray-500 font-medium text-white space-y-1">
                                        <div className="flex items-center align-bottom"><span className="pt-1.5">AED</span>
                                            <div className="ml-1 mr-2 text-2xl md:text-3xl font-bold text-white"><span>{packages[3].price}</span>
                                            </div><span className="pt-1.5"></span>
                                        </div>
                                        <div className="text-white">{packages[3].detailsOfCost}
                                        </div>
                                    </div>
                                    <div className="">
                                        <ul className="space-y-2 pt-8 lg:pt-5 lg:grid lg:grid-cols-2 mt-3 ">


                                            {packages[3].features.map((feature, index) => (
                                                <div className='col-span-1'>
                                                    <FeatureList key={index} feature={feature} />
                                                </div>
                                            )
                                            )}

                                        </ul>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <a href="/billing" type="button" target="_blank"
                                        className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-[#E12120] text-white py-4 px-5 rounded-2xl cursor-pointer"><span
                                            className="w-full font-semibold text-white">Choose Free</span>
                                        <svg className="inline-block h-6" viewBox="0 0 24 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <ul className="space-y-2 pt-8 lg:pt-0">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="rounded-[30px] md:rounded-[36px] bg-[#171717] overflow-hidden border-[1px] border-red-600 p-8 relative">
                    <div className="h-full">
                        <div className="h-full z-10 relative">
                            <div className="flex flex-col flex-1 justify-between h-full space-y-5">
                                <div className="flex justify-between flex-col">
                                    <div className="text-xl md:text-2xl font-bold text-white flex justify-between">
                                        <span>{packages[4].name}</span>
                                    </div>
                                    <div className="pt-5 text-gray-500 font-medium text-white space-y-1">
                                        <div className="flex items-center align-bottom"><span className="pt-1.5">AED</span>
                                            <div className="ml-1 mr-2 text-2xl md:text-3xl font-bold text-white"><span>{packages[4].price}</span>
                                            </div><span className="pt-1.5"></span>
                                        </div>
                                        <div className=" text-white mt-2">{packages[4].detailsOfCost}
                                        </div>
                                    </div>
                                    <div className="">
                                        <ul className="space-y-2 pt-8">

                                            {packages[4].features.map((feature, index) => (
                                                <FeatureList key={index} feature={feature} />
                                            )
                                            )}

                                        </ul>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <a href="/billing" type="button" target="_blank"
                                        className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-[#E12120] text-white py-4 px-5 rounded-2xl cursor-pointer"><span
                                            className="w-full font-semibold text-white">Choose Starter</span>
                                        <svg className="inline-block h-6" viewBox="0 0 24 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="hidden">
                                <ul className="space-y-2 pt-8">

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HorizentalPricePackage