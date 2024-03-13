import Image from 'next/image'
import type { Metadata } from 'next'
import ContactForm from '@/components/sections/contact/ContactForm'
import Location from '@/components/sections/contact/Location'
import Faq from '@/components/sections/contact/Faq'
import { useTranslations } from 'next-intl'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Page() {
  const t = useTranslations("Contact");

  return (
    <>
      <NavBar />
      <main>
        <div className="bg-[#f7f8fa]">
          <div className='px-5 pb-[43px] md:pb-0 md:px-10'>
            <div className="w-full max-w-3xl mx-auto">
              <div className="py-16 sm:py-24 md:py-32">
                <div className="flex justify-center items-center flex-col ">
                  <div className="flex items-center gap-2 mb-[12px]">
                    <div className='square-icon bg-[#47bdff]'></div>
                    <div className='circle-border-icon border-[#f2b56b]'></div>
                  </div>
                  <h2 className="animate__animated animate__slower animate__fadeInUp text-[1.2rem] sm:text-4xl md:text-5xl leading-[1.2] font-bold text-[#28264d] max-w-lg text-center mb-4 min-[1920px]:text-black">{t("title")}</h2>
                  <p className="animate__animated animate__slower animate__fadeInUp mb-5 md:mb-8 text-[1.2rem] md:text-lg text-[#69778c]">{t("description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
        <Location />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
