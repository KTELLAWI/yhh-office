"use client"
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';


export default function Mission() {
    const t = useTranslations("About.mission_vision");

  return (
    <section className="bg-[#101010] w-full">
        <div className='px-5 pb-[43px] md:pb-0 md:px-10'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="mt-[-14px] mb-[-18px] pt-16 pb-[6.9rem] sm:my-0 sm:py-32 md:py-48">
                    <div className="grid gap-8 grid-cols-1 items-center md:gap-16 md:grid-cols-2 relative mb-32 sm:mb-48">
                        <div>
                            <div className="flex items-start flex-col max-w-lg">
                                <div className="animate__animated animate__slower animate__fadeInUp text-[#fef9f9] text-[.7rem] md:text-lg mb-4">{t("mission.sub_title")}</div>
                                <h2 className="animate__animated animate__slower animate__fadeInUp mb-4 text-2xl md:text-5xl leading-[1.2] font-bold text-[#e12120]">{t("mission.title")}</h2>
                                
                                <p className="animate__animated animate__slower animate__fadeInUp text-[.8rem] md:text-[1.1rem] leading-6 text-white opacity-65">
                                    {t("mission.description_1")}
                                    <br/><br/>
                                    {t("mission.description_2")}
                                </p>
                            </div>
                        </div>

                        <div className="w-[88vw] h-[88vw] mt-5 md:mt-0 sm:w-[90vw] sm:h-[90vw] md:w-[40vw] md:h-[40vw] min-[1920px]:w-[26vw] min-[1920px]:h-[26vw] min-[1920px]:self-center min-[1920px]:justify-self-center relative">
                            <img src="/64c788ec3c27448d0cda67fb_4.webp" loading="lazy" sizes="(max-width: 479px) 88vw, (max-width: 991px) 90vw, (max-width: 1919px) 40vw, 26vw" alt="" className="cover-image image-circle"></img>
                            <div className="semi-circle-shape our-mission"></div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col-reverse items-center md:grid gap-8 grid-cols-1 md:gap-16 md:grid-cols-[1fr_1fr] relative">
                        <div className="w-[88vw] h-[88vw] mt-5 md:mt-0 sm:w-[90vw] sm:h-[90vw] md:w-[40vw] md:h-[40vw] min-[1920px]:w-[26vw] min-[1920px]:h-[26vw] self-center sm:justify-self-center relative">
                            <img
                                src="/64c78d347eee82cea127a5a9_19.webp"
                                loading="lazy"
                                sizes="(max-width: 479px) 88vw, (max-width: 991px) 90vw, (max-width: 1919px) 40vw, 26vw" 
                                alt="" className="cover-image circle-top-right" 
                                srcSet="/64c78d347eee82cea127a5a9_19-p-500.webp 500w, /64c78d347eee82cea127a5a9_19.webp 656w"
                            />
                            <div className="semi-circle-shape our-vision"></div>
                        </div>

                        <div>
                            <div className="flex items-start flex-col max-w-lg">
                                <div className="animate__animated animate__slower animate__fadeInUp text-[#fef9f9] text-[.7rem] md:text-lg mb-4">{t("vision.sub_title")}</div>
                                <h2 className="animate__animated animate__slower animate__fadeInUp mb-4 text-2xl md:text-5xl leading-[1.2] font-bold text-[#e12120]">{t("vision.title")}</h2>
                                
                                <p className="animate__animated animate__slower animate__fadeInUp text-[.8rem] md:text-[1.1rem] leading-6 text-white opacity-65">
                                    {t("vision.description_1")}
                                    <br/><br/>
                                    {t("vision.description_2")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
