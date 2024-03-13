"use client"
import { useTranslations } from 'next-intl';
import React from 'react'


export default function Benefits() {
    const t = useTranslations("About.benefits");

  return (
    <section className="w-full">
        <div className='px-5 pb-[43px] md:pb-0 md:px-10'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="mt-[-14px] mb-[-18px] pt-16 pb-[6.9rem] sm:my-0 sm:py-32 md:py-48">
                    <div className="flex justify-center items-center flex-col mb-6 sm:mb-10 md:mb-12">
                        <div className="flex items-center gap-2 mb-[12px]">
                            <div className='semi-circle-bottom-icon bg-[#47bdff]'></div>
                            <div className='circle-border-icon border-[#f2a7d8]'></div>
                        </div>
                        <h2 className="animate__animated animate__slower animate__fadeInUp mb-[10px] text-[1.2rem] sm:text-[2.5rem] md:text-5xl leading-[1.2] font-bold text-black md:text-[#28264d] max-w-lg text-center">{t("title")}</h2>
                    </div>

                    <div className="grid gap-6 md:gap-16 grid-cols-1 md:grid-cols-3 relative">
                        <div className='animate__animated animate__slower animate__fadeInUp py-8 px-6 md:py-12 md:pl-8 md:pr-12 bg-[#f7f8fa] flex flex-col'>
                            <div className="flex items-start mb-4">
                                <img src="/63d8e8c0f344691ebf8c625c_benefits-icon-01.svg" className='benefits-icon' alt="" />
                            </div>
                            <div>
                                <h3 className='text-[#28264d] font-bold text-base md:text-2xl pl-4 md:pl-0'>{t("benefit_1.title")}</h3>
                                <p className="mt-4 text-[.7rem] md:text-[1.1rem] text-[#69778c]">{t("benefit_1.description")}</p>
                            </div>
                        </div>
                        <div className='animate__animated animate__slower animate__fadeInUp py-8 px-6 md:py-12 md:pl-8 md:pr-12 bg-[#f7f8fa] flex flex-col'>
                            <div className="flex items-start mb-4">
                                <img src="/63d8e8c0f3446933f88c625d_benefits-icon-02.svg" className='benefits-icon' alt="" />
                            </div>
                            <div>
                                <h3 className='text-[#28264d] font-bold text-base md:text-2xl pl-4 md:pl-0'>{t("benefit_2.title")}</h3>
                                <p className="mt-4 text-[.7rem] md:text-[1.1rem] text-[#69778c]">{t("benefit_2.description")}</p>
                            </div>
                        </div>
                        <div className='animate__animated animate__slower animate__fadeInUp py-8 px-6 md:py-12 md:pl-8 md:pr-12 bg-[#f7f8fa] flex flex-col'>
                            <div className="flex items-start mb-4">
                                <img src="/63d8e8c0f344691b538c625e_benefits-icon-03.svg" className='benefits-icon' alt="" />
                            </div>
                            <div>
                                <h3 className='text-[#28264d] font-bold text-base md:text-2xl pl-4 md:pl-0'>{t("benefit_3.title")}</h3>
                                <p className="mt-4 text-[.7rem] md:text-[1.1rem] text-[#69778c]">{t("benefit_2.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
