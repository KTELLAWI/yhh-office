"use client"
import { useTranslations } from 'next-intl';
import React from 'react'
import { BiPhone, BiSolidMap, BiSolidPhone } from "react-icons/bi";


export default function Location() {
    const t = useTranslations("Contact.location");

  return (
    <section className="w-full bg-[#f7f8fa]">
        <div className='px-5 pb-[43px] md:pb-0 md:px-10'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="mt-[-14px] mb-[-18px] pt-16 pb-[6.9rem] sm:my-0 sm:py-32 md:py-48">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex items-start flex-col">
                            <div className="flex items-start gap-2 mb-[12px]">
                                <div className='circle-icon bg-[#fdc067]'></div>
                                <div className='triangule-icon'></div>
                            </div>
                            <h2 className="animate__animated animate__slower animate__fadeInUp mb-[10px] text-[1.2rem] sm:text-4xl md:text-5xl leading-[1.2] font-bold text-black md:text-[#28264d] min-[1920px]:text-black">{t("title")}</h2>
                            
                            <div className="mt-4 max-w-lg">
                                <p className="animate__animated animate__slower animate__fadeInUp text-[.7rem] md:text-[1.1rem] leading-6 text-[#69778c]">{t("description")}</p>
                            </div>
                            
                            <div className="mt-8">
                                <div className="animate__animated animate__slower animate__fadeInUp grid grid-cols-1 gap-[16px]">
                                    <a href="" className='text-[.8rem] md:text-[1.2rem] text-[#28264d] font-bold flex gap-4 duration-700 hover:text-[#47bdff]'>
                                        <BiSolidPhone size={28} />
                                        <span>{t("phone")}</span>
                                    </a>
                                    <a href="" className='text-[.8rem] md:text-[1.2rem] text-[#28264d] font-bold flex gap-4 duration-700 hover:text-[#47bdff]'>
                                        <BiSolidMap size={28} />
                                        <span>{t("address")}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <div className="w-[80vw] h-[80vw] sm:w-[90vw] sm:h-[90vw] md:w-[36vw] md:h-[36vw] min-[1920px]:w-[30vw] min-[1920px]:h-[30vw]">
                                <img src="/64c79418be374c3df9499336_des-p-500.webp" loading="lazy" sizes="(max-width: 479px) 80vw, (max-width: 991px) 90vw, (max-width: 1919px) 36vw, 1280px" alt="" className="cover-image image-circle" />
                            </div>
                            <div className="semi-circle-shape location"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
