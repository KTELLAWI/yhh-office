import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { fetchStaffMember } from "@/app/actions/staffmemeber";
import VCardButton from "../_components/vcard-button";

const StaffId = async ({ params }: any) => {
  const data: any = await fetchStaffMember(params?.id);

  return (
    <>
      <section className="h-screen flex items-center justify-center md:bg-[#101010] bg-[#101010]">
        <div className="relative mx-auto max-w-[1440px]">
          <div>
            <div className="h-screen md:h-fit relative grid grid-cols-1">
              <Card
                className="rounded-none md:rounded-2xl overflow-hidden md:bg-white bg-[#101010] p-0 md:p-10 border-none md:border px-6 md:px-10 py-12 md:py-10"
              >
                <CardHeader className="flex flex-col items-start justify-start gap-6 md:flex-row p-0">
                  <div>
                    <Image
                      src={`${process.env.DIRECTUS_URL}/assets/${data.face_image.filename_disk}?access_token=${process.env.DIRECTUS_ACCESS_TOKEN}`}
                      alt="Staff"
                      width={180}
                      height={180}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex items-start justify-start flex-col">
                    <span className="text-white md:text-black text-4xl md:text-5xl font-bold text-center uppercase pb-2">Hi, I&apos;m</span>
                    <div className="flex items-start md:items-center flex-col md:flex-row gap-2 pb-3">
                      <h1 className="text-[#E12120] text-4xl md:text-5xl font-bold text-center uppercase">{data.translations.find((t: any) => t.languages_code === 'en').first_name}</h1>
                      <h1 className="text-white md:text-black text-4xl md:text-5xl font-bold text-center uppercase">{data.translations.find((t: any) => t.languages_code === 'en').last_name}</h1>
                    </div>
                    <div className="flex items-center gap-4 mt-0">
                      <h3 className="text-white md:text-[#8A929A] text-sm md:text-2xl font-medium text-center uppercase">{data.translations.find((t: any) => t.languages_code === 'en').title}</h3>
                      <Link href={data.linked_in} target="_blank" rel="noopener noreferrer">
                        <Image
                          alt="LinkedIn"
                          src="/linkedin_icon.svg"
                          width={140}
                          height={140}
                          className="block md:hidden w-[100px] md:w-[140px] h-full"
                        />
                      </Link>
                      <Link href={data.linked_in} target="_blank" rel="noopener noreferrer">
                        <Image
                          alt="LinkedIn"
                          src="/linkedin_favicon.svg"
                          width={45}
                          height={45}
                          className="hidden md:block md:absolute md:right-6 md:top-6 md:w-[45px]"
                        />
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-start gap-4 mt-10 mb-0 md:mb-0 md:mt-10 p-0">
                  <div className="flex ietms-center gap-4">
                    <span className="text-[#E12120] font-semibold text-base md:text-xl">P:</span>
                    <h2 className="text-white md:text-black font-semibold text-base md:text-xl">{data.phone_number}</h2>
                  </div>
                  <div className="flex ietms-center gap-4">
                    <span className="text-[#E12120] font-semibold text-base md:text-xl">E:</span>
                    <h2 className="text-white md:text-black font-semibold text-base md:text-xl">{data.email}</h2>
                  </div>
                  <div className="flex ietms-center gap-4">
                    <span className="text-[#E12120] font-semibold text-base md:text-xl">W:</span>
                    <h2 className="text-white md:text-black font-semibold text-base md:text-xl">www.yhh.ae</h2>
                  </div>
                  <div className="flex ietms-center gap-4">
                    <span className="text-[#E12120] font-semibold text-base md:text-xl">A:</span>
                    <div className="flex items-start md:items-center gap-4">
                      <h2 className="text-white md:text-black font-semibold text-base md:text-xl">Office 148, Schon Business Building 1, DIP, Dubai</h2>
                      <Image
                        alt="Map"
                        src="/map_icon.svg"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-[30px] h-[30px]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Button  */}
              <div className="z-50 md:bg-transparent bg-[#101010] w-full md:w-fit md:border-none border-t border-t-[#6e6c6c] py-4 px-4 md:px-0 md:py-0 flex items-center justify-center">
                <VCardButton data={data} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StaffId;