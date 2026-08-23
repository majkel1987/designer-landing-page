import styles from './ProcessSection.module.css'

interface ProcessStep {
  readonly id: '01' | '02' | '03' | '04'
  readonly title: string
  readonly description: string
}

const processSteps: readonly ProcessStep[] = [
  {
    id: '01',
    title: 'Zakres i brief',
    description:
      'Ustalamy potrzeby, odpowiedzialność, termin oraz oczekiwany format i poziom szczegółowości opracowania.',
  },
  {
    id: '02',
    title: 'Analiza materiałów wejściowych',
    description:
      'Weryfikuję rzuty, wytyczne, modele, dane branżowe i wymagania inwestora potrzebne do rozpoczęcia prac.',
  },
  {
    id: '03',
    title: 'Opracowanie dokumentacji',
    description:
      'Przygotowuję uzgodniony projekt, obliczenia lub wydzielony zakres wraz z bieżącą koordynacją.',
  },
  {
    id: '04',
    title: 'Przekazanie i wsparcie',
    description:
      'Przekazuję dokumentację, odpowiadam na komentarze i wprowadzam uzgodnione korekty w ramach zakresu.',
  },
]

export function ProcessSection() {
  return (
    <section
      id="wspolpraca"
      className={styles.process}
      aria-labelledby="process-title"
    >
      <div className="container">
        <header className={styles.sectionHeader}>
          <h2 id="process-title">Jak wygląda współpraca</h2>
          <p>
            Cztery etapy porządkują zakres, materiały wejściowe, opracowanie i
            przekazanie dokumentacji.
          </p>
        </header>

        <div className={styles.timeline}>
          <span className={styles.axis} aria-hidden="true" />
          <ol className={styles.steps}>
            {processSteps.map((step) => (
              <li key={step.id} className={styles.step}>
                <span className={styles.node} aria-hidden="true" />
                <span className={styles.number}>{step.id}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
