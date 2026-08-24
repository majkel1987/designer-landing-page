import styles from './FaqSection.module.css'

interface FaqItem {
  readonly id: string
  readonly question: string
  readonly answer: string
}

interface FaqGroup {
  readonly title: string
  readonly items: readonly FaqItem[]
}

const faqGroups: readonly FaqGroup[] = [
  {
    title: 'Zakres i model',
    items: [
      {
        id: 'project-types',
        question: 'Jakie typy projektów realizujesz?',
        answer:
          'Realizuję projekty instalacji elektrycznych nn, dokumentację techniczną i wykonawczą oraz wybrane opracowania, obliczenia i schematy. Zakres może obejmować małe i średnie zadanie albo wydzieloną część większego projektu.',
      },
      {
        id: 'design-subcontracting',
        question: 'Czy współpracujesz z biurami projektowymi jako podwykonawca?',
        answer:
          'Tak. Współpraca może mieć formę podwykonawstwa projektowego B2B, z odpowiedzialnością za uzgodniony zakres, termin i sposób przekazania dokumentacji.',
      },
      {
        id: 'separate-scope',
        question: 'Czy możesz przejąć tylko wydzielony zakres większego projektu?',
        answer:
          'Tak. Zakres można ograniczyć do konkretnej instalacji, etapu dokumentacji, pakietu obliczeń, schematów lub innego jasno zdefiniowanego zadania.',
      },
      {
        id: 'smaller-studies',
        question: 'Czy realizujesz mniejsze opracowania techniczne?',
        answer:
          'Tak, jeśli zadanie ma jednoznaczne dane wejściowe, zakres i oczekiwany rezultat. Możliwość realizacji potwierdzam po krótkiej analizie materiałów.',
      },
      {
        id: 'pricing',
        question: 'Jak wygląda wycena?',
        answer:
          'Wycena powstaje po określeniu zakresu, odpowiedzialności, terminu, materiałów wejściowych i formatu opracowania. Dzięki temu oferta odnosi się do realnego nakładu i oczekiwanego rezultatu.',
      },
    ],
  },
  {
    title: 'Organizacja i formalności',
    items: [
      {
        id: 'delivery-time',
        question: 'Jak wygląda czas realizacji?',
        answer:
          'Termin zależy od zakresu, jakości materiałów wejściowych, liczby uzgodnień i aktualnej dostępności. Po analizie briefu proponuję harmonogram oraz punkty przekazania.',
      },
      {
        id: 'input-materials',
        question: 'Jakie materiały są potrzebne do rozpoczęcia współpracy?',
        answer:
          'Najczęściej są to aktualne rzuty lub model, wytyczne inwestora, dane branżowe, wymagany etap dokumentacji, standard klienta i oczekiwany termin. Dokładna lista zależy od zadania.',
      },
      {
        id: 'bim-cad',
        question: 'Czy pracujesz w BIM / CAD?',
        answer:
          'Tak, zakres może obejmować pracę z materiałami BIM i CAD. Format plików, wersje oprogramowania oraz standard wymiany należy potwierdzić przed rozpoczęciem.',
      },
      {
        id: 'nda',
        question: 'Czy podpisujesz NDA?',
        answer:
          'Tak, możliwa jest współpraca objęta umową poufności. Materiały i informacje projektowe są wykorzystywane wyłącznie w uzgodnionym zakresie.',
      },
      {
        id: 'long-term-b2b',
        question: 'Czy możliwa jest dłuższa współpraca B2B?',
        answer:
          'Tak. Możliwe jest okresowe lub powtarzalne wsparcie przy kilku projektach, jeśli zakres odpowiedzialności, dostępność i sposób koordynacji zostaną jasno ustalone.',
      },
    ],
  },
]

export function FaqSection() {
  return (
    <section className={styles.faq} aria-labelledby="faq-title">
      <div className={`container ${styles.layout}`}>
        <header className={styles.sectionHeader}>
          <h2 id="faq-title">Najczęstsze pytania</h2>
          <p>
            Zakres i sposób współpracy są ustalane indywidualnie na podstawie
            materiałów wejściowych, odpowiedzialności, terminu i oczekiwanego
            rezultatu.
          </p>
        </header>

        <div className={styles.groups}>
          {faqGroups.map((group) => (
            <section
              key={group.title}
              className={styles.group}
              aria-labelledby={`faq-${group.items[0].id}-group`}
            >
              <h3
                id={`faq-${group.items[0].id}-group`}
                className={styles.groupTitle}
              >
                {group.title}
              </h3>

              {group.items.map((item) => (
                <details key={item.id} className={styles.item}>
                  <summary>
                    <span>{item.question}</span>
                    <span className={styles.chevron} aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
