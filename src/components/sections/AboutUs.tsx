"use client"
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';


export default function AboutUs() {
    const t = useTranslations("Home.aboutUs");

  return (
    <section className="bg-[#101010] w-full">
        <div className='px-5 md:px-10'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="mt-[-14px] mb-[-18px] pt-16 pb-[6.9rem] sm:my-0 sm:py-32 md:py-48">
                    <div className="grid gap-16 grid-cols-1 sm:gap-20 md:gap-16 md:grid-cols-2 relative">
                        <div className="flex items-start flex-col ps-[16px] md:ps-0">
                            <div className="flex items-start gap-2 mb-[12px]">
                                <div className='circle-icon bg-[#fdc067]'></div>
                                <div className='triangule-icon'></div>
                            </div>
                            <h2 className="animate__animated animate__slower animate__fadeInUp text-2xl sm:text-[2.5rem] md:text-5xl leading-[1.2] font-bold text-white mb-[10px]">{t("title_1")} <span className="text-[#e12120]">{t("title_2")} </span>{t("title_3")}<span className="text-[#e12120]"> {t("title_4")}</span> <span className="text-[#e12120]">{t("title_5")}</span> {t("title_6")} <span className="text-[#e12120]">{t("title_7")} </span>{t("title_8")}</h2>
                            
                            <p className="animate__animated animate__slower animate__fadeInUp mt-5 mb-0 md:mb-auto md:mt-8 text-[.8rem] md:text-[1.1rem] leading-6 text-white opacity-65 px-[16px] md:px-0 ml-[-0.9rem] md:ml-0">{t("description_1")}</p>
                            <p className="animate__animated animate__slower animate__fadeInUp mt-5 mb-0 md:mb-auto md:mt-8 text-[.8rem] md:text-[1.1rem] leading-6 text-white opacity-65 px-[16px] md:px-0 ml-[-0.9rem] md:ml-0">{t("description_2")}</p>
                        </div>

                        <img src="/64c788913ce52ec98b593408_3.webp" className='circle-top-left' sizes='(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, (max-width: 1439px) 94vw, 1280px' alt="" />
                        <div  className="animate__animated animate__slower animate__fadeIn background-circle"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
