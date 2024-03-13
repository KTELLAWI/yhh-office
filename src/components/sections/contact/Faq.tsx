"use client"
import React from 'react'
import { BiPhone, BiSolidMap, BiSolidPhone } from "react-icons/bi";
import Collapsible from 'react-collapsible';
import { BiPlus } from "react-icons/bi";
import { useTranslations } from 'next-intl';

export default function Faq() {
    const t = useTranslations("Contact.faqs");

    return (
        <section className="w-full">
            <div className='px-5 pb-[43px] md:pb-0 md:px-10'>
                <div className="w-full max-w-7xl mx-auto">
                    <div className="mt-[-14px] mb-[-18px] pt-16 pb-[6.9rem] sm:my-0 sm:py-32 md:py-48">
                        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-[.5fr_1fr] gap-16">
                            <div className="flex items-start flex-col mb-5 sm:mb-6 md:mb-2">
                                <div className="flex items-start gap-2 mb-[12px]">
                                    <div className='triangule-icon2 border-transparent border-t-[#47bdff] border-s-[#47bdff]'></div>
                                    <div className='square-icon bg-[#fdc067]'></div>
                                </div>
                                <h2 className="animate__animated animate__slower animate__fadeInUp text-[1.2rem] sm:text-4xl md:text-5xl leading-[1.2] font-bold text-[#28264d] min-[1920px]:text-black">{t("title")}</h2>
                            </div>

                            <div>
                                <Collapsible 
                                    trigger={
                                        <div className='flex items-center'>
                                            <div className='mr-4 md:me-12 w-8 text-[1.5rem] font-medium leading-[1] mt-[-10px] text-[#6695f2]' >01</div>
                                            <div className="flex justify-between items-center w-full">
                                                <h3 className="text-[.8rem] md:text-[1.2rem] font-bold leading-[1.4] mb-[10px] text-[#28264d]"><strong>{t("faq_1.title")}</strong></h3>
                                                <BiPlus id={"icon"} size={28} className={"ml-6 md:ml-8"} />
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="w-[390px] md:w-[640px] max-w-[40rem] overflow-hidden">
                                        <div className='ml-0 pt-2 md:pt-0 md:ml-20'>
                                            <p className="text-[#69778c] mb-[10px] text-[.7rem] md:text-base mx-[25px] md:mx-0">{t("faq_1.paragraph")}</p>
                                        </div>
                                    </div>
                                </Collapsible>
                                
                                <Collapsible 
                                    trigger={
                                        <div className='flex items-center'>
                                            <div className='mr-4 md:me-12 w-8 text-[1.5rem] font-medium leading-[1] mt-[-10px] text-[#6695f2]' >02</div>
                                            <div className="flex justify-between items-center w-full">
                                                <h3 className="text-[.8rem] md:text-[1.2rem] font-bold leading-[1.4] mb-[10px] text-[#28264d]"><strong>{t("faq_2.title")}</strong></h3>
                                                <BiPlus id={"icon"} size={28} className={"ml-6 md:ml-8"} />
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="w-[390px] md:w-[640px] max-w-[40rem] overflow-hidden">
                                        <div className='ml-0 pt-2 md:pt-0 md:ml-20'>
                                            <p className="text-[#69778c] mb-[10px] mb-[10px] text-[.7rem] md:text-base mx-[25px] md:mx-0">{t("faq_2.paragraph")}</p>
                                        </div>
                                    </div>
                                </Collapsible>

                                <Collapsible 
                                    trigger={
                                        <div className='flex items-center'>
                                            <div className='mr-4 md:me-12 w-8 text-[1.5rem] font-medium leading-[1] mt-[-10px] text-[#6695f2]' >03</div>
                                            <div className="flex justify-between items-center w-full">
                                                <h3 className="text-[.8rem] md:text-[1.2rem] font-bold leading-[1.4] mb-[10px] text-[#28264d]"><strong>{t("faq_3.title")}</strong></h3>
                                                <BiPlus id={"icon"} size={28} className={"ml-6 md:ml-8"} />
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="w-[390px] md:w-[640px] max-w-[40rem] overflow-hidden">
                                        <div className='ml-0 pt-2 md:pt-0 md:ml-20'>
                                            <p className="text-[#69778c] mb-[10px] mb-[10px] text-[.7rem] md:text-base mx-[25px] md:mx-0">{t("faq_3.paragraph")}</p>
                                        </div>
                                    </div>
                                </Collapsible>
                                
                                <Collapsible 
                                    trigger={
                                        <div className='flex items-center'>
                                            <div className='mr-4 md:me-12 w-8 text-[1.5rem] font-medium leading-[1] mt-[-10px] text-[#6695f2]' >04</div>
                                            <div className="flex justify-between items-center w-full">
                                                <h3 className="text-[.8rem] md:text-[1.2rem] font-bold leading-[1.4] mb-[10px] text-[#28264d]"><strong>{t("faq_4.title")}</strong></h3>
                                                <BiPlus id={"icon"} size={28} className={"ml-6 md:ml-8"} />
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="w-[390px] md:w-[640px] max-w-[40rem] overflow-hidden">
                                        <div className='ml-0 pt-2 md:pt-0 md:ml-20'>
                                            <p className="text-[#69778c] mb-[10px] mb-[10px] text-[.7rem] md:text-base mx-[25px] md:mx-0">{t("faq_4.paragraph")}</p>
                                            <ul className='list-disc text-[#69778c] mx-[25px] md:mx-0 text-center md:text-start'>
                                                <li>{t("faq_4.list.item_1")}</li>
                                                <li>{t("faq_4.list.item_2")}</li>
                                                <li>{t("faq_4.list.item_3")}</li>
                                                <li>{t("faq_4.list.item_4")}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Collapsible>
                                
                                <Collapsible 
                                    trigger={
                                        <div className='flex items-center'>
                                            <div className='mr-4 md:me-12 w-8 text-[1.5rem] font-medium leading-[1] mt-[-10px] text-[#6695f2]' >05</div>
                                            <div className="flex justify-between items-center w-full">
                                                <h3 className="text-[.8rem] md:text-[1.2rem] font-bold leading-[1.4] mb-[10px] text-[#28264d]"><strong>{t("faq_5.title")}</strong></h3>
                                                <BiPlus id={"icon"} size={28} className={"ml-6 md:ml-8"} />
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="w-[390px] md:w-[640px] max-w-[40rem] overflow-hidden">
                                        <div className='ml-0 pt-2 md:pt-0 md:ml-20'>
                                            <p className="text-[#69778c] mb-[10px] mb-[10px] text-[.7rem] md:text-base mx-[25px] md:mx-0">{t("faq_5.paragraph")}</p>
                                            <ul className='list-disc text-[#69778c] mx-[25px] md:mx-0 text-center md:text-start'>
                                                <li>{t("faq_5.list.item_1")}</li>
                                                <li>{t("faq_5.list.item_2")}</li>
                                                <li>{t("faq_5.list.item_3")}</li>
                                                <li>{t("faq_5.list.item_4")}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Collapsible>
                                
                                <Collapsible 
                                    trigger={
                                        <div className='flex items-center'>
                                            <div className='mr-4 md:me-12 w-8 text-[1.5rem] font-medium leading-[1] mt-[-10px] text-[#6695f2]' >06</div>
                                            <div className="flex justify-between items-center w-full">
                                                <h3 className="text-[.8rem] md:text-[1.2rem] font-bold leading-[1.4] mb-[10px] text-[#28264d]"><strong>{t("faq_6.title")}</strong></h3>
                                                <BiPlus id={"icon"} size={28} className={"ml-6 md:ml-8"} />
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="w-[390px] md:w-[640px] max-w-[40rem] overflow-hidden">
                                        <div className='ml-0 pt-2 md:pt-0 md:ml-20'>
                                            <p className="text-[#69778c] mb-[10px] mb-[10px] text-[.7rem] md:text-base mx-[25px] md:mx-0">{t("faq_6.paragraph")}</p>
                                        </div>
                                    </div>
                                </Collapsible>
                                
                                <Collapsible 
                                    trigger={
                                        <div className='flex items-center'>
                                            <div className='mr-4 md:me-12 w-8 text-[1.5rem] font-medium leading-[1] mt-[-10px] text-[#6695f2]' >07</div>
                                            <div className="flex justify-between items-center w-full">
                                                <h3 className="text-[.8rem] md:text-[1.2rem] font-bold leading-[1.4] mb-[10px] text-[#28264d]"><strong>{t("faq_7.title")}</strong></h3>
                                                <BiPlus id={"icon"} size={28} className={"ml-6 md:ml-8"} />
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="w-[390px] md:w-[640px] max-w-[40rem] overflow-hidden">
                                        <div className='ml-0 pt-2 md:pt-0 md:ml-20'>
                                            <p className="text-[#69778c] mb-[10px] mb-[10px] text-[.7rem] md:text-base mx-[25px] md:mx-0">{t("faq_7.paragraph")}</p>
                                            <ul className='list-disc text-[#69778c] mx-[25px] md:mx-0 text-center md:text-start'>
                                                <li>{t("faq_7.list.item_1")}</li>
                                                <li>{t("faq_7.list.item_2")}</li>
                                                <li>{t("faq_7.list.item_3")}</li>
                                                <li>{t("faq_7.list.item_4")}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Collapsible>
                                
                                <Collapsible 
                                    trigger={
                                        <div className='flex items-center'>
                                            <div className='mr-4 md:me-12 w-8 text-[1.5rem] font-medium leading-[1] mt-[-10px] text-[#6695f2]' >08</div>
                                            <div className="flex justify-between items-center w-full">
                                                <h3 className="text-[.8rem] md:text-[1.2rem] font-bold leading-[1.4] mb-[10px] text-[#28264d]"><strong>{t("faq_8.title")}</strong></h3>
                                                <BiPlus id={"icon"} size={28} className={"ml-6 md:ml-8"} />
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="w-[390px] md:w-[640px] max-w-[40rem] overflow-hidden">
                                        <div className='ml-0 pt-2 md:pt-0 md:ml-20'>
                                            <p className="text-[#69778c] mb-[10px] mb-[10px] text-[.7rem] md:text-base mx-[25px] md:mx-0">{t("faq_8.paragraph")}</p>
                                            <ul className='list-disc text-[#69778c] mx-[25px] md:mx-0 text-center md:text-start'>
                                                <li>{t("faq_8.list.item_1")}</li>
                                                <li>{t("faq_8.list.item_2")}</li>
                                                <li>{t("faq_8.list.item_3")}</li>
                                                <li>{t("faq_8.list.item_4")}</li>
                                                <li>{t("faq_8.list.item_5")}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Collapsible>
                                
                                <Collapsible 
                                    trigger={
                                        <div className='flex items-center'>
                                            <div className='mr-4 md:me-12 w-8 text-[1.5rem] font-medium leading-[1] mt-[-10px] text-[#6695f2]' >09</div>
                                            <div className="flex justify-between items-center w-full">
                                                <h3 className="text-[.8rem] md:text-[1.2rem] font-bold leading-[1.4] mb-[10px] text-[#28264d]"><strong>{t("faq_9.title")}</strong></h3>
                                                <BiPlus id={"icon"} size={28} className={"ml-6 md:ml-8"} />
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="w-[390px] md:w-[640px] max-w-[40rem] overflow-hidden">
                                        <div className='ml-0 pt-2 md:pt-0 md:ml-20'>
                                            <p className="text-[#69778c] mb-[10px] mb-[10px] text-[.7rem] md:text-base mx-[25px] md:mx-0">{t("faq_9.paragraph")}</p>
                                            <ul className='list-disc text-[#69778c] mx-[25px] md:mx-0 text-center md:text-start'>
                                                <li>{t("faq_9.list.item_1")}</li>
                                                <li>{t("faq_9.list.item_2")}</li>
                                                <li>{t("faq_9.list.item_3")}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Collapsible>
                                
                                <Collapsible 
                                    trigger={
                                        <div className='flex items-center'>
                                            <div className='mr-4 md:me-12 w-8 text-[1.5rem] font-medium leading-[1] mt-[-10px] text-[#6695f2]' >10</div>
                                            <div className="flex justify-between items-center w-full">
                                                <h3 className="text-[.8rem] md:text-[1.2rem] font-bold leading-[1.4] mb-[10px] text-[#28264d]"><strong>{t("faq_10.title")}</strong></h3>
                                                <BiPlus id={"icon"} size={28} className={"ml-6 md:ml-8"} />
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="w-[390px] md:w-[640px] max-w-[40rem] overflow-hidden">
                                        <div className='ml-0 pt-2 md:pt-0 md:ml-20'>
                                            <p className="text-[#69778c] mb-[10px] mb-[10px] text-[.7rem] md:text-base mx-[25px] md:mx-0">{t("faq_10.paragraph")}</p>
                                            <ul className='list-disc text-[#69778c] mx-[25px] md:mx-0 text-center md:text-start'>
                                                <li>{t("faq_10.list.item_1")}</li>
                                                <li>{t("faq_10.list.item_2")}</li>
                                                <li>{t("faq_10.list.item_3")}</li>
                                                <li>{t("faq_10.list.item_4")}</li>
                                                <li>{t("faq_10.list.item_5")}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Collapsible>
                                
                                <Collapsible 
                                    trigger={
                                        <div className='flex items-center'>
                                            <div className='mr-4 md:me-12 w-8 text-[1.5rem] font-medium leading-[1] mt-[-10px] text-[#6695f2]' >11</div>
                                            <div className="flex justify-between items-center w-full">
                                                <h3 className="text-[.8rem] md:text-[1.2rem] font-bold leading-[1.4] mb-[10px] text-[#28264d]"><strong>{t("faq_11.title")}</strong></h3>
                                                <BiPlus id={"icon"} size={28} className={"ml-6 md:ml-8"} />
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="w-[390px] md:w-[640px] max-w-[40rem] overflow-hidden">
                                        <div className='ml-0 pt-2 md:pt-0 md:ml-20'>
                                            <p className="text-[#69778c] mb-[10px] mb-[10px] text-[.7rem] md:text-base mx-[25px] md:mx-0">{t("faq_11.paragraph")}</p>
                                        </div>
                                    </div>
                                </Collapsible>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
