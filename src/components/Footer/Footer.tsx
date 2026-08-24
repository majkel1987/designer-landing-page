import styles from './Footer.module.css'

interface FooterNavigationItem {
  readonly label: string
  readonly href: `#${string}`
}

interface FooterContent {
  readonly name: string
  readonly role: string
  readonly navigation: readonly FooterNavigationItem[]
  readonly copyright: string
}

const footerContent: FooterContent = {
  name: 'Michał Sarnacki',
  role: 'Electrical Design Engineer',
  navigation: [
    { label: 'Usługi', href: '#uslugi' },
    { label: 'O mnie', href: '#o-mnie' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
  copyright: '© 2026 Michał Sarnacki',
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.brand}>
          <p className={styles.name}>{footerContent.name}</p>
          <p className={styles.role}>{footerContent.role}</p>
        </div>

        <nav className={styles.navigation} aria-label="Nawigacja w stopce">
          <ul>
            {footerContent.navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <p className={styles.copyright}>{footerContent.copyright}</p>
      </div>
    </footer>
  )
}
