import styles from './ExperienceSection.module.css'

interface ExperienceArea {
  readonly id: string
  readonly title: string
  readonly description: string
}

interface ExperienceContent {
  readonly headline: string
  readonly intro: string
  readonly areas: readonly ExperienceArea[]
  readonly ndaNote: string
}

const experienceContent: ExperienceContent = {
  headline: 'Doświadczenie, które wspiera złożone projekty',
  intro:
    'Praktyka projektowa obejmuje odpowiedzialność za dokumentację, koordynację oraz pracę zespołową w wymagającym środowisku projektowym.',
  areas: [
    {
      id: 'complex-projects',
      title: 'Złożone projekty budynkowe i infrastrukturalne',
      description:
        'Praca nad zakresami wymagającymi koordynacji rozwiązań elektrycznych z architekturą, konstrukcją i pozostałymi branżami.',
    },
    {
      id: 'team-leadership',
      title: 'Prowadzenie zespołu projektowego',
      description:
        'Organizacja pracy, kontrola jakości dokumentacji i komunikacja potrzebna do utrzymania spójnego rezultatu.',
    },
    {
      id: 'international-environment',
      title: 'Środowisko międzynarodowe',
      description:
        'Doświadczenie w pracy z wymaganiami, standardami dokumentacji i komunikacją właściwą dla zespołów międzynarodowych.',
    },
    {
      id: 'documentation-quality',
      title: 'Jakość dokumentacji',
      description:
        'Nacisk na czytelność, koordynację i poziom opracowania dopasowany do etapu projektu.',
    },
  ],
  ndaNote:
    'Szczegóły wybranych realizacji pozostają poufne. Zakres doświadczenia prezentowany jest bez nazw inwestycji i danych umożliwiających ich identyfikację.',
}

export function ExperienceSection() {
  return (
    <section className={styles.experience} aria-labelledby="experience-title">
      <div className={`container ${styles.layout}`}>
        <header className={styles.sectionHeader}>
          <h2 id="experience-title">{experienceContent.headline}</h2>
          <p>{experienceContent.intro}</p>
        </header>

        <div className={styles.evidence}>
          <ul className={styles.matrix}>
            {experienceContent.areas.map((area) => (
              <li key={area.id} className={styles.area}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </li>
            ))}
          </ul>

          <p className={styles.ndaNote}>{experienceContent.ndaNote}</p>
        </div>
      </div>
    </section>
  )
}
