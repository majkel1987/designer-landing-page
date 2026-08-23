import { Header } from '../components/Header/Header'
import { HeroSection } from '../components/Hero/HeroSection'
import { ProofBar } from '../components/ProofBar/ProofBar'
import { ServicesSection } from '../components/Services/ServicesSection'

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
      </main>
    </>
  )
}
