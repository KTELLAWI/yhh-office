"use client"
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';


export default function Services() {
    const t = useTranslations("Home.services");

  return (
    <section className="w-full ">
        <div className='px-5 md:px-10'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="mt-[-14px] mb-[-18px] pt-16 pb-[6.9rem] sm:my-0 sm:py-32 md:py-48">
                    <div className="grid gap-16 grid-cols-1 sm:gap-20 md:gap-16 md:grid-cols-[.5fr_1fr]">
                        <div className="flex items-start flex-col">
                            <div className="flex items-start gap-2 mb-[12px]">
                                <div className='semi-circle-bottom-icon bg-[#47bdff]'></div>
                                <div className='square-icon bg-[#f2a7d8]'></div>
                            </div>
                            <div className="mb-5 md:mb-8">
                                <h2 className="animate__animated animate__slower animate__fadeInUp text-[1.2rem] sm:text-[2.5rem] md:text-5xl leading-[1.2] font-bold text-[#28264d]">{t("title_1")} <span className="text-[#e12120]"> {t("title_2")} </span> {t("title_3")} <span className="text-[#e12120]"> {t("title_4")} </span> {t("title_5")}</h2>
                            </div>
                            <p className="animate__animated animate__slower animate__fadeInUp px-[20px] sm:px-0 text-[.8rem] md:text-base text-[#69778c]">{t("description")}</p>
                        </div>
                        <div className="grid gap-12 grid-cols-1 md:gap-8 md:grid-cols-2">
                            <div className='animate__animated animate__slower animate__fadeInUp pt-12 pb-[3.25rem] sm:px-[2.125rem] sm:py-[3rem] md:px-[2.5rem] md:py-[4rem] lg:py-[4.5rem] bg-[#f7f8fa]'>
                                <img src="/63d8e8c0f3446977178c6256_service-icon-01.svg" alt="" className='ps-[20px] sm:ps-0' />
                                <h3 className="text-base sm:text-2xl font-bold text-[#28264d] mt-4 ps-[16px] sm:ps-0">{t("service_1.title")}</h3>
                                <p className="text-[.8rem] sm:text-base text-[#69778c] mt-4 px-[20px] sm:px-0">{t("service_1.description")}</p>
                            </div>
                            <div className='animate__animated animate__slower animate__fadeInUp pt-12 pb-[3.25rem] sm:px-[2.125rem] sm:py-[3rem] md:px-[2.5rem] md:py-[4rem] lg:py-[4.5rem] bg-[#f7f8fa]'>
                                <img src="/63d8e8c0f3446981888c6263_service-icon-02.svg" alt="" className='ps-[20px] sm:ps-0' />
                                <h3 className="text-base sm:text-2xl font-bold text-[#28264d] mt-4 ps-[16px] sm:ps-0">{t("service_2.title")}</h3>
                                <p className="text-[.8rem] sm:text-base text-[#69778c] mt-4 px-[20px] sm:px-0">{t("service_2.description")}</p>
                            </div>
                            <div className='animate__animated animate__slower animate__fadeInUp pt-12 pb-[3.25rem] sm:px-[2.125rem] sm:py-[3rem] md:px-[2.5rem] md:py-[4rem] lg:py-[4.5rem] bg-[#f7f8fa]'>
                                <img src="/63d8e8c0f34469fd548c6257_service-icon-03.svg" alt="" className='ps-[20px] sm:ps-0' />
                                <h3 className="text-base sm:text-2xl font-bold text-[#28264d] mt-4 ps-[16px] sm:ps-0">{t("service_3.title")}</h3>
                                <p className="text-[.8rem] sm:text-base text-[#69778c] mt-4 px-[20px] sm:px-0">{t("service_3.description")}</p>
                            </div>
                            <div className='animate__animated animate__slower animate__fadeInUp pt-12 pb-[3.25rem] sm:px-[2.125rem] sm:py-[3rem] md:px-[2.5rem] md:py-[4rem] lg:py-[4.5rem] bg-[#f7f8fa]'>
                                <img src="/63d8e8c0f34469e4728c6258_service-icon-04.svg" alt="" className='ps-[20px] sm:ps-0' />
                                <h3 className="text-base sm:text-2xl font-bold text-[#28264d] mt-4 ps-[16px] sm:ps-0">{t("service_4.title")}</h3>
                                <p className="text-[.8rem] sm:text-base text-[#69778c] mt-4 px-[20px] sm:px-0">{t("service_4.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
