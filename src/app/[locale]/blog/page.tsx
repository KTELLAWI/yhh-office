import { CardBlog } from "@/components/cards";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { fetchBLogs } from "../../actions/blog";

export default async function Page() {
  const t = useTranslations("blog");
  const allBlogs = await fetchBLogs();
  return (
    <>
      <NavBar />
      <main>
        <section className="bg-[#f7f8fa] w-full">
          <div className="px-5 pb-[43px] md:pb-0 md:px-10">
            <div className="w-full max-w-7xl mx-auto">
              <div className="py-16 sm:my-0 sm:py-32 md:py-48">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="flex items-start flex-col max-w-[32rem]">
                    <div className="flex items-center gap-2 mb-[12px]">
                      <div className="triangule-icon2 border-transparent border-t-[#47bdff] border-s-[#47bdff]"></div>
                      <div className="semi-circle-bottom-icon bg-[#f25260]"></div>
                    </div>
                    <h2 className="animate__animated animate__slower animate__fadeInUp mb-8 text-[1.2rem] md:text-5xl leading-[1.2] font-bold text-black md:text-[#28264d] min-[1920px]:text-black">
                      {t("title")}
                    </h2>
                  </div>
                </div>

                <div className="mt-16 md:mt-32">
                  <div className="grid gap-12 grid-cols-1 md:gap-16 md:grid-cols-2 xl:gap-y-4 relative">
                    {allBlogs?.length > 0
                      ? allBlogs?.map((item: any, index: number) => (
                          <CardBlog
                            key={item?.id}
                            id={item?.id}
                            thumbnail={
                              item?.attributes?.cover_image?.data?.attributes
                                ?.formats?.thumbnail?.url
                            }
                            withMargin={(index + 1) % 2 == 0 ? false : true}
                            title={item?.attributes?.title}
                            shortDescription={
                              item?.attributes?.short_description
                            }
                            createdAt={item?.attributes?.publishedAt}
                          />
                        ))
                      : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
