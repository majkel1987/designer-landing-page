import styles from './ServicesSection.module.css'

interface ServiceGroup {
  readonly id: `S-0${1 | 2 | 3}`
  readonly title: string
  readonly description: string
  readonly items: readonly string[]
}

const serviceGroups: readonly ServiceGroup[] = [
  {
    id: 'S-01',
    title: 'Projekty i dokumentacja',
    description:
      'Dokumentacja branży elektrycznej przygotowana dla uzgodnionego etapu i sposobu wykorzystania.',
    items: [
      'Projekty instalacji elektrycznych nn',
      'Projekty techniczne',
      'Projekty wykonawcze',
      'Dokumentacja zamienna',
      'Dokumentacja warsztatowa',
      'Dokumentacja powykonawcza',
    ],
  },
  {
    id: 'S-02',
    title: 'Opracowania techniczne',
    description:
      'Obliczenia, dobory i schematy potrzebne do rozwinięcia lub zamknięcia konkretnego zakresu.',
    items: [
      'Bilanse mocy',
      'Dobór kabli',
      'Dobór zabezpieczeń',
      'Schematy rozdzielnic',
      'Projekty oświetlenia',
      'Projekty oświetlenia awaryjnego',
      'Uziemienie',
      'Instalacja odgromowa LPS',
      'Zasilanie HVAC',
      'Zasilanie technologii',
      'Trasy kablowe',
    ],
  },
  {
    id: 'S-03',
    title: 'Wsparcie dla biur projektowych',
    description:
      'Elastyczne wsparcie B2B włączone w istniejący proces projektowy i standard dokumentacji zespołu.',
    items: [
      'Wydzielone zakresy większych projektów',
      'Okresowe wsparcie projektowe',
      'Współpraca B2B',
      'Koordynacja elektryczna',
      'Wsparcie przy przeciążeniu zespołu',
      'Wsparcie przy dokumentacji technicznej',
    ],
  },
]

export function ServicesSection() {
  return (
    <section
      id="uslugi"
      className={styles.services}
      aria-labelledby="services-title"
    >
      <div className="container">
        <header className={styles.sectionHeader}>
          <h2 id="services-title">Zakres usług</h2>
          <p>
            Możliwa współpraca przy małych, średnich oraz wydzielonych zakresach
            większych projektów.
          </p>
        </header>

        <div className={styles.groups}>
          {serviceGroups.map((group) => {
            const titleId = `service-${group.id.toLowerCase()}-title`

            return (
              <article
                key={group.id}
                className={styles.group}
                aria-labelledby={titleId}
              >
                <span className={styles.code}>{group.id}</span>
                <h3 id={titleId} className={styles.groupTitle}>
                  {group.title}
                </h3>
                <p className={styles.description}>{group.description}</p>
                <ul className={styles.scopeList}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
