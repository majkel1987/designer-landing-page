import styles from './AboutSection.module.css'

interface AboutContent {
  readonly headline: string
  readonly paragraphs: readonly [string, string]
  readonly proofPoints: readonly string[]
}

const aboutContent: AboutContent = {
  headline: 'O mnie',
  paragraphs: [
    'Jestem projektantem instalacji elektrycznych z uprawnieniami do projektowania. Specjalizuję się w dokumentacji projektowej i technicznej dla obiektów budowlanych. Wspieram biura projektowe, architektów i wykonawców w opracowaniu rzetelnych, przemyślanych rozwiązań elektrycznych.',
    'W pracy łączę praktyczne podejście, odpowiedzialność za uzgodniony zakres, pracę względem uzgodnionych terminów, komunikację techniczną i koordynację z pozostałymi branżami.',
  ],
  proofPoints: [
    'Uprawnienia budowlane do projektowania',
    'Doświadczenie w projektach wielobranżowych',
    'Wsparcie B2B i podwykonawstwo projektowe',
  ],
}

export function AboutSection() {
  return (
    <section
      id="o-mnie"
      className={styles.about}
      aria-labelledby="about-title"
    >
      <div className={`container ${styles.layout}`}>
        <header className={styles.sectionHeader}>
          <h2 id="about-title">{aboutContent.headline}</h2>
        </header>

        <div className={styles.copy}>
          <p className={styles.mainCopy}>{aboutContent.paragraphs[0]}</p>
          <p className={styles.supportingCopy}>{aboutContent.paragraphs[1]}</p>
        </div>

        <ul className={styles.proofList}>
          {aboutContent.proofPoints.map((proofPoint) => (
            <li key={proofPoint}>{proofPoint}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
