"use client"
import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import Image from 'next/image'
import { ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/24/outline'
import { useLocale, useTranslations } from 'next-intl';


export default function Header() {
    const [isFlipped1, setFlipped1 ] = useState(false)
    const [isFlipped2, setFlipped2 ] = useState(false)
    const t = useTranslations("Home.header");
    //@ts-ignore
    const locale: "ar" | "en" = useLocale();

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
    <header className="bg-[#101010] w-full rounded-ee-[7rem] sm:rounded-ee-[8rem] md:rounded-ee-[10rem] lg:rounded-ee-[12rem] pt-12 pb-32 md:pt-8 md:pb-48">
        <div className='px-5 pb-[43px] md:px-10'>
            <div className="w-full max-w-7xl mx-auto">
                <div className='relative grid gap-8 grid-cols-1 lg:grid-cols-[1fr_1fr] sm:gap-y-16 md:gap-y-20 lg:gap-8 '>
                    <div  className="animate__animated animate__slower animate__fadeIn background-circle"></div>
                    <div className='min-[1920px]:self-center'>
                        <div className='max-w-lg'>
                            <h1 className='animate__animated animate__slower animate__fadeInUp text-white text-2xl md:text-6xl xl:text-[3.5rem] leading-[1.2] font-bold'>
                                <span className='text-[#e12120]'>{t("title_1")} </span>
                                {t("title_2")}
                                <span className='text-[#e12120]'> {t("title_3")} </span>
                                {t("title_4")}
                                <span className='text-[#e12120]'> {t("title_5")}</span>
                            </h1>
                            <p className="animate__animated animate__slower animate__fadeInUp text-[.8rem] mt-8 md:text-lg text-white opacity-65">{t("description")}</p>

                            <a href="/contact" className="animate__animated animate__slower animate__fadeInUp mt-6 md:mt-12 text-white flex items-center">
                                <span className="text-lg me-2">{t("link")}</span>
                                {locale === "ar" 
                                    ? <ArrowLeftIcon className="w-4" aria-hidden="true" />
                                    : <ArrowRightIcon className="w-4" aria-hidden="true" />
                                }
                            </a>
                        </div>
                    </div>
                    <div className='animate__animated animate__slower animate__fadeIn min-[1920px]:w-[32vw] min-[1920px]:h-[32vw]'>
                        <div className='grid gap-4 min-[1920px]:justify-stretch' style={{gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", gridTemplateRows: "auto auto auto"}}>
                            <div className="col-span-2 rotate-image-wrapper">
                                <ReactCardFlip containerClassName='rotate-horizontal-top-left' flipSpeedBackToFront={3.5} flipSpeedFrontToBack={3.5} isFlipped={isFlipped1} flipDirection="horizontal" containerStyle={{minHeight: "100%"}} cardStyles={{back: {minHeight: "100%"}}}>
                                    <div className="w-full h-full">
                                        <img src="/64c787e8e950cfbab8c262f5_1.webp" style={{transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(180deg) rotateZ(0deg) skew(0deg, 0deg)"}} loading="lazy" alt="" className="cover-image circle-right"/>
                                    </div>
                                    <div className="w-full h-full">
                                        <img src="/64c79204d9a2f343ebf75ff6_26.webp" loading="lazy" alt="" className="cover-image circle-right"/>
                                    </div>
                                </ReactCardFlip>
                            </div>
                            <div className="col-span-2 circle-shape-wrapper ">
                                <div className="circle-shape bg-[#9bdaf2]"></div>
                            </div>
                            <div className="col-span-2 rotate-image-wrapper">
                                <ReactCardFlip containerClassName='rotate-horizontal-top-right' flipSpeedBackToFront={3.5} flipSpeedFrontToBack={3.5} isFlipped={isFlipped2} flipDirection="horizontal" containerStyle={{minHeight: "100%"}} cardStyles={{back: {minHeight: "100%"}}}>
                                    <div className="w-full h-full">
                                        <img src="/64c79087fe3311abdd313e3b_23.webp" loading="lazy" alt="" className="cover-image circle-top-right "/>
                                    </div>
                                    <div className="w-full h-full">
                                        <img src="/64c7905b42a1a816a680be51_22.webp" style={{transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(180deg) rotateZ(0deg) skew(0deg, 0deg)"}} loading="lazy" alt="" className="cover-image circle-top-right "/>
                                    </div>
                                </ReactCardFlip>
                            </div>

                            <div className="col-span-4 rotate-image-wrapper">
                                <ReactCardFlip containerClassName='rotate-image-center' flipSpeedBackToFront={3.5} flipSpeedFrontToBack={3.5} isFlipped={isFlipped1} flipDirection="vertical" containerStyle={{minHeight: "100%"}} cardStyles={{back: {minHeight: "100%"}}}>
                                    <div className="w-full h-full">
                                        <img src="/64c78cf6633fbc2a337a0240_18.webp" loading="lazy" alt="" className="cover-image circle-left-right"/>
                                    </div>
                                    <div className="w-full h-full">
                                        <img src="/64c78bdbe950cfbab8c7bc8c_13.webp" loading="lazy" alt="" className="cover-image circle-left-right reverse-circle"/>
                                    </div>
                                </ReactCardFlip>
                            </div>
                            <div className="col-span-2 circle-shape-wrapper ">
                                <div className="circle-shape bg-[#e12120]"></div>
                            </div>

                            <div className="col-span-2 rotate-image-wrapper">
                                <ReactCardFlip containerClassName='rotate-horizontal-bottom-left' flipSpeedBackToFront={3.5} flipSpeedFrontToBack={3.5} isFlipped={isFlipped1} flipDirection="horizontal" containerStyle={{minHeight: "100%"}} cardStyles={{back: {minHeight: "100%"}}}>
                                    <div className="w-full h-full">
                                        <img src="/64c7911e00d8255c933d9dc9_24.webp" loading="lazy" alt="" className="cover-image circle-top-left"/>
                                    </div>
                                    <div className="w-full h-full">
                                        <img src="/64c78bfd48cadd23aa0d62e4_14.webp" loading="lazy" alt="" className="cover-image circle-top-left"/>
                                    </div>
                                </ReactCardFlip>
                            </div>
                            <div className="col-span-2 circle-shape-wrapper ">
                                <div className="circle-border"></div>
                            </div>
                            <div className="col-span-2 rotate-image-wrapper">
                                <ReactCardFlip containerClassName='rotate-horizontal-bottom-right' flipSpeedBackToFront={3.5} flipSpeedFrontToBack={3.5} isFlipped={isFlipped2} flipDirection="horizontal" containerStyle={{minHeight: "100%"}} cardStyles={{back: {minHeight: "100%"}}}>
                                    <div className="w-full h-full">
                                        <img src="/64c78c2a48fa4e6c3652a9fa_15.webp" loading="lazy" alt="" className="cover-image circle-bottom"/>
                                    </div>
                                    <div className="w-full h-full">
                                        <img src="/64c79313372da7dc75723911_25.webp" loading="lazy" alt="" className="cover-image circle-bottom"/>
                                    </div>
                                </ReactCardFlip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
