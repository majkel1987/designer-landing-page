import { ButtonLink } from '../shared/ButtonLink'
import styles from './ContactSection.module.css'

interface ContactChannel {
  readonly type: 'location'
  readonly label: string
  readonly value: string
}

interface ContactContent {
  readonly eyebrow: string
  readonly headline: string
  readonly body: string
  readonly primaryCta: string
  readonly email?: string
  readonly channels: readonly ContactChannel[]
}

const contactContent: ContactContent = {
  eyebrow: 'KONTAKT',
  headline: 'Masz projekt lub zakres do wsparcia?',
  body: 'Opisz rodzaj opracowania, oczekiwany termin i dostępne materiały wejściowe. W odpowiedzi potwierdzę możliwość współpracy i zaproponuję następny krok.',
  primaryCta: 'Napisz wiadomość',
  channels: [
    {
      type: 'location',
      label: 'Lokalizacja',
      value: 'Warszawa / Polska',
    },
  ],
}

export function ContactSection() {
  const emailHref: `mailto:${string}` | undefined = contactContent.email
    ? `mailto:${contactContent.email}?subject=Zapytanie%20projektowe`
    : undefined

  return (
    <section
      id="kontakt"
      className={styles.contact}
      aria-labelledby="contact-title"
    >
      <div className={`container ${styles.layout}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{contactContent.eyebrow}</p>
          <h2 id="contact-title">{contactContent.headline}</h2>
          <p className={styles.body}>{contactContent.body}</p>
          {emailHref ? (
            <div className={styles.actions}>
              <ButtonLink href={emailHref}>
                {contactContent.primaryCta}
              </ButtonLink>
            </div>
          ) : null}
        </div>

        <address className={styles.channels}>
          {contactContent.channels.map((channel) => (
            <div key={channel.type} className={styles.channel}>
              <span className={styles.channelLabel}>{channel.label}</span>
              <span className={styles.channelValue}>{channel.value}</span>
            </div>
          ))}
        </address>
      </div>
    </section>
  )
}
