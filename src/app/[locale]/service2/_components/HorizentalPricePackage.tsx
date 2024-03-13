import React from 'react'
export interface Package {
    name: string;
    id: string;
    href: string;
    price: string;
    slogan: string;
    description: string;
popoular?:boolean;
    detailsOfCost: string;
    features: string[];
}


const FeatureList = ({ feature }: { feature: string }) => {
    return (
        <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0"><svg className="h-5 w-5 text-[#E12120]"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white"
                aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"></path>
            </svg></div>
            <p className="ml-2 text-white">{feature}</p>
        </li>
    )


}

function HorizentalPricePackage({ packageData}: { packageData?: Package; }) {

    return (
        <div className="p-1 w-full">
            <div className="relative max-w-7xl mx-auto">
                <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                    <div className="flex-1 px-3 py-4 lg:p-4 bg-[#171717] rounded-s-3xl opacity-80">
                        <h3 className="text-2xl font-extrabold text-white sm:text-3xl">{packageData?.name}</h3>
                        <p className="mt-6 text-base text-gray-50 sm:text-lg">{packageData?.slogan}
                        </p>
                        <div className="mt-0">
                            <div className="flex items-center">
                                <div className="flex-1 border-t-2 border-gray-200"></div>
                            </div>
                            <ul role="list" className="mt-5 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-2 lg:gap-y-5">
                                {packageData && (

                                    <>
                                        {packageData.features.map((feature, index) => (
                                            <FeatureList key={index} feature={feature} />
                                        ))}
                                    </>
                                )}

                                {/* <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0"><svg className="h-5 w-5 text-green-400"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                                    <p className="ml-3 text-white">Inspect Tailwind CSS websites</p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0"><svg className="h-5 w-5 text-green-400"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                                    <p className="ml-3 text-white">Edit mode in real-time</p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0"><svg className="h-5 w-5 text-green-400"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                                    <p className="ml-3 text-white">Copy utility classNamees right into your clipboard</p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0"><svg className="h-5 w-5 text-green-400"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                                    <p className="ml-3 text-white">Free Chrome extension updates (Firefox coming soon)</p>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div
                        className="py-4 px-3 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center rounded-e-3xl lg:p-4 bg-[#171717]">
                       {
                        packageData?.popoular && (
                            <span className="flex items-center justify-between absolute top-6 right-0 px-2 py-1 c hover:bg-gray-300 rounded-s-3xl text-sm font-semibold text-white shadow-lg">
                            <svg className="w-4 h-4  fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>
                            <span className="text-center ml-2">
                                Most Popoular
                            </span>
                        </span>
                        )
                       }
                        <p className="text-lg leading-6 font-medium text-white">{packageData?.detailsOfCost}</p>
                        <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
                            <span>{packageData?.price}</span><span className="ml-3 text-xl font-medium text-gray-50">AED</span>
                        </div>
                        <div className="mt-6">
                            <div className="rounded-md shadow">
                                <a href="#"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium  text-white rounded-xl bg-[#E12120] hover:bg-red-500">Buy
                                    now</a>
                            </div>
                            <p className="text-gray-300 text-sm mt-3">{packageData?.detailsOfCost}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizentalPricePackage