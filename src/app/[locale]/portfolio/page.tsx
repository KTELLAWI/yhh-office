import type { Metadata } from 'next'
import PortfolioContent from '@/components/sections/portfolio/PortfolioContent'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PortfolioCard from './components/PortfolioCard'

export const metadata: Metadata = {
  title: 'Portfolio',
}

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        {/* <PortfolioContent /> */}
        <PortfolioCard/>
      </main >
      <Footer />
    </>
  )
}
