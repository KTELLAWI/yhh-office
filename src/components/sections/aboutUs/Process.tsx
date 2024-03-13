"use client"
import { useTranslations } from 'next-intl';
import React from 'react'


export default function Process() {
    const t = useTranslations("About.processes");

  return (
    <section className="w-full">
        <div className='px-5 pb-[43px] md:pb-0 md:px-10'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="mt-[-14px] mb-[-18px] pt-16 pb-[6.9rem] sm:my-0 sm:py-32 md:py-48">
                    <div className="flex justify-center items-center flex-col mb-6 sm:mb-10 md:mb-12">
                        <div className="flex items-center gap-2 mb-[12px]">
                            <div className='square-icon bg-[#47bdff]'></div>
                            <div className='circle-border-icon border-[#fdc067]'></div>
                        </div>
                        <h2 className="animate__animated animate__slower animate__fadeInUp md:mb-12 mb-[10px] text-[1.2rem] sm:text-[2.5rem] md:text-5xl leading-[1.2] font-bold text-[#28264d] text-center">{t("title_1")}<span className="text-[#e12120] md:text-[#28264d]">{t("title_2")}</span> {t("title_3")}</h2>
                    </div>

                    <div className="grid gap-8 grid-cols-1 sm:gap-12 md:gap-16 md:grid-cols-3 relative">
                        <div className='animate__animated animate__slower animate__fadeInUp flex flex-col items-center justify-self-center max-w-80 sm:max-w-64'>
                            <div className="process-number-wrapper bg-[#47bdff]">
                                <div className="process-number">1</div>
                            </div>
                            <h3 className='text-white md:text-[#28264d] mt-4 font-bold text-base md:text-2xl text-center'>{t("process_1.title")}</h3>
                            <p className="mt-4 opacity-65 md:opacity-100 text-[.7rem] md:text-[1.1rem] text-white md:text-[#69778c] text-center">{t("process_1.description")}</p>
                        </div>

                        <div className='animate__animated animate__slower animate__fadeInUp flex flex-col items-center justify-self-center max-w-80 sm:max-w-64'>
                            <div className="process-number-wrapper bg-[#6695f2]">
                                <div className="process-number">2</div>
                            </div>
                            <h3 className='text-white md:text-[#28264d] mt-4 font-bold text-base md:text-2xl text-center'>{t("process_2.title")}</h3>
                            <p className="mt-4 opacity-65 md:opacity-100 text-[.7rem] md:text-[1.1rem] text-white md:text-[#69778c] text-center">{t("process_2.description")}</p>
                        </div>

                        <div className='animate__animated animate__slower animate__fadeInUp flex flex-col items-center justify-self-center max-w-80 sm:max-w-64'>
                            <div className="process-number-wrapper bg-[#48468c]">
                                <div className="process-number">3</div>
                            </div>
                            <h3 className='text-white md:text-[#28264d] mt-4 font-bold text-base md:text-2xl text-center'>{t("process_3.title")}</h3>
                            <p className="mt-4 opacity-65 md:opacity-100 text-[.7rem] md:text-[1.1rem] text-white md:text-[#69778c] text-center">{t("process_3.description")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
