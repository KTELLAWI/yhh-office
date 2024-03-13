"use client"
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'
import useAxios from 'axios-hooks'
import {CardProject} from '@/components/cards';
import { Progress } from '@/components/Progress';

export default function PortfolioContent() {
    const t = useTranslations("Portfolio");
    //@ts-ignore
    const lang: "ar" | "en" = useLocale();
    const [allProfilios, setAllProfilios] = useState<any>([])
    const [{ data: allProfiliosData, loading, error }] = useAxios({
        url: `https://api.arabeelearning.com/api/yhh-profilios?populate=cover&locale=${lang}`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        }
    })

    useEffect(() => {
        if (allProfiliosData && "data" in allProfiliosData && allProfiliosData?.data?.length > 0) {
            console.log(allProfiliosData?.data);
            
            setAllProfilios([...allProfiliosData?.data])
        }
    }, [allProfiliosData])

    if (loading) {
        return (
            <main className="w-full">
                <div className='px-5 md:px-10'>
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="mt-[-14px] mb-[-18px] pt-16 pb-[6.9rem] sm:my-0 sm:py-32 flex justify-center">
                            <Progress />
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <section className="bg-[#f7f8fa] w-full">
            <div className='px-5 pb-[43px] md:pb-0 md:px-10'>
                <div className="w-full max-w-7xl mx-auto">
                    <div className="py-16 sm:my-0 sm:py-32 md:py-48">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="flex items-start flex-col max-w-[32rem]">
                                <div className="flex items-center gap-2 mb-[12px]">
                                    <div className='triangule-icon2 border-transparent border-t-[#47bdff] border-s-[#47bdff]'></div>
                                    <div className='semi-circle-bottom-icon bg-[#f25260]'></div>
                                </div>
                                <h2 className="animate__animated animate__slower animate__fadeInUp mb-8 text-[1.2rem] md:text-5xl leading-[1.2] font-bold text-black md:text-[#28264d] min-[1920px]:text-black">{t("title")}</h2>
                            </div>
                        </div>

                        <div className="mt-16 md:mt-32">
                            <div className="grid gap-12 grid-cols-1 md:gap-16 md:grid-cols-2 xl:gap-y-4 relative">
                                {allProfilios?.length > 0
                                    ? allProfilios?.map((item: any, index: number) => (
                                        <CardProject
                                            key={item?.id}
                                            id={item?.id}
                                            thumbnail={item?.attributes?.cover?.data?.attributes?.formats?.medium?.url}
                                            withMargin={(index + 1) % 2 == 0 ? false : true}
                                            title={item?.attributes?.service}
                                            shortDescription={item?.attributes?.short_description}
                                            createdAt={item?.attributes?.createdAt}
                                        />
                                    ))
                                    : null
                                }

                                {/* <div className="mt-0 md:mt-24">
                                    <a href="#" className='flex flex-col justify-start decoration-[none]'>
                                        <div className="flex items-center overflow-hidden h-full">
                                            <img src="/64c7898be95165aa0c0b5be2_5.webp" loading="lazy" alt="Website  Design" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 43vw, (max-width: 1439px) 44vw, 608px" className="cover-image duration-1000 hover:scale-105" ></img>
                                        </div>
                                        <div className='ml-[-0.9rem] px-4 md:ml-0 md:px-0 mt-5 md:mt-8'>
                                            <h3 className='text-base md:text-2xl text-[#28264d] mb-4 font-bold hover:text-[#47bdff]'>{t("project_1.title")}</h3>
                                            <div className="flex justify-start gap-4 items-center">
                                                <div className='divider-item'></div>
                                                <div className='text-[.8rem] px-5 md:px-0 md:text-base text-[#69778c] '>{t("project_1.date")}</div>
                                            </div>
                                            <p className="mt-4 text-[#69778c] text-base">{t("project_1.description")}</p>
                                        </div>
                                    </a>
                                </div>

                                <div>
                                    <a href="#" className='flex flex-col justify-start decoration-[none]'>
                                        <div className="flex items-center overflow-hidden h-full">
                                            <img src="/64c789e44abb77ba6e61e434_8-p-800.webp" loading="lazy" alt="Secure Web Browser " sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 43vw, (max-width: 1439px) 44vw, 608px"  className="cover-image duration-1000 hover:scale-105" />
                                        </div>
                                        <div className='ml-[-0.9rem] px-4 md:ml-0 md:px-0 mt-5 md:mt-8'>
                                            <h3 className='text-base md:text-2xl text-[#28264d] mb-4 font-bold hover:text-[#47bdff]'>{t("project_2.title")}</h3>
                                            <div className="flex justify-start gap-4 items-center">
                                                <div className='divider-item'></div>
                                                <div className='text-[.8rem] px-5 md:px-0 md:text-base text-[#69778c] '>{t("project_2.date")}</div>
                                            </div>
                                            <p className="mt-4 text-[#69778c] text-base">{t("project_2.description")}</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="mt-0 md:mt-24">
                                    <a href="#" className='flex flex-col justify-start decoration-[none]'>
                                        <div className="flex items-center overflow-hidden h-full">
                                            <img src="/64c789a6a6ee5a23fd51b7e6_7.webp" loading="lazy" alt="Web Application Design" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 43vw, (max-width: 1439px) 44vw, 608px"  className="cover-image duration-1000 hover:scale-105" />
                                        </div>
                                        <div className='ml-[-0.9rem] px-4 md:ml-0 md:px-0 mt-5 md:mt-8'>
                                            <h3 className='text-base md:text-2xl text-[#28264d] mb-4 font-bold hover:text-[#47bdff]'>{t("project_3.title")}</h3>
                                            <div className="flex justify-start gap-4 items-center">
                                                <div className='divider-item'></div>
                                                <div className='text-[.8rem] px-5 md:px-0 md:text-base text-[#69778c] '>{t("project_3.date")}</div>
                                            </div>
                                            <p className="mt-4 text-[#69778c] text-base">{t("project_3.description")}</p>
                                        </div>
                                    </a>
                                </div>

                                <div>
                                    <a href="#" className='flex flex-col justify-start decoration-[none]'>
                                        <div className="flex items-center overflow-hidden h-full">
                                            <img src="/64c789b55507cc7620ce7da8_6.webp" loading="lazy" alt="Mobile App Design &amp; Development " sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 43vw, (max-width: 1439px) 44vw, 608px"  className="cover-image duration-1000 hover:scale-105" />
                                        </div>
                                        <div className='ml-[-0.9rem] px-4 md:ml-0 md:px-0 mt-5 md:mt-8'>
                                            <h3 className='text-base md:text-2xl text-[#28264d] mb-4 font-bold hover:text-[#47bdff]'>{t("project_4.title")}</h3>
                                            <div className="flex justify-start gap-4 items-center">
                                                <div className='divider-item'></div>
                                                <div className='text-[.8rem] px-5 md:px-0 md:text-base text-[#69778c] '>{t("project_4.date")}</div>
                                            </div>
                                            <p className="mt-4 text-[#69778c] text-base">{t("project_4.description")}</p>
                                        </div>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
