"use client"
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';


export default function Company() {
    const t = useTranslations("About.company");

  return (
    <section className="w-full">
        <div className='px-5 pb-[43px] md:pb-0 md:px-10'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="bg-[#28264d]">
                    <div className="bg-[#101010] pl-0 p-8 md:p-16">
                        <div className="animate__animated animate__slower animate__fadeInUp text-[#fef9f9] text-base md:text-lg mb-4">{t("sub_title")}</div>
                        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 relative">
                            <div className="flex items-start flex-col">
                                <h2 className="animate__animated animate__slower animate__fadeInUp text-[2rem] md:text-[2.5rem] leading-[1.2] font-bold text-[#e12120] mb-4">{t("title_1")}</h2>
                                
                                <p className="animate__animated animate__slower animate__fadeInUp mt-8 text-[.8rem] md:text-[1.1rem] leading-6 text-white opacity-65">{t("description_1")}</p>
                            </div>
                            <div className="flex items-start flex-col">
                                <h2 className="animate__animated animate__slower animate__fadeInUp text-[2rem] md:text-[2.5rem] leading-[1.2] font-bold text-[#e12120] mb-4">{t("title_2")}</h2>
                                
                                <p className="animate__animated animate__slower animate__fadeInUp mt-8 text-[.8rem] md:text-[1.1rem] leading-6 text-white opacity-65">{t("description_2")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="animate__animated animate__slower animate__fadeIn bg-[#101010] grid gap-0 grid-cols-2 md:grid-cols-4 relative">
                        <div className="circle-bottom-right overflow-hidden">
                            <img src="/64c788ec3c27448d0cda67fb_4.webp" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 1439px) 92vw, 1280px" alt="" className="cover-image" />
                        </div>
                        <div className="circle-bottom-left overflow-hidden">
                            <img src="/64c78cf6633fbc2a337a0240_18.webp" loading="lazy" alt="" className="cover-image" />
                        </div>
                        <div className="circle-shape bg-[#9bdaf2]"></div>
                        <div className="circle-top-left overflow-hidden">
                            <img src="/64c78c2a48fa4e6c3652a9fa_15.webp" loading="lazy" alt="" className="cover-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
