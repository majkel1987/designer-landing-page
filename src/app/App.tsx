import { Header } from '../components/Header/Header'
import { HeroSection } from '../components/Hero/HeroSection'
import { ProcessSection } from '../components/Process/ProcessSection'
import { ProofBar } from '../components/ProofBar/ProofBar'
import { ServicesSection } from '../components/Services/ServicesSection'
import { AudienceSection } from '../components/Audience/AudienceSection'
import { AboutSection } from '../components/About/AboutSection'
import { ExperienceSection } from '../components/Experience/ExperienceSection'
import { FaqSection } from '../components/FAQ/FaqSection'
import { ContactSection } from '../components/Contact/ContactSection'
import { Footer } from '../components/Footer/Footer'

export function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Przejdź do treści
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ProofBar />
        <ServicesSection />
        <ProcessSection />
        <AudienceSection />
        <ExperienceSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
