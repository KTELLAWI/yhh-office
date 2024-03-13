"use client"
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';


export default function Process() {
    const t = useTranslations("Home.processes");

  return (
    <section className="w-full">
        <div className='px-5 pb-[43px] md:pb-0 md:px-10'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="mt-[-14px] mb-[-18px] pt-16 pb-[6.9rem] sm:my-0 sm:py-32 md:py-48">
                    <div className="grid gap-16 grid-cols-1 sm:gap-20 md:gap-16 xl:gap-12 md:grid-cols-[1fr_1fr] relative">
                        <div className="flex items-start flex-col">
                            <div className="flex items-center gap-2 mb-[12px]">
                                <div className='square-icon bg-[#47bdff]'></div>
                                <div className='circle-border-icon border-[#fdc067]'></div>
                            </div>
                            <h2 className="animate__animated animate__slower animate__fadeInUp mb-5 md:mb-8 text-[1.2rem] sm:text-[2.5rem] md:text-5xl leading-[1.2] font-bold text-[#28264d] ps-0 sm:ps-[18px] md:ps-0">{t("title_1")} <span className="text-[#e12120]"> {t("title_2")} </span> {t("title_3")}</h2>
                            <img src="/642e09c6d43afc2f75a8d944_woman0.jpeg" className='image-circle w-[88vw] h-[88vw] sm:w-[90vw] sm:h-[90vw] md:w-[40vw] md:h-[40vw] min-[1920px]:min-w-[750px] min-[1920px]:h-[750px] self-center' alt="" />
                        </div>

                        <div className="pt-0 md:pt-56">
                            <div className="grid grid-rows-2 gap-y-4">
                                <div className="animate__animated animate__slower animate__fadeInUp grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
                                    <div className="process-number-wrapper bg-[#47bdff]">
                                        <div className="process-number">1</div>
                                    </div>
                                    <div>
                                        <h3 className="text-base ps-[16px] md:ps-0 sm:text-2xl font-bold text-[#28264d] mb-4">{t("process_1.title")}</h3>
                                        <p className="text-[.8rem] px-[20px] md:ps-0 sm:text-base text-[#69778c]">{t("process_1.description")}</p>
                                    </div>
                                </div>
                                <div className="animate__animated animate__slower animate__fadeInUp grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
                                    <div className="process-number-wrapper bg-[#6695f2]">
                                        <div className="process-number">2</div>
                                    </div>
                                    <div>
                                        <h3 className="text-base ps-[16px] md:ps-0 sm:text-2xl font-bold text-[#28264d] mb-4">{t("process_2.title")}</h3>
                                        <p className="text-[.8rem] px-[20px] md:ps-0 sm:text-base text-[#69778c]">{t("process_2.description")}</p>
                                    </div>
                                </div>
                                <div className="animate__animated animate__slower animate__fadeInUp grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
                                    <div className="process-number-wrapper bg-[#48468c]">
                                        <div className="process-number">3</div>
                                    </div>
                                    <div>
                                        <h3 className="text-base ps-[16px] md:ps-0 sm:text-2xl font-bold text-[#28264d] mb-4">{t("process_3.title")}</h3>
                                        <p className="text-[.8rem] px-[20px] md:ps-0 sm:text-base text-[#69778c]">{t("process_3.description")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
