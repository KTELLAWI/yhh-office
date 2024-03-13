import type { Metadata } from 'next'
import React from 'react';
import Header from '@/components/Header';
import Services from '@/components/sections/Services';
import AboutUs from '@/components/sections/AboutUs';
import Process from '@/components/sections/Process';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import HireUs from '@/components/sections/HireUs';

import { useLocale } from 'next-intl';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "YH&H Products Design Services - Home",
};

type Props = {
  params: { locale: string };
};
export default function Home({ params: { locale } }: Props) {
  const lang = useLocale();

  return (
    <main>
      <NavBar />
      <Header />
      <Services />
      <AboutUs />
      <Process />
      <Projects />
      <Testimonials />
      <HireUs />
      <Footer />
    </main>
  )
}
