import HeroSection from '../components/sections/HeroSection'
import AboutUsSection from '../components/sections/AboutSection'
import CertificationSection from '../components/sections/CertificationSection'
import ProductsSection from '../components/sections/ProductsSection'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'
import ClientsSection from '../components/sections/ClientsSection'
import ReviewsSection from '../components/sections/ReviewsSection'
import ContactSection from '../components/sections/ContactSection'
import TrustStrip from '../components/shared/TrustStrip'

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <CertificationSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <ClientsSection />
      <ReviewsSection />
      <ContactSection />
    </>
  )
}

export default HomePage
