import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardHeader } from "@/components/ui/card";
import { fetchStaff } from "../../actions/staff";

export default async function Staff() {
  const data = await fetchStaff();
  return (
    <>
      <NavBar />
      <section className="bg-white">
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-20 py-12 md:py-16">
          <div>
            <h1 className="text-2xl md:text-5xl text-black text-center mb-8 md:mb-16">Staff<span className="font-bold"> Members</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              {data?.map((member: any) => (
                <Link href={`/en/staff/${member.id}`} key={member.id}>
                  <Card className="rounded-2xl overflow-hidden bg-[#fff] p-5">
                    <div className="relative">
                      <Image
                        src={`${process.env.DIRECTUS_URL}/assets/${member.face_image.filename_disk}?access_token=${process.env.DIRECTUS_ACCESS_TOKEN}`}
                        alt="Staff Image"
                        width={600}
                        height={600}
                        className="w-full h-full rounded-2xl"
                      />
                    </div>
                    <CardHeader className="pt-3 pb-0 md:pt-5 md:pb-0 px-0">
                      <div className="flex items-center justify-center gap-2">
                        <h1 className="text-[#E12120] text-xl md:text-2xl font-bold text-center pb-0">{member.translations.find((t: any) => t.languages_code === 'en').first_name}</h1>
                        <h1 className="text-black text-xl md:text-2xl font-semibold text-center pb-0">{member.translations.find((t: any) => t.languages_code === 'en').last_name}</h1>
                      </div>
                      <h3 className="text-[#484949] text-sm md:text-base font-medium text-center">{member.translations.find((t: any) => t.languages_code === 'en').title}</h3>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}