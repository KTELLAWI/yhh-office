"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars2Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, Link } from "@/navigation";
import { useParams } from "next/navigation";

export default function NavBar() {
  const t = useTranslations("NavBar");
  //@ts-ignore
  const lang: "ar" | "en" = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChange = (lang: string) => {
    //@ts-ignore
    router.push({ pathname, params }, { locale: lang });
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full bg-[#101010] py-8 relative z-[1000] md:py-0 md:pt-[2.2rem]">
      <div className="px-5 pb-[43px] md:pb-0 md:px-10 overflow-visible">
        <div className="w-full max-w-7xl mx-auto">
          <nav
            className="mb-[-72px] w-full right-0 left-0 flex items-center justify-between md:mb-0"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link
                href="/"
                locale={lang}
                className="-m-1.5 p-1.5 z-[2] relative"
              >
                <span className="sr-only">YHH</span>
                <img
                  src="/642ee59bfc20d168af3405e6_Yhh_Logo_RW.png"
                  alt=""
                  width="125"
                  height="125"
                  sizes="125px"
                  className="logo"
                />
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 z-[2] relative inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>

                <XMarkIcon
                  className={`h-12 w-12 cursor-pointer ${
                    !mobileMenuOpen ? "hidden" : ""
                  }`}
                  aria-hidden="true"
                />
                <Bars2Icon
                  className={`h-12 w-12 cursor-pointer ${
                    mobileMenuOpen ? "hidden" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-8">
              <Link
                href="/"
                locale={lang}
                className="-mx-3 block rounded-lg px-3 py-2 text-[1.1rem] leading-7 text-white hover:text-[#9bdaf2]"
              >
                {t("home")}
              </Link>
              <Link
                href="/about"
                locale={lang}
                className="-mx-3 block rounded-lg px-3 py-2 text-[1.1rem] leading-7 text-white hover:text-[#9bdaf2]"
              >
                {t("about")}
              </Link>
              <Link
                href="/portfolio"
                locale={lang}
                className="-mx-3 block rounded-lg px-3 py-2 text-[1.1rem] leading-7 text-white hover:text-[#9bdaf2]"
              >
                {t("portfolio")}
              </Link>
              {/* <Link href="/blog" locale={lang} className="-mx-3 block rounded-lg px-3 py-2 text-[1.1rem] leading-7 text-white hover:text-[#9bdaf2]" >
                {t("blog")}
              </Link> */}
              <Link
                href="/services"
                locale={lang}
                className="-mx-3 block rounded-lg px-3 py-2 text-[1.1rem] leading-7 text-white hover:text-[#9bdaf2]"
              >
                {t("services")}
              </Link>
              
              <Link
                href="/services"
                locale={lang}
                className="-mx-3 block rounded-lg px-3 py-2 text-[1.1rem] leading-7 text-white hover:text-[#9bdaf2]"
              >
                {("services2")}
              </Link>
              
              <Link
                href="/services"
                locale={lang}
                className="-mx-3 block rounded-lg px-3 py-2 text-[1.1rem] leading-7 text-white hover:text-[#9bdaf2]"
              >
                {("services3")}
              </Link>
              {/* <Link href="/privacy-policy" locale={lang} className="-mx-3 block rounded-lg px-3 py-2 text-[1.1rem] leading-7 text-white hover:text-[#9bdaf2]" >
                {t("privacy-policy")}
              </Link> */}
              <Link
                href="/contact"
                locale={lang}
                className="-mx-3 block rounded-lg px-3 py-2 text-[1.1rem] leading-7 text-white hover:text-[#9bdaf2]"
              >
                {t("contact")}
              </Link>

              {/* <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 -mx-3 rounded-lg px-3 py-2 text-[1.1rem] leading-7 text-white hover:text-[#9bdaf2]">
                  {t("lang.title")}
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-0 top-full z-10 mt-3 max-w-32 overflow-hidden rounded-sm bg-[#101010] shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-1">
                      <div className="group relative rounded-xs py-2 px-4 text-sm leading-6 ">
                        <div className="flex-auto">
                          <button
                            onClick={() => handleChange("en")}
                            className="flex gap-1 items-center justify-start text-[.9rem] leading-7 text-white hover:text-[#9bdaf2]"
                          >
                            <img src="/uk.png" className="w-6 h-4" alt="" />
                            {t("lang.en")}
                          </button>
                        </div>
                      </div>

                      <div className="group relative rounded-xs py-2 px-4 text-sm leading-6 ">
                        <div className="flex-auto">
                          <button
                            onClick={() => handleChange("ar")}
                            className="flex gap-1 items-center justify-start text-[.9rem] leading-7 text-white hover:text-[#9bdaf2]"
                          >
                            <img src="/uae.png" className="w-6 h-4" alt="" />
                            {t("lang.ar")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover> */}
            </Popover.Group>
          </nav>
        </div>
      </div>

      <div
        className="md:hidden z-[1] absolute overflow-hidden top-0 left-0 right-0 bottom-0 h-[100vh] w-auto duration-1000"
        style={{ display: mobileMenuOpen ? "block" : "none" }}
      >
        <nav className="w-[100vw] z-[1] top-0 right-auto pt-32 px-6 bg-[#28264d] fixed bottom-0 left-0 overflow-auto sm:py-10">
          <div className="space-y-2 py-6">
            <Link
              href="/"
              locale={lang}
              onClick={() => setMobileMenuOpen(false)}
              className="-mx-3 block rounded-lg px-4 py-2 text-2xl leading-7 text-white hover:text-[#9bdaf2]"
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              locale={lang}
              onClick={() => setMobileMenuOpen(false)}
              className="-mx-3 block rounded-lg px-4 py-2 text-2xl leading-7 text-white hover:text-[#9bdaf2]"
            >
              {t("about")}
            </Link>
            <Link
              href="/portfolio"
              locale={lang}
              onClick={() => setMobileMenuOpen(false)}
              className="-mx-3 block rounded-lg px-4 py-2 text-2xl leading-7 text-white hover:text-[#9bdaf2]"
            >
              {t("portfolio")}
            </Link>
            <Link
              href="/services"
              locale={lang}
              onClick={() => setMobileMenuOpen(false)}
              className="-mx-3 block rounded-lg px-4 py-2 text-2xl leading-7 text-white hover:text-[#9bdaf2]"
            >
              {t("services")}
            </Link>
            {/* <Link
              href="/blog"
              locale={lang}
              onClick={() => setMobileMenuOpen(false)}
              className="-mx-3 block rounded-lg px-4 py-2 text-2xl leading-7 text-white hover:text-[#9bdaf2]"
            >
              {t("blog")}
            </Link>
            <Link
              href="/privacy-policy"
              locale={lang}
              onClick={() => setMobileMenuOpen(false)}
              className="-mx-3 block rounded-lg px-4 py-2 text-2xl leading-7 text-white hover:text-[#9bdaf2]"
            >
              {t("privacy-policy")}
            </Link> */}
            <Link
              href="/contact"
              locale={lang}
              onClick={() => setMobileMenuOpen(false)}
              className="-mx-3 block rounded-lg px-4 py-2 text-2xl leading-7 text-white hover:text-[#9bdaf2]"
            >
              {t("contact")}
            </Link>
            {/* <Disclosure>
              <Disclosure.Button className="w-full flex items-center justify-between -mx-3 rounded-lg px-4 py-2 text-2xl leading-7 text-white hover:text-[#9bdaf2]">
                {t("lang.title")}
                <ChevronDownIcon
                  className="h-7 w-7 flex-none text-gray-100"
                  aria-hidden="true"
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                <div className="p-1">
                  <div className="group relative rounded-xs py-2 px-4 text-sm leading-6 ">
                    <div className="flex-auto">
                      <button
                        onClick={() => handleChange("en")}
                        className="flex gap-1 items-center justify-start  text-[1.1rem] leading-7 text-white hover:text-[#9bdaf2]"
                      >
                        <img src="/uk.png" className="w-6 h-4" alt="" />
                        {t("lang.en")}
                      </button>
                    </div>
                  </div>

                  <div className="group relative rounded-xs py-2 px-4 text-sm leading-6 ">
                    <div className="flex-auto">
                      <button
                        onClick={() => handleChange("ar")}
                        className="flex gap-1 items-center justify-start  text-[1.1rem] leading-7 text-white hover:text-[#9bdaf2]"
                      >
                        <img src="/uae.png" className="w-6 h-4" alt="" />
                        {t("lang.ar")}
                      </button>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </Disclosure> */}
          </div>
        </nav>
      </div>
    </div>
  );
}
