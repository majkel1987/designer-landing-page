import styles from './HeroSection.module.css'

export function HeroTechnicalDiagram() {
  return (
    <svg
      className={styles.diagram}
      viewBox="0 0 360 560"
      aria-hidden="true"
      focusable="false"
    >
      <g className={styles.diagramSecondary}>
        <path d="M178 38V120H208V252H178V414H208V522" />
        <path d="M178 102H90V74" />
        <path d="M208 180H292V144" />
        <path d="M208 252H102V300" />
        <path d="M178 356H276V392" />
        <path d="M178 462H86V498" />
        <path d="M74 74H106M276 144H308M86 300H118M260 392H292M70 498H102" />
        <circle cx="178" cy="102" r="8" />
        <circle cx="178" cy="356" r="8" />
        <rect x="168" y="28" width="20" height="20" />
        <rect x="198" y="512" width="20" height="20" />
      </g>

      <g className={styles.diagramAccent}>
        <path d="M208 252H178V356" />
        <circle cx="208" cy="252" r="9" />
      </g>

      <g className={styles.diagramAnnotations}>
        <text x="18" y="28">LV DISTRIBUTION</text>
        <text x="226" y="548">DESIGN SCOPE</text>
      </g>
    </svg>
  )
}
