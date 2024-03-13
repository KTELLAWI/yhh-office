"use client"
import useAxios from 'axios-hooks';
import dayjs from 'dayjs';
import "dayjs/locale/ar";
import "dayjs/locale/en";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
dayjs.extend(duration)
dayjs.extend(relativeTime)
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'
import {usePathname, useRouter, Link} from '@/navigation';


export default function Projects() {
    const t = useTranslations("Home.projects");
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


    console.log(allProfilios);
    
  return (
    <section className="bg-[#f7f8fa] w-full">
        <div className='px-5 pb-[43px] md:pb-0 md:px-10'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="mt-[-14px] mb-[-18px] pt-16 pb-[6.9rem] sm:my-0 sm:py-32 md:py-48">
                    <div className="flex items-start flex-col max-w-[32rem] ps-0 sm:ps-[18px] md:ps-0">
                        <div className="flex items-center gap-2 mb-[12px]">
                            <div className='triangule-icon2 border-transparent border-t-[#47bdff] border-s-[#47bdff]'></div>
                            <div className='semi-circle-bottom-icon bg-[#f25260]'></div>
                        </div>
                        <h2 className="animate__animated animate__slower animate__fadeInUp md:mb-8 text-[1.2rem] sm:text-[2.5rem] md:text-5xl leading-[1.2] font-bold text-[#28264d]">{t("title")}</h2>
                    </div>

                    <div className="grid gap-16 grid-cols-1 sm:gap-20 md:gap-16 md:grid-cols-3 relative mt-12 md:mt-0">
                        
                        {allProfilios?.length > 0
                            ? allProfilios?.map((item: any, index: number) => (
                                <div key={index}>
                                    <div className={(index + 1) % 3 == 1 ? "md:mt-24" : (index + 1) % 3 == 2 ? "" : "md:-mt-48"}>
                                        <Link
                                            href={{ pathname: `/portfolio/[id]`, params: {id: item?.id} }} 
                                            className='flex flex-col justify-start decoration-[none]'
                                        >
                                            <div className="flex items-center overflow-hidden h-full circle-top-left">
                                                <img src={item?.attributes?.cover?.data?.attributes?.formats?.medium?.url} className='cover-image duration-1000 hover:scale-105' sizes='(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, (max-width: 1439px) 28vw, 384px' alt="" />
                                            </div>
                                            <div className='mt-5 md:mt-8 px-4 ml-[-0.9rem] md:ml-0 md:px-0'>
                                                <div className="flex justify-between items-center">
                                                    <div className='divider-item'></div>
                                                    <div className='text-[.7rem] md:text-base text-[#69778c] mx-[25px] md:mx-0'>{dayjs(item?.attributes?.createdAt).locale(lang).format('MMM DD, YYYY')}</div>
                                                </div>
                                                <h3 className='text-base md:text-2xl text-[#28264d] mt-4 font-bold hover:text-[#47bdff]'>{item?.attributes?.service}</h3>
                                                <p className="mt-4 text-[#69778c] text-[.8rem] md:text-base">{item?.attributes?.short_description}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                            : null
                        }

                        {/* <div>
                            <div className="md:mt-24">
                                <a href="#" className='flex flex-col justify-start decoration-[none]'>
                                    <div className="flex items-center overflow-hidden h-full circle-top-left">
                                        <img src="/64c7898be95165aa0c0b5be2_5-p-500.webp" className='cover-image duration-1000 hover:scale-105' sizes='(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, (max-width: 1439px) 28vw, 384px' alt="" />
                                    </div>
                                    <div className='mt-5 md:mt-8 px-4 ml-[-0.9rem] md:ml-0 md:px-0'>
                                        <div className="flex justify-between items-center">
                                            <div className='divider-item'></div>
                                            <div className='text-[.7rem] md:text-base text-[#69778c] mx-[25px] md:mx-0'>{t("project_1.date")}</div>
                                        </div>
                                        <h3 className='text-base md:text-2xl text-[#28264d] mt-4 font-bold hover:text-[#47bdff]'>{t("project_1.title")}</h3>
                                        <p className="mt-4 text-[#69778c] text-[.8rem] md:text-base">{t("project_1.description")}</p>
                                    </div>
                                </a>
                            </div>
                        </div> */}

                        {/* <div>
                            <a href="#" className='flex flex-col justify-start decoration-[none]'>
                                <div className="flex items-center overflow-hidden h-full circle-top-right">
                                    <img src="/64c789b55507cc7620ce7da8_6-p-500.webp" className='cover-image duration-1000 hover:scale-105 hover:text-[#47bdf' sizes='(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, (max-width: 1439px) 28vw, 384px' alt="" />
                                </div>
                                <div className='mt-5 md:mt-8 px-4 ml-[-0.9rem] md:ml-0 md:px-0'>
                                    <div className="flex justify-between items-center">
                                        <div className='divider-item'></div>
                                        <div className='text-[.7rem] md:text-base text-[#69778c] mx-[25px] md:mx-0'>{t("project_2.date")}</div>
                                    </div>
                                    <h3 className='text-base md:text-2xl text-[#28264d] mt-4 font-bold hover:text-[#47bdff]'>{t("project_2.title")}</h3>
                                    <p className="mt-4 text-[#69778c] text-[.8rem] md:text-base">{t("project_2.description")}</p>
                                </div>
                            </a>
                        </div> */}

                        {/* <div>
                            <div className="md:-mt-48">
                                <a href="#" className='flex flex-col justify-start decoration-[none]'>
                                    <div className="flex items-center overflow-hidden h-full circle-bottom-right">
                                        <img src="/64c789a6a6ee5a23fd51b7e6_7-p-500.webp" className='cover-image duration-1000 hover:scale-105' sizes='(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, (max-width: 1439px) 28vw, 384px' alt="" />
                                    </div>
                                    <div className='mt-5 md:mt-8 px-4 ml-[-0.9rem] md:ml-0 md:px-0'>
                                        <div className="flex justify-between items-center">
                                            <div className='divider-item'></div>
                                            <div className='text-[.7rem] md:text-base text-[#69778c] mx-[25px] md:mx-0'>{t("project_3.date")}</div>
                                        </div>
                                        <h3 className='text-base md:text-2xl text-[#28264d] mt-4 font-bold hover:text-[#47bdff]'>{t("project_3.title")}</h3>
                                        <p className="mt-4 text-[#69778c] text-[.8rem] md:text-base">{t("project_3.description")}</p>
                                    </div>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
