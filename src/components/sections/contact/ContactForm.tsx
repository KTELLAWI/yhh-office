"use client"
import axios from 'axios';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { FiX } from "react-icons/fi";
import { send } from '@/app/[locale]/contact/api'

export default function ContactForm() {
    const t = useTranslations("Contact.contactForm");
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    
    
    const onSubmit = async (data: any) => {
        await send(data)
        .then((response) => {
            setSuccess(true)
            setError(false)
            reset()
        })
        .catch((error) => {
            console.log(error);
            setError(true)
            setSuccess(false)
        });
    }

    return (
        <section className="animate__animated animate__slower animate__fadeInUp w-full">
            <div className='px-5 pb-[43px] md:pb-0 md:px-10'>
                <div className="w-full max-w-5xl mx-auto">
                    <div className="py-16 sm:py-24 md:py-32">
                        <div className="p-6 sm:p-10 md:p-12 bg-[#f7f8fa]">
                            <form onSubmit={handleSubmit(onSubmit)} className='w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div>
                                    <label htmlFor="name" className="block text-base font-bold leading-6 text-[#28264d] my-[20px]">
                                        {t("label_1")}
                                    </label>
                                    <div className="mb-4 min-h-[auto] rounded-[50px] px-5 border border-solid border-[#dedede] duration-1000 hover:border-[#96a9b3]">
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder={t("placeholder_1")}
                                            autoComplete="given-name"
                                            {...register("name", { required: true })}
                                            className="w-full rounded-[50px] min-h-4 h-[38px] md:min-h-16 border-0 text-gray-700 focus-visible:outline-0 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-base font-bold leading-6 text-[#28264d] my-[20px]">
                                        {t("label_2")}
                                    </label>
                                    <div className="mb-4 min-h-[auto] rounded-[50px] px-5 border border-solid border-[#dedede] duration-1000 hover:border-[#96a9b3]">
                                        <input
                                            type="text"
                                            id="email"
                                            placeholder={t("placeholder_2")}
                                            autoComplete="given-email"
                                            {...register("email", { required: true })}
                                            className="w-full rounded-[50px] min-h-4 h-[38px] md:min-h-16 border-0 text-gray-700 focus-visible:outline-0 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="project_timeline" className="block text-base font-bold leading-6 text-[#28264d] my-[20px]">
                                        {t("label_3")}
                                    </label>
                                    <div className="mb-4 min-h-[auto] rounded-[50px] px-5 border border-solid border-[#dedede] duration-1000 hover:border-[#96a9b3]">
                                        <select
                                            id="project_timeline"
                                            autoComplete="given-project"
                                            {...register("project_timeline", { required: true })}
                                            className="w-full rounded-[50px] min-h-4 h-[38px] md:min-h-16 border-0 text-gray-700 focus-visible:outline-0 sm:text-sm sm:leading-6"
                                        >
                                            <option value={"2 months"}>{t("option_1")}</option>
                                            <option value={"1-2 weeks"}>{t("option_2")}</option>
                                            <option value={"3+ months"}>{t("option_3")}</option>
                                            <option value={"One time"}>{t("option_4")}</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-base font-bold leading-6 text-[#28264d] my-[20px]">
                                        {t("label_4")}
                                    </label>
                                    <div className="mb-4 min-h-[auto] rounded-[50px] px-5 border border-solid border-[#dedede] duration-1000 hover:border-[#96a9b3]">
                                        <input
                                            type="text"
                                            id="subject"
                                            placeholder={t("placeholder_3")}
                                            autoComplete="given-email"
                                            {...register("subject", { required: true })}
                                            className="w-full rounded-[50px] min-h-4 h-[38px] md:min-h-16 border-0 text-gray-700 focus-visible:outline-0 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <label htmlFor="message" className="block text-base font-bold leading-6 text-[#28264d] my-[20px]">
                                        {t("label_5")}
                                    </label>
                                    <div className="mb-4 min-h-[auto] rounded-[50px] px-5 border border-solid border-[#dedede] duration-1000 hover:border-[#96a9b3]">
                                        <textarea
                                            id="message"
                                            placeholder={t("placeholder_4")}
                                            autoComplete="given-email"
                                            rows={5}
                                            {...register("message", { required: true })}
                                            className="w-full p-5 rounded-[50px] min-h-40 border-0 text-gray-700 focus-visible:outline-0 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <button type='submit' className=" bg-[#302e59] text-white text-[.5rem] md:text-[.8rem] leading-[1] tracking-[3px] font-bold py-[1.4rem] md:py-[1.6rem] px-[2.2rem] md:px-8 rounded-[50px] duration-700 hover:scale-95 hover:bg-[#47bdff] hover:text-[#302e59] ">
                                        {t("send")}
                                    </button>
                                </div>
                            </form>

                            {success
                                ? <div className="mt-4 flex items-center justify-between rounded-md bg-[#9bdaf2] px-[1.125rem] py-[1.8rem] text-base text-[#28264d]" role="alert">
                                    {t("msg_1")}
                                    <FiX className={"cursor-pointer"} onClick={() => setSuccess(false)} />
                                </div>
                                : null
                            }

                            {error
                                ? <div className="mt-4 flex items-center justify-between rounded-md bg-[#ffdede] px-[1.125rem] py-[1.8rem] text-base text-[#302e59]" role="alert">
                                    {t("msg_2")}
                                    <FiX className={"cursor-pointer"} onClick={() => setError(false)} />
                                </div>
                                : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
