import Image from 'next/image'
import Header from '@/components/Header'
import HomeCarousel from '@/components/HomeCarousel'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header/>
      Testing page.tsx
      <HomeCarousel/>
      <Footer/>
    </main>
  )
}
