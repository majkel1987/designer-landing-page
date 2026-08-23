import { useEffect, useRef, useState } from 'react'
import { ButtonLink } from '../shared/ButtonLink'
import styles from './Header.module.css'

interface NavigationItem {
  readonly label: string
  readonly href: `#${string}`
}

interface HeaderContent {
  readonly name: string
  readonly role: string
  readonly navigation: readonly NavigationItem[]
  readonly cta: NavigationItem
}

const headerContent: HeaderContent = {
  name: 'Michał Sarnacki',
  role: 'Electrical Design Engineer',
  navigation: [
    { label: 'Usługi', href: '#uslugi' },
    { label: 'Współpraca', href: '#wspolpraca' },
    { label: 'O mnie', href: '#o-mnie' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
  cta: { label: 'Omów projekt', href: '#kontakt' },
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const closeMenu = () => {
    setIsMenuOpen(false)
    window.requestAnimationFrame(() => menuButtonRef.current?.focus())
  }

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 64rem)')
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false)
      }
    }

    desktopQuery.addEventListener('change', handleDesktopChange)
    return () => desktopQuery.removeEventListener('change', handleDesktopChange)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusableElements = [
      menuButtonRef.current,
      ...(mobileMenuRef.current?.querySelectorAll<HTMLElement>('a') ?? []),
    ].filter((element): element is HTMLElement => element !== null)

    focusableElements[1]?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeMenu()
        return
      }

      if (event.key !== 'Tab' || focusableElements.length === 0) {
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.navigation}`} aria-label="Główna nawigacja">
        <div className={styles.brand}>
          <span className={styles.brandName}>{headerContent.name}</span>
          <span className={styles.brandRole}>{headerContent.role}</span>
        </div>

        <ul className={styles.desktopLinks}>
          {headerContent.navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <ButtonLink className={styles.desktopCta} href={headerContent.cta.href}>
          {headerContent.cta.label}
        </ButtonLink>

        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          Menu
          <span className={styles.menuGlyph} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>

        <div
          ref={mobileMenuRef}
          id="mobile-navigation"
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
          aria-hidden={!isMenuOpen}
        >
          <div className={`container ${styles.mobileMenuInner}`}>
            <ul className={styles.mobileLinks}>
              {headerContent.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    tabIndex={isMenuOpen ? 0 : -1}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ButtonLink
              className={styles.mobileCta}
              href={headerContent.cta.href}
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {headerContent.cta.label}
            </ButtonLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
