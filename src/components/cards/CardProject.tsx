"use client"
import React, { useEffect, useState } from 'react'
import dayjs from "dayjs";
import "dayjs/locale/ar";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
dayjs.extend(duration)
dayjs.extend(relativeTime)
import { useLocale } from 'next-intl';
import {usePathname, useRouter, Link} from '@/navigation';

type Props = {
    id: string;
    thumbnail: string;
    title: string;
    shortDescription: string;
    createdAt: string;
    withMargin: boolean;
};

export function CardProject({id, thumbnail, title, shortDescription, createdAt, withMargin}: Props) {
    //@ts-ignore
    const lang: "ar" | "en" = useLocale();
    
    return (
        <div className={withMargin ? "mt-0 md:mt-24" : ""}>
            <Link href={{ pathname: `/portfolio/[id]`, params: {id} }} locale={lang} className='flex flex-col justify-start decoration-[none]'>
                <div className="flex items-center overflow-hidden h-full">
                    <img src={thumbnail} loading="lazy" alt="Website  Design" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 43vw, (max-width: 1439px) 44vw, 608px" className="cover-image duration-1000 hover:scale-105" ></img>
                </div>
                <div className='ml-[-0.9rem] px-4 md:ml-0 md:px-0 mt-5 md:mt-8'>
                    <h3 className='text-base md:text-2xl text-[#28264d] mb-4 font-bold hover:text-[#47bdff]'>{title}</h3>
                    <div className="flex justify-start gap-4 items-center">
                        <div className='divider-item'></div>
                        <div className='text-[.8rem] px-5 md:px-0 md:text-base text-[#69778c] '>{dayjs(createdAt).locale(lang).format('MMM DD, YYYY')}</div>
                    </div>
                    <p className="mt-4 text-[#69778c] text-base">{shortDescription}</p>
                </div>
            </Link>
        </div>
    )
}
