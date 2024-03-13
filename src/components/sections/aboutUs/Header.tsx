"use client"
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';


export default function Header() {
    const [isFlipped1, setFlipped1 ] = useState(false)
    const [isFlipped2, setFlipped2 ] = useState(false)
    const t = useTranslations("About.header");
  
    useEffect(() => {
      setTimeout(() => {
        setFlipped1(!isFlipped1)
      }, 3000)
    }, [isFlipped1])
  
    useEffect(() => {
        setTimeout(() => {
          setFlipped2(!isFlipped2)
        }, 3500)
    }, [isFlipped2])

  return (
    <header className="bg-[#101010] w-full pt-12 pb-32 sm:pt-16 sm:pb-48 rounded-ee-[7rem] sm:rounded-ee-[12rem]">
        <div className='px-5 pb-[43px] md:pb-0 md:px-10'>
            <div className="w-full max-w-7xl mx-auto">
                <div className='relative grid gap-16 grid-cols-1 md:grid-cols-[1.5fr_1.25fr] sm:gap-y-24'>
                    <div className='self-center'>
                        <div className="animate__animated animate__slower animate__fadeInUp text-[#fef9f9] text-[.7rem] md:text-lg mb-4">{t("sub_title")}</div>
                        <h1 className='animate__animated animate__slower animate__fadeInUp text-white text-2xl sm:text-[3rem] md:text-[3.5rem] leading-[1.2] font-bold'>
                            <span className='text-[#e12120]'>{t("title_1")} </span>
                            {t("title_2")}
                            <span className='text-[#e12120]'> {t("title_3")} </span>
                            {t("title_4")}
                        </h1>
                        <p className="animate__animated animate__slower animate__fadeInUp mt-8 text-[.8rem] md:text-lg text-white opacity-65">{t("description")}</p>
                    </div>
                    <div className='animate__animated animate__slower animate__fadeIn'>
                        <div className='grid gap-0' style={{gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto"}}>
                            <div>
                                <div className="circle-shape bg-[#9bdaf2]"></div>
                            </div>
                            <div>
                                <img src="/64c78c99ea78c3fa6766e31f_16.webp" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 1439px) 92vw, 1280px" alt="" className="cover-image circle-top-left" />
                            </div>
                            <div>
                                <img src="/64c78bfd48cadd23aa0d62e4_14.webp" loading="lazy" alt="" className="cover-image circle-top-left" />
                            </div>
                            <div>
                                <div className="circle-border about"></div>
                            </div>
                        </div>
                    </div>
                    <div className="animate__animated animate__slower animate__fadeIn background-circle"></div>
                </div>
            </div>
        </div>
    </header>
  )
}
