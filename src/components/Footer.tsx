"use client"
import React, { useEffect, useState } from 'react'
import { BsTwitterX } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { useLocale, useTranslations } from 'next-intl';
import {usePathname, useRouter, Link} from '@/navigation';


export default function Footer() {
    const pathName = usePathname()
    const [footer, setFooter] = useState("")
    const t = useTranslations("Footer");
    //@ts-ignore
    const lang: "ar" | "en" = useLocale();

    useEffect(() => {
        if (pathName === "/") {
            setFooter(t("title_1"))
        } else  {
            setFooter(t("title_2"))
        }
    }, [pathName])

  return (
    <footer className="bg-[#101010] w-full">
        <div className='px-5 pb-[43px] md:pb-0 md:px-10'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="mt-[-14px] mb-[-18px] pt-16 pb-[6.9rem] sm:my-0 sm:py-32 md:py-48">
                    <div className="inline-block md:grid gap-10 grid-rows-1 relative footer-component-grid">
                        <div className="z-[2] relative">
                            <Link href="/" locale={lang}  className='decoration-[none]'>
                                <img src="/642ee59bfc20d168af3405e6_Yhh_Logo_RW.png" alt="" width="200" height="200" className="logo mt-[-60px] duration-[.3s] hover:scale-95 min-[1920px]:mb-[-59px]"></img>
                            </Link>
                            <div className='max-w-96 mt-5 sm:mt-6 md:mt-8 px-4 ml-[-0.9rem] md:ml-0'>
                                <p className="text-[.8rem] md:text-[1.1rem] text-white opacity-65">{footer}</p>
                            </div>
                            <div className='max-w-96 mt-5 sm:mt-6 md:mt-8 px-4 ml-[-0.9rem] md:ml-0'>
                                <div className="flex items-center gap-[16px]">
                                    <a href="https://www.linkedin.com/company/yh-h-products-design-services/" target="_blank" className="text-sm w-[1.8rem] h-[1.8rem] flex justify-center items-center duration-[.3s] bg-[#e4e8ed] text-[#242540] rounded-[20px] hover:bg-[#9bdaf2]">
                                        <BiLogoLinkedin />
                                    </a>
                                    <a href="https://twitter.com/yhh_products" target="_blank" className="text-sm w-[1.8rem] h-[1.8rem] flex justify-center items-center duration-[.3s] bg-[#e4e8ed] text-[#242540] rounded-[20px] hover:bg-[#9bdaf2]">
                                        <BsTwitterX />
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=100083505374612" target="_blank" className="text-sm w-[1.8rem] h-[1.8rem] flex justify-center items-center duration-[.3s] bg-[#e4e8ed] text-[#242540] rounded-[20px] hover:bg-[#9bdaf2]">
                                        <BiLogoFacebook />
                                    </a>
                                    <a href="https://www.instagram.com/yhh.productsdesign/" target="_blank" className="text-sm w-[1.8rem] h-[1.8rem] flex justify-center items-center duration-[.3s] bg-[#e4e8ed] text-[#242540] rounded-[20px] hover:bg-[#9bdaf2]">
                                        <BiLogoInstagramAlt />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="background-circle is-footer"></div>

                        <div className="z-[2] relative mt-[30px] sm:mt-[40px] md:mt-0">
                            <div className="flex items-start gap-2 mb-[12px]">
                                <div className='triangule-icon2 border-transparent border-t-[#47bdff] border-s-[#47bdff]'></div>
                                <div className='circle-icon bg-[#f2a7d8]'></div>
                            </div>
                            <h2 className="text-2xl md:text-5xl leading-[1.2] font-bold text-[#e12120] mb-5 md:mb-8">{t("company-info.title")} <span className="text-white">.</span></h2>
                            <p className="text-[.9rem] md:text-base text-white opacity-65 mb-[20px]">{t("company-info.description")}</p>
                        </div>
                        
                        <div className="z-[2] relative mt-[30px] sm:mt-[40px] md:mt-0 xl:row-start-[Area] xl:row-end-[Area] xl:col-start-[Area] xl:col-end-[Area]">
                            <div className="text-[#fafaff] text-[1.25rem] font-medium">{t("sitemap.title")}</div>
                            <div className="mt-5 pl-0 px-[16px] md:px-0 ml-[-0.9rem] md:ml-0 sm:mt-6 md:mt-8">
                                <ul className="flex flex-wrap flex-col items-start pl-[14px] sm:pl-0">
                                    <li className='mb-[1.4rem]'>
                                        <Link href="/" locale={lang}  className="duration-[.3s] text-white opacity-65 hover:text-[#9bdaf2] hover:opacity-100">{t("sitemap.home")}</Link>
                                    </li>
                                    <li className='mb-[1.4rem]'>
                                        <Link href="/about" locale={lang}  className="duration-[.3s] text-white opacity-65 hover:text-[#9bdaf2] hover:opacity-100">{t("sitemap.about")}</Link>
                                    </li>
                                    <li className='mb-[1.4rem]'>
                                        <Link href="/contact" locale={lang}  className="duration-[.3s] text-white opacity-65 hover:text-[#9bdaf2] hover:opacity-100">{t("sitemap.contact")}</Link>
                                    </li>
                                    <li className='mb-[1.4rem]'>
                                        <Link href="/portfolio" locale={lang}  className="duration-[.3s] text-white opacity-65 hover:text-[#9bdaf2] hover:opacity-100">{t("sitemap.portfolio")}</Link>
                                    </li>
                                    <li className='mb-[1.4rem]'>
                                        <Link href="/privacy-policy" locale={lang}  className="duration-[.3s] text-white opacity-65 hover:text-[#9bdaf2] hover:opacity-100">{t("sitemap.privacy-policy")}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-[2.8rem] flex justify-center items-center border-t border-solid border-[#69778c]">
                    <div className="text-[.8rem] md:text-base text-center text-white opacity-65">{t("copyright")}</div>
                </div>
            </div>
        </div>
    </footer>
  )
}
