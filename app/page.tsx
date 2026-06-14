import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { TrustBrands } from '@/components/sections/trust-brands'
import { Products } from '@/components/sections/products'
import { Services } from '@/components/sections/services'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { About } from '@/components/sections/about'
import { FeaturedBanner } from '@/components/sections/featured-banner'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBrands />
        <Products />
        <Services />
        <WhyChooseUs />
        <About />
        <FeaturedBanner />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
