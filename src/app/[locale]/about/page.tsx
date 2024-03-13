import type { Metadata } from 'next'
import Header from '@/components/sections/aboutUs/Header'
import Benefits from '@/components/sections/aboutUs/Benefits'
import Company from '@/components/sections/aboutUs/Company'
import Process from '@/components/sections/aboutUs/Process'
import Mission from '@/components/sections/aboutUs/Mission'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About',
}

export default function Page() {
  return (
    <main className='bg-[#101010] sm:bg-white mt-[-2px] sm:mt-0'>
      <NavBar />
      <Header />
      <Benefits />
      <Company />
      <Process />
      <Mission />
      <Footer />
    </main>
  )
}
