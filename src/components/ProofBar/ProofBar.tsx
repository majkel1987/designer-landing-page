import styles from './ProofBar.module.css'

interface ProofItem {
  readonly id: string
  readonly label: string
}

const proofItems: readonly ProofItem[] = [
  { id: 'design-authorisation', label: 'Uprawnienia projektowe' },
  { id: 'low-voltage', label: 'Instalacje elektryczne nn' },
  {
    id: 'technical-documentation',
    label: 'Projekty techniczne i wykonawcze',
  },
  { id: 'bim-cad', label: 'BIM / CAD' },
  { id: 'poland', label: 'Polska' },
]

export function ProofBar() {
  return (
    <section className={styles.proofBar} aria-label="Obszary kompetencji">
      <ul className={`container ${styles.list}`}>
        {proofItems.map((item) => (
          <li key={item.id} className={styles.item}>
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  )
}
