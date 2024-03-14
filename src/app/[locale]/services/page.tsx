"use client";

import { useState } from "react";
import Image from "next/image";
import { getCalApi } from "@calcom/embed-react";

import { cn } from "@/lib/utils";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Package } from "./_components/package";
import { Faqs } from "./_components/faqs";
import { ServicesButton } from "./_components/button";

import sheraImg from "../../../../public/sheraa.png";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("website-creation");

  return (
    <>
      <NavBar />

      <main className="bg-[#101010]">
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-20 py-12 md:py-16">
          <h1 className="animate__animated animate__slow animate__fadeInUp inline-block py-0.5 px-2 text-[#E0E0E0] bg-gradient-to-b from-white/0 to-white/[0.12] text-sm border-0 mb-4 rounded">
            Services
          </h1>

          <p className="animate__animated animate__slow animate__fadeInUp text-[#E0E0E0] text-[33px] leading-[38px] font-bold">
            Find the right Service for your needs
          </p>

          <div className="animate__animated animate__slower animate__fadeIn delay-500 text-white mt-6 md:mt-10">
            <Tabs
              defaultValue="website-creation"
              onValueChange={setActiveTab}
              className="w-full ps-0"
            >
              <TabsList className="relative grid grid-cols-1 mb-4 md:mb-8 w-full lg:grid-cols-2">
                <TabsTrigger
                  className="flex flex-col items-start ps-0 text-[#898989] border-b-4 border-transparent data-[state=active]:border-[#E12120] mb-4 lg:mb-0 data-[state=active]:text-white lg:!border-transparent pb-2 lg:pb-4"
                  value="website-creation"
                >
                  <span className="font-semibold text-sm mb-2 md:text-lg xl:text-2xl">
                    Website creation service
                  </span>
                  <span className="font-bold text-xl md:text-2xl xl:text-[32px] ">
                    Design, Build, and host with ease
                  </span>
                </TabsTrigger>

                <TabsTrigger
                  className="flex flex-col items-start ps-0 text-[#898989] border-b-4 border-transparent data-[state=active]:border-[#E12120] data-[state=active]:text-white md:ms-3 lg:!border-transparent pb-2 lg:pb-4"
                  value="consultation"
                >
                  <span className="font-semibold text-sm mb-2 md:text-lg xl:text-2xl">
                    Consultation services
                  </span>
                  <span className="font-bold text-xl md:text-2xl xl:text-[32px]">
                    Create, Design, Launch, Impress
                  </span>
                </TabsTrigger>

                <div
                  className={cn(
                    "hidden absolute left-0 bottom-0 w-1/2 bg-[#E12120] h-1 transition-transform lg:block",
                    activeTab !== "website-creation" && "translate-x-full"
                  )}
                  aria-hidden="true"
                />
              </TabsList>

              <TabsContent value="website-creation">
                <p className="text-[#91939D] text-sm mb-8 max-w-lg md:text-base xl:max-w-xl">
                  This service is aimed to develop simple website that don’t
                  hold any business automation logic in order to help new
                  established business grow.
                </p>

                <div className=" mb-16 flex flex-col md:flex-wrap md:justify-center items-center [&>div]:mb-8 md:items-stretch md:flex-row md:space-x-4">
                  <Package>
                    <Package.Title variant="Bronze">
                      Bronze Package
                    </Package.Title>

                    <Package.Text className="mb-4">
                      Your Gateway to the Digital World
                    </Package.Text>

                    <Package.Price>AED 7000</Package.Price>

                    <Package.Text className="text-xs leading-[22px] max-w-52">
                      AED 350/month starting from the second year
                    </Package.Text>

                    <Package.FeatureList>
                      <Package.FeatureItem
                        title=".ae Domain Hosting"
                        desc="Secure a distinctive .ae domain name that reflects your brand's identity and local presence."
                      />

                      <Package.FeatureItem
                        title="Email Setup"
                        desc="Gain professional credibility with email hosting up to 3 users through either Google or Microsoft, ensuring seamless communication under your brand's domain."
                      />

                      <Package.FeatureItem
                        title="Website Hosting"
                        desc="Enjoy reliable hosting for your website for the first year, guaranteeing that your site remains accessible to your audience around the clock."
                      />

                      <Package.FeatureItem
                        title="Professionally Designed Pages"
                        desc="Our package includes the creation of three essential pages"
                      />

                      <li>
                        <ul className="[&>li]:border-0 m-0 p-0 ps-4">
                          <Package.FeatureItem
                            className="pt-0"
                            title="Hero Page"
                            desc="A striking landing page that captures your visitors' attention and conveys your brand's value proposition."
                          />
                          <Package.FeatureItem
                            title="Product Page"
                            desc="A page to describe your business and what you do."
                          />
                          <Package.FeatureItem
                            title="About Page"
                            desc="Tell your story and share your mission, vision, and the values that set you apart."
                          />
                          <Package.FeatureItem
                            className="mb-0"
                            title="Contact Us Page"
                            desc="An easy way for visitors to reach out, enhancing your accessibility and customer service."
                          />
                        </ul>
                      </li>

                      <Package.FeatureItem
                        title="Template Selection"
                        desc="Choose from a range of regular templates that have been carefully designed for various industries, ensuring your website not only looks professional but also resonates with your target audience."
                      />

                      <Package.FeatureItem
                        title="Efficient Turnaround Time"
                        desc="We guarantee that your website will be ready to launch within 15 working days, allowing you to swiftly make your mark online."
                      />
                    </Package.FeatureList>

                    <Package.CTA calLink="team/yhh-team/bronze-package" />
                  </Package>

                  <Package>
                    <Package.Title variant="Silver">
                      Sliver Package
                    </Package.Title>

                    <Package.Text className="mb-4">
                      Elevate Your Online Presence
                    </Package.Text>

                    <Package.Price>AED 9000</Package.Price>

                    <Package.Text className="text-xs leading-[22px] max-w-52">
                      AED 450/month starting from the second year
                    </Package.Text>

                    <Package.FeatureList>
                      <Package.FeatureItem title="All of the mentioned in the Bronze Package" />

                      <Package.FeatureItem
                        title="Pro Templates Access"
                        desc="Unlock a wider array of premium templates. Our Pro templates are designed with advanced aesthetics and functionality in mind, offering you the opportunity to distinguish your website with a unique and sophisticated design that stands out from the competition."
                      />

                      <Package.FeatureItem
                        title="Enhanced Contact Us Page"
                        desc="We integrate a custom contact form that directly routes inquiries to your designated email address, facilitating smoother, more efficient communication with your visitors and potential clients."
                      />
                      <Package.FeatureItem
                        title="Efficient Turnaround Time"
                        desc="We guarantee that your website will be ready to launch within 21 working days, allowing you to swiftly make your mark online."
                      />
                    </Package.FeatureList>

                    <Package.CTA calLink="team/yhh-team/silver-package" />
                  </Package>

                  <Package>
                    <Package.Title variant="Gold">Gold Package</Package.Title>

                    <Package.Text className="mb-4">
                      Maximizing Your Global Reach
                    </Package.Text>

                    <Package.Price>AED 12,000</Package.Price>

                    <Package.Text className="text-xs leading-[22px] max-w-52">
                      AED 600/month starting from the second year
                    </Package.Text>

                    <Package.FeatureList>
                      <Package.FeatureItem title="All of the mentioned in the Silver Package" />

                      <Package.FeatureItem
                        title="Up to 5 email users"
                        desc="Expand your business by adding 2 more seats to your email users."
                      />

                      <Package.FeatureItem
                        title="Content Management System Support for 4 Pages"
                        desc="Empower your team with the ability to update content on the fly with our Content Management System support for up to four pages."
                      />

                      <Package.FeatureItem
                        title="Secondary Language Option"
                        desc="Break language barriers and expand your reach with a secondary language option for your website"
                      />

                      <Package.FeatureItem
                        title="Efficient Turnaround Time"
                        desc="We guarantee that your website will be ready to launch within 28 working days, allowing you to swiftly make your mark online.
"
                      />
                    </Package.FeatureList>

                    <Package.CTA calLink="team/yhh-team/gold-package" />
                  </Package>

                  <Package highlight>
                    <Package.Title variant="Platinum">
                      Platinum Package
                    </Package.Title>

                    <Package.Text className="mb-4">
                      The Pinnacle of Web Excellence
                    </Package.Text>

                    <Package.Price>AED 16,000</Package.Price>

                    <Package.Text className="text-xs leading-[22px] max-w-52">
                      AED 800/month starting from the second year
                    </Package.Text>

                    <Package.FeatureList className="[&>li]:border-white/50">
                      <Package.FeatureItem title="All of the mentioned in the Gold Package" />

                      <Package.FeatureItem
                        title="Up to 8 email users"
                        desc="Expand your business by adding 3 more seats to your email users"
                      />

                      <Package.FeatureItem
                        title="Extended CMS Support"
                        desc="Manage and update content with ease across 8 CMS pages, giving you the flexibility to keep your site dynamic, engaging, and always up-to-date. This feature empowers your team to maintain an active online presence, ensuring that your content strategy adapts in real-time to your audience's needs and interests."
                      />

                      <Package.FeatureItem
                        title="Multilingual Capability"
                        desc="Extend your reach globally with support for up to 4 languages. This unparalleled feature is designed to cater to a diverse, international audience, breaking language barriers and opening your brand to new markets with precision and cultural sensitivity."
                      />

                      <Package.FeatureItem
                        title="Integration of Meeting Management Tools"
                        desc="ts with precision and cultural sensitivity. Integration of Meeting Management Tools: Elevate your operational efficiency with the integration of advanced meeting management tools. This feature allows visitors to schedule appointments or meetings directly through your website, streamlining communication and enhancing the user experience."
                      />

                      <Package.FeatureItem
                        title="Prioritized turnaround time"
                        desc="We guarantee that your website will be ready to launch within 35 working days, allowing you to swiftly make your mark online."
                      />
                    </Package.FeatureList>

                    <Package.CTA highlight calLink="team/yhh-team/platinum-package" />
                  </Package>

                  <Package>
                    <Package.Title variant="Diamond">
                      Diamond Package
                    </Package.Title>

                    <Package.Text className="mb-4">
                      Seamless Transactions Suite
                    </Package.Text>

                    <Package.Price>AED 23,000</Package.Price>

                    <Package.Text className="text-xs leading-[22px] max-w-52">
                      AED 1000/month starting from the second year
                    </Package.Text>

                    <Package.FeatureList>
                      <Package.FeatureItem
                        title="All of the mentioned in the Platinum Package"
                        desc=""
                      />

                      <Package.FeatureItem
                        title="Simplified Payment Gateway"
                        desc="Offer your clients a hassle-free payment solution for your services directly through your website."
                      />

                      <Package.FeatureItem
                        title="Prioritized turnaround time"
                        desc="We guarantee that your website will be ready to launch within 40 working days, allowing you to swiftly make your mark online."
                      />
                    </Package.FeatureList>

                    <Package.CTA calLink="team/yhh-team/diamond-package" />
                  </Package>
                </div>

                <Faqs />
              </TabsContent>

              <TabsContent value="consultation">
                <p className="text-[#91939D] text-sm mb-8 max-w-lg md:text-base xl:max-w-xl">
                  This service is aimed for people that want to seek
                  consultation services from us.
                </p>

                <div className="mb-16 lg:flex">
                  <div className="px-6 pt-8 pb-6 bg-[#171717] rounded-[6px] shadow-[0_8px_40px_-2px_rgba(6,12,59,0.08)] lg:basis-2/5 mb-8 lg:mb-0 lg:me-4">
                    <Image src={sheraImg} alt="sheraa logo" />

                    <h3 className="my-6 font-semibold text-2xl">
                      Free Sheraa exclusive consultation{" "}
                    </h3>

                    <p className="text-sm mb-8">
                      The Free Sheraa Exclusive Consultation, hosted by the YH&H
                      team at Sheraa: Sharjah Entrepreneurship Center, offers a
                      focused 30-minute session every Thursday from 10 AM to 1
                      PM for entrepreneurs and business owners. This session
                      allows you to discuss your project and explore
                      technological avenues without the pressure of immediate
                      estimations or quotations. It&apos;s a perfect opportunity
                      to gain expert feedback and strategize for your
                      venture&apos;s growth in a supportive environment. Take
                      advantage of this chance to refine your ideas and push
                      your project forward with professional insights.
                    </p>

                    <ServicesButton calLink="team/yhh-team/sheraa-consultation">
                      Book your free meeting
                    </ServicesButton>
                  </div>

                  <div className="px-6 pt-8 pb-6 bg-[#171717] rounded-[6px] shadow-[0_8px_40px_-2px_rgba(6,12,59,0.08)] lg:basis-3/5 lg:flex lg:flex-col lg:items-start">
                    <h3 className="inline-block py-0.5 px-2 text-[#E0E0E0] bg-gradient-to-b from-white/0 to-white/[0.12] text-sm border-0 mb-4 rounded">
                      Exclusive Consultation Package
                    </h3>

                    <p className="text-sm mb-4">
                      Our Exclusive Tier Consultation Package is tailored for
                      entrepreneurs and business owners seeking in-depth
                      analysis and actionable insights for their projects.
                      Priced at a flat rate of AED 12,000, this package offers
                      comprehensive support designed to propel your venture to
                      the next level.
                    </p>

                    <div className="mb-9">
                      <span className="block text-[32px] font-semibold leading-none mb-1">
                        AED 12,000
                      </span>
                      <span className="block text-xs">
                        that will be credited as a downpayment towards the total
                        cost of your project if you decided to continue with
                        YH&H{" "}
                      </span>
                    </div>

                    <Package.FeatureList className="md:grid md:grid-cols-2 md:gap-x-8">
                      <Package.FeatureItem
                        title="Up to 3 Hours of Dedicated Consultation"
                        desc="Spread across three sessions, each lasting 1 hour, our team will work closely with you to deeply understand your business, identify any existing gaps, and suggest strategic changes to enhance your operations."
                      />

                      <Package.FeatureItem
                        title="Business and System Analysis"
                        desc="Business and System Analysis"
                      />

                      <Package.FeatureItem
                        title="Persona Development and Responsibility Mapping"
                        desc="We will define and draft detailed personas involved in your project, outlining the responsibilities and expectations of each to ensure clarity and efficiency in role allocation."
                      />

                      <Package.FeatureItem
                        title="Comprehensive Report"
                        desc="A full, comprehensive report summarizing every aspect of the system, business analysis, persona responsibilities, and strategic recommendations to guide your next steps."
                      />

                      <Package.FeatureItem
                        title="Customized Quotation"
                        desc="Included in the package is a tailored quotation from YH&H for undertaking your project. This document will provide clear, actionable steps and pricing for moving forward with us."
                      />
                    </Package.FeatureList>

                    <div className="grow mt-8 w-full lg:flex lg:flex-col lg:justify-end">
                      <ServicesButton className="bg-[#E12120] text-white hover:bg-[#E12120]" calLink="team/yhh-team/exclusive-consultation-package" >
                        Book a meeting with our team
                      </ServicesButton>
                    </div>
                  </div>
                </div>

                <Faqs />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
