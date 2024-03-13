import Image from "next/image";
import { fetchTestimonials } from "@/app/actions/testimonials";

export default async function TestimonialsCard() {
  const data = await fetchTestimonials();
  return (
    <>
      <section className="w-full">
        <div className='px-5 pb-[43px] md:pb-0 md:px-10'>
          <div className="w-full max-w-7xl mx-auto">
            <div className="mt-[-14px] mb-[-18px] pt-16 pb-[6.9rem] sm:my-0 sm:py-32 md:py-48">
              <div className="flex justify-center items-center flex-col">
                <div className="flex items-center gap-2 mb-[12px]">
                  <div className='square-icon bg-[#fdc067]'></div>
                  <div className='triangule-icon2 border-transparent border-t-[#f25260] border-s-[#f25260]'></div>
                </div>
                <h2 className="animate__animated animate__slower animate__fadeInUp mb-6 md:mb-10 lg:mb-12 text-[1.2rem] sm:text-[2.5rem] md:text-5xl leading-[1.2] font-bold text-[#28264d]">Relationships based on trust.</h2>
              </div>

              <div className="grid gap-8 grid-cols-1 sm:gap-12 md:gap-8 md:grid-cols-3 relative">

                {
                  data?.map((testimonial: any) => (
                    <div className='animate__animated animate__slower animate__fadeInUp pt-12 ps-[2.3rem] pe-[2.3rem] pb-16 bg-[#f7f8fa] flex flex-col' key={testimonial.id}>
                      <div className="flex items-center mb-6 sm:mb-10 md:mb-12">
                        <Image
                          src={`${process.env.DIRECTUS_URL}/assets/${testimonial.face_image.filename_disk}?access_token=${process.env.DIRECTUS_ACCESS_TOKEN}`}
                          alt="Staff Image"
                          width={0}
                          height={0}
                          sizes="100%"
                          className="w-[6rem] h-[6rem] rounded-full relative z-10 border-8 border-[#f7f8fa]"
                        />
                        <div className="testimonial-shape bg-[#fdc067] circle-top-right"></div>
                      </div>
                      <div>
                        <h3 className='text-[#28264d] mt-4 font-bold'>{'"'}<strong className='text-base sm:text-2xl ps-4 md:ps-0'>{testimonial.translations.find((t: any) => t.languages_code === 'en').title}</strong>{'"'}</h3>

                        {/* <p className="mt-4 text-[.8rem] md:text-base px-[20px] md:px-0 text-[#69778c]">{testimonial.short_description
                        } <br />{"testimonial_1.description_2"} <br />{"testimonial_1.description_3"} <br /><br />{"testimonial_1.description_4"}</p> */}

                        <p className="mt-4 text-[.8rem] md:text-base px-[20px] md:px-0 text-[#69778c]">
                          {testimonial.translations.find((t: any) => t.languages_code === 'en').testimonial}
                        </p>
                        <div className="text-[#28264d] mt-5 md:mt-8 font-bold text-xl mb-1 ml-[-0.9rem] md:ml-0 px-[16px] md:px-0">{testimonial.translations.find((t: any) => t.languages_code === 'en').name}</div>
                        <div className="text-[#e12120] text-[.7rem] md:text-base text-center md:text-start mx-[25px] md:mx-0">{testimonial.translations.find((t: any) => t.languages_code === 'en').position} <br /><strong>{testimonial.translations.find((t: any) => t.languages_code === 'en').company_name} </strong></div>
                      </div>
                    </div>
                  ))
                }


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
