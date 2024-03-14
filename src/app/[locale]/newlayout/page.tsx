"use client";

import { useState } from "react";
import Image from "next/image";
import { getCalApi } from "@calcom/embed-react";

import { cn } from "@/lib/utils";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Package, packageTitleBGs } from "./_components/package";
import { Faqs } from "./_components/faqs";
import { ServicesButton } from "./_components/button";

import sheraImg from "../../../../public/sheraa.png";
import WebsitesService from "./_components/WebsitesService";
import SheraaService from "./_components/SheraaService";
import ExclusiveConsultationService from "./_components/ExclusiveConsultationService";

const packages = [
  // {
  //   name: "Bronze Package",
  //   id: "bronze",
  //   href: "#",
  //   price: " 7000",
  //   slogan: "Your Gateway to the Digital World",
  //   description: "Your Gateway to the Digital World",
  //   detailsOfCost: "AED 350/month starting from the second year",
  //   features: [
  //     ".ae Domain Hosting",
  //     "Email Setup",
  //     "Website Hosting",
  //     "Professionally Designed Pages",
  //     "Hero Page",
  //     "Product Page",
  //     "About Page",
  //     "Contact Us Page",
  //     "Template Selection",
  //     "Efficient Turnaround Time"
  //   ],
  // },
  // {
  //   name: "Silver Package",
  //   id: "silver",
  //   href: "#",
  //   price: " 9000",
  //   slogan: "Elevate Your Online Presence",
  //   detailsOfCost: "AED 450/month starting from the second year",
  //   description: "Elevate Your Online Presence",
  //   popoular: true,
  //   features: [
  //     "All of the mentioned in the Bronze Package",
  //     "Pro Templates Access",
  //     "Enhanced Contact Us Page",
  //     "Efficient Turnaround Time"
  //   ],
  // },
  {
    name: "Gold Package",
    variant: 'Gold' as keyof typeof packageTitleBGs,
    id: "gold",
    href: "#",
    price: "AED 12000",
    slogan: "Maximizing Your Global Reach",
    detailsOfCost: "AED 600/month starting from the second year",
    description: "Maximizing Your Global Reach",
    features: [
      "All of the mentioned in the Silver Package",
      "Up to 5 email users",
      "Content Management System Support for 4 Pages",
      "Secondary Language Option",
      "Efficient Turnaround Time"
    ],
  },
  {
    name: "Platinum Package",
    variant: "Platinum" as keyof typeof packageTitleBGs,
    id: "platinum",
    href: "#",
    price: "AED 16000",
    slogan: "The Pinnacle of Web Excellence",
    detailsOfCost: "AED 800/month starting from the second year",
    description: "The Pinnacle of Web Excellence",
    features: [
      "All of the mentioned in the Gold Package",
      "Up to 8 email users",
      "Extended CMS Support",
      "Multilingual Capability",
      "Integration of Meeting Management Tools",
      "Prioritized turnaround time"
    ],
  },
  {
    name: "Diamond Package",
    id: "diamond",
    variant: "Diamond" as keyof typeof packageTitleBGs,
    href: "#",
    price: "AED 23000",
    slogan: "Seamless Transactions Suite",
    detailsOfCost: "AED 1000/month starting from the second year",
    description: "Seamless Transactions Suite",
    features: [
      "All of the mentioned in the Platinum Package",
      "Simplified Payment Gateway",
      "Prioritized turnaround time"
    ],
  },
];


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
          <WebsitesService packages={packages} />
          <SheraaService/>
          <ExclusiveConsultationService/>
        </div>
      </main>

      <Footer />
    </>
  );
}
