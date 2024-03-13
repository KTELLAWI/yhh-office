import Image from 'next/image'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function Page() {
  const t = useTranslations("Privacy-policy");

  return (
    <>
      <NavBar />
      <main className="w-full">
        <div className='bg-[#f7f8fa] px-5 pb-[43px] md:pb-0 md:px-10'>
          <div className="w-full max-w-5xl mx-auto">
            <div className="py-16 sm:py-24 md:py-32">
              <div className="flex justify-center items-center flex-col ">
                <div className="flex items-center gap-2 mb-[12px]">
                  <div className='square-icon bg-[#f25260]'></div>
                  <div className='circle-border-icon border-[#f2b56b]'></div>
                </div>
                <h2 className="animate__animated animate__slower animate__fadeInUp text-[1.2rem] sm:text-4xl md:text-5xl leading-[1.2] font-bold text-[#28264d] max-w-lg text-center mb-4 min-[1920px]:text-black">{t("title")}</h2>
                <p className="animate__animated animate__slower animate__fadeInUp mb-5 md:mb-8 text-[.7rem] md:text-lg text-[#69778c]">{t("description")}</p>
              </div>
            </div>
          </div>
        </div>

        <section className='px-5 pb-[43px] md:pb-0 md:px-10'>
          <div className="w-full max-w-5xl mx-auto">
            <div className="animate__animated animate__slower animate__fadeInUp py-16 sm:py-24 md:py-32">
              <div className="bg-[#f7f8fa] px-6 py-12 sm:px-10 sm:py-14 md:pt-16 md:py-16 md:pb-24 text-[#69778c] mt-[-1.2rem] sm:mt-12 md:mt-0">
                <h2 className='text-[#28264d] font-bold text-base md:text-[32px] leading-[36px]'>{t("content.title_1")}</h2>
                <br />
                <p className='text-[.8rem] md:text-base'>{t("content.paragraph_1")}</p>
                <ol className='list-decimal'>
                  <li>{t("content.list_1.item_1")}</li>
                  <li>{t("content.list_1.item_2")}<a href="https://www.dummies.com/privacy-policy/#9">{t("content.list_1.link")}</a>{t("content.list_1.item_3")}</li>
                </ol>
                <br />
                <h2 className='text-[#28264d] font-bold text-base md:text-[32px] leading-[36px]'>{t("content.title_2")}</h2>
                <br />
                <p className='text-[.8rem] md:text-base'>{t("content.paragraph_2")}</p>
                <ul className='list-disc'>
                  <li>{t("content.list_2.item_1")}</li>
                  <li>{t("content.list_2.item_2")}</li>
                  <li>{t("content.list_2.item_3")}</li>
                  <li>{t("content.list_2.item_4")}</li>
                  <li>{t("content.list_2.item_5")}</li>
                  <li>{t("content.list_2.item_6")}</li>
                  <li>{t("content.list_2.item_7")}</li>
                  <li>{t("content.list_2.item_8")}</li>
                  <li>{t("content.list_2.item_9")}</li>
                </ul>
                <br />
                <p className='text-[.8rem] md:text-base'>{t("content.paragraph_3")}</p>
                <p className='text-[.8rem] md:text-base'>{t("content.paragraph_4")}</p>
                <br />
                <h2 className='text-[#28264d] font-bold text-base md:text-[32px] leading-[36px]'><strong>{t("content.title_3")}</strong></h2>
                <br />
                <p className='text-[.8rem] md:text-base'>{t("content.paragraph_5")}</p>
                <ul className='list-disc'>
                  <li>{t("content.list_3.item_1")}</li>
                  <li>{t("content.list_3.item_2")}</li>
                  <li>{t("content.list_3.item_3")}</li>
                  <li>{t("content.list_3.item_4")}</li>
                  <li>{t("content.list_3.item_5")}</li>
                  <li>{t("content.list_3.item_6")}</li>
                  <li>{t("content.list_3.item_7")}</li>
                </ul>
                <br />
                <h2 className='text-[#28264d] font-bold text-base md:text-[32px] leading-[36px]'>{t("content.title_4")}</h2>
                <br />
                <p className='text-[.8rem] md:text-base'>{t("content.paragraph_6")}</p>
                <br />
                <h2 className='text-[#28264d] font-bold text-base md:text-[32px] leading-[36px]'><strong>{t("content.title_5")}</strong></h2>
                <br />
                <p className='text-[.8rem] md:text-base'>{t("content.paragraph_7")}</p>
                <br />
                <h2 className='text-[#28264d] font-bold text-base md:text-[32px] leading-[36px]'><strong>{t("content.title_6")}</strong></h2>
                <br />
                <p className='text-[.8rem] md:text-base'>{t("content.paragraph_8")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
