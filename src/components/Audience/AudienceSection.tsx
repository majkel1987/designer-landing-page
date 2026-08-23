import styles from './AudienceSection.module.css'

interface AudienceGroup {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly scopes: readonly string[]
  readonly emphasis?: 'primary'
}

const audienceGroups: readonly AudienceGroup[] = [
  {
    id: 'design-offices',
    title: 'Biura projektowe',
    description:
      'Wsparcie przy przeciążeniu zespołu, równoległych projektach oraz wydzielonych zakresach dokumentacji technicznej i wykonawczej.',
    scopes: [
      'wydzielone zakresy',
      'projekty techniczne',
      'projekty wykonawcze',
      'koordynacja elektryczna',
    ],
    emphasis: 'primary',
  },
  {
    id: 'architects',
    title: 'Architekci i pracownie',
    description:
      'Wsparcie branżowe dla projektu budowlanego i technicznego, z uwzględnieniem wymagań architektury oraz koordynacji międzybranżowej.',
    scopes: [
      'projekt budowlany',
      'projekt techniczny',
      'koordynacja branżowa',
    ],
  },
  {
    id: 'contractors',
    title: 'Wykonawcy i generalni wykonawcy',
    description:
      'Opracowania potrzebne na etapie realizacji, zmian lub uszczegółowienia przyjętych rozwiązań.',
    scopes: [
      'dokumentacja wykonawcza',
      'dokumentacja zamienna',
      'dokumentacja warsztatowa',
      'opracowania techniczne',
    ],
  },
]

export function AudienceSection() {
  return (
    <section className={styles.audience} aria-labelledby="audience-title">
      <div className="container">
        <header className={styles.sectionHeader}>
          <h2 id="audience-title">Z kim współpracuję</h2>
          <p>
            Wsparcie może uzupełnić zespół projektowy, zapewnić obsługę
            branżową lub domknąć dokumentację wykonawczą.
          </p>
        </header>

        <div className={styles.grid}>
          {audienceGroups.map((group) => {
            const titleId = `audience-${group.id}-title`

            return (
              <article
                key={group.id}
                className={`${styles.group} ${
                  group.emphasis === 'primary' ? styles.primaryGroup : ''
                }`}
                aria-labelledby={titleId}
              >
                <h3 id={titleId}>{group.title}</h3>
                <p>{group.description}</p>
                <ul className={styles.scopeList}>
                  {group.scopes.map((scope) => (
                    <li key={scope}>{scope}</li>
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
