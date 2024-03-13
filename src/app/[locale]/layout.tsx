import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "animate.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const dubai = localFont({
  src: [
    {
      path: "../../../public/webfonts/DubaiW23-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/webfonts/DubaiW23-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/webfonts/DubaiW23-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/webfonts/DubaiW23-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "YH&H Products Design Services",
    template: "YH&H Products Design Services - %s",
  },
  description:
    "YH&H is a Dubai based digital studio driven by the creation of unique, distinctive and memorable solutions and experiences.",
  openGraph: {
    title: "YH&H Products Design Services",
    description:
      "YH&H is a Dubai based digital studio driven by the creation of unique, distinctive and memorable solutions and experiences.",
    images:
      "https://assets-global.website-files.com/63d8e8c0f344697ed58c6206/64a3f3b69f12f8a396269b89_banner.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

// function generateStaticParams() {
//   return [{ locale: 'en' }, { locale: 'ar' }];
// }

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  let messages;

  try {
    messages = (await import(`../../lang/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={locale === "ar" ? dubai.className : plusJakarta.className}
      >
        <NextIntlClientProvider
          timeZone="Asia/Dubai"
          locale={locale}
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-9KFG29TLTN" />
    </html>
  );
}
