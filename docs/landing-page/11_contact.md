# 11. Contact CTA

## Oznaczenie decyzji

Headline, bazowy sens copy, CTA i rodzaje danych kontaktowych są ustalone. Finalne zdania, layout, zasada opcjonalnych kanałów oraz zachowanie responsive są `REKOMENDACJĄ` zgodną z Technical Minimal.

## 1. Cel sekcji

Zamienić potwierdzone zainteresowanie w konkretną wiadomość o projekcie. Sekcja ma jasno wskazać kanały kontaktu i podpowiedzieć, jakie informacje warto przesłać.

## 2. Odbiorca

Użytkownik, który rozpoznał dopasowanie zakresu i jest gotowy opisać potrzebę, termin oraz materiały wejściowe.

## 3. Kluczowy komunikat

Jeśli projekt lub wydzielony zakres potrzebuje wsparcia, najskuteczniejszym następnym krokiem jest krótka wiadomość z opisem zadania.

## 4. Copy

- Eyebrow: `KONTAKT`
- Headline: `Masz projekt lub zakres do wsparcia?`
- Body: `Opisz rodzaj opracowania, oczekiwany termin i dostępne materiały wejściowe. W odpowiedzi potwierdzę możliwość współpracy i zaproponuję następny krok.`
- Primary CTA: `Napisz wiadomość`
- Secondary CTA: `Umów krótką rozmowę`
- Email: `[EMAIL]`
- Phone: `[TELEFON]`
- LinkedIn: `[LINKEDIN_URL]`
- Location: `Warszawa / Polska`

`REKOMENDACJA`: secondary CTA wyświetlać tylko po podaniu realnego linku do kalendarza lub potwierdzeniu procesu umawiania. Bez linku nie renderować przycisku. Telefon i LinkedIn również są opcjonalne do czasu podania danych.

## 5. Desktop layout

Mocny finał w jasnym theme. Grid 12 kolumn: headline i body 7 kolumn, kanały kontaktu 4 kolumny od kolumny 9. CTA pod body w jednym wierszu. Górny border pełnej szerokości. Nie odwracać sekcji na ciemne tło.

## 6. Tablet

Headline pełna szerokość. Body i CTA 5 z 8 kolumn, kanały 3 z 8. Jeśli CTA wrapuje, przejść do pionowego układu.

## 7. Mobile layout

Jedna kolumna. Eyebrow, headline, body, CTA stack, następnie kanały kontaktu. Primary pełna szerokość. Secondary pełna szerokość tylko jeśli istnieje. Kanały jako osobne wiersze minimum 52 px z czytelnym label i wartością. Headline 36-42 px.

## 8. Typography

- Eyebrow: IBM Plex Sans 11-12 px, 600, accent, uppercase.
- H2: Manrope 700, `var(--type-h2)`.
- Body: IBM Plex Sans body large, muted.
- Channel label: IBM Plex Sans 12 px, 600.
- Channel value: Manrope 600 lub IBM Plex Sans 16 px, preferowane IBM Plex Sans.

## 9. Spacing

- Section: 144/112/80 px.
- Eyebrow to headline: 24 px.
- Headline to body: 28 px.
- Body to CTA: 36 px.
- Kanały: 18 px padding block, jeden separator między wierszami.
- Mobile CTA gap: 12 px.

## 10. UI elements

- Technical eyebrow.
- H2 i body.
- Primary mailto CTA.
- Opcjonalny calendar CTA.
- Lista kanałów kontaktu.
- Brak formularza w bazowym zakresie.

## 11. Technical visual motif

Górna linia może mieć krótki accent segment wskazujący punkt wejścia. Lista kanałów przypomina blok danych kontaktowych na stronie tytułowej dokumentacji. Bez dekoracyjnego schematu i fikcyjnych numerów arkusza.

## 12. Interaction

- Email: `mailto:` z opcjonalnym, neutralnym tematem `Zapytanie projektowe` jako `REKOMENDACJA`.
- Telefon: `tel:` po podaniu numeru.
- LinkedIn: zewnętrzny link, nowe okno tylko jeśli świadomie ustalone.
- Calendar: zewnętrzny link po podaniu URL.
- Hover i focus zgodne z design systemem.

## 13. Accessibility

- Kanały jako `address`, ale `font-style: normal`.
- Link ma dostępną nazwę zawierającą wartość, nie tylko `Kliknij tutaj`.
- Link zewnętrzny oznaczony dla czytnika, jeśli otwiera nową kartę.
- Placeholdery nie mogą trafić do produkcji jako aktywne linki.
- CTA target minimum 48 px.

## 14. Responsive behaviour

Split desktop przechodzi do częściowego split tablet i jednego stacku mobile. Kolejność DOM: treść, CTA, kontakt. Kanały opcjonalne znikają tylko wtedy, gdy brak realnych danych.

## 15. React component

`ContactSection`: renderuje finalny komunikat, dostępne CTA i potwierdzone kanały kontaktu.

## 16. Możliwe komponenty pomocnicze

`ButtonLink`, `ContactChannelList`, `ContactChannel`.

## 17. Content model

```ts
interface ContactChannel {
  readonly type: "email" | "phone" | "linkedin" | "location";
  readonly label: string;
  readonly value: string;
  readonly href?: string;
}

interface ContactContent {
  readonly headline: string;
  readonly body: string;
  readonly channels: readonly ContactChannel[];
  readonly calendarUrl?: string;
}
```

## 18. Acceptance criteria

- [ ] Headline brzmi dokładnie `Masz projekt lub zakres do wsparcia?`.
- [ ] Primary CTA brzmi `Napisz wiadomość` i prowadzi do potwierdzonego adresu.
- [ ] Brakujące dane pozostają jawnymi placeholderami w specyfikacji, ale nie aktywnym UI produkcyjnym.
- [ ] Secondary CTA pojawia się tylko z realnym URL.
- [ ] Sekcja podpowiada trzy informacje do przesłania: rodzaj, termin, materiały.
- [ ] Przy 360 px CTA i kanały są czytelne bez overflow.
- [ ] Jasny theme i jeden accent są zachowane.

## 19. Czego nie robić

- Nie wymyślać emaila, telefonu, profilu ani kalendarza.
- Nie dodawać formularza bez osobnej specyfikacji prywatności i backendu.
- Nie używać ciemnego, kontrastowego bloku tylko dla dramatycznego finału.
- Nie dodawać mapy, statusu online i godzin pracy.
- Nie stosować dwóch aktywnych CTA prowadzących do tego samego kanału pod różnymi nazwami.
