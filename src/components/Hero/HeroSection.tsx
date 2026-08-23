import { ButtonLink } from '../shared/ButtonLink'
import { HeroTechnicalDiagram } from './HeroTechnicalDiagram'
import styles from './HeroSection.module.css'

interface HeroContent {
  readonly eyebrow: string
  readonly headline: readonly [string, string]
  readonly supportingText: string
  readonly primaryCta: { readonly label: string; readonly href: `#${string}` }
  readonly secondaryCta: { readonly label: string; readonly href: `#${string}` }
}

const heroContent: HeroContent = {
  eyebrow: 'MICHAŁ SARNACKI / ELECTRICAL DESIGN ENGINEER',
  headline: [
    'Electrical engineering',
    'that keeps projects moving.',
  ],
  supportingText:
    'Projektowanie instalacji elektrycznych i zewnętrzne wsparcie dla biur projektowych, architektów i wykonawców.',
  primaryCta: { label: 'Omów projekt', href: '#kontakt' },
  secondaryCta: { label: 'Zobacz zakres usług', href: '#uslugi' },
}

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{heroContent.eyebrow}</p>
          <h1 id="hero-heading" className={styles.headline}>
            <span>{heroContent.headline[0]}</span>{' '}
            <span>{heroContent.headline[1]}</span>
          </h1>
          <p className={styles.supporting}>{heroContent.supportingText}</p>
          <div className={styles.actions}>
            <ButtonLink href={heroContent.primaryCta.href}>
              {heroContent.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={heroContent.secondaryCta.href} variant="secondary">
              {heroContent.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div className={styles.visual}>
          <HeroTechnicalDiagram />
        </div>
      </div>
    </section>
  )
}
