# 14. Implementation rules for Codex

## Cel dokumentu

Instrukcja techniczna dla implementacji landing page. Nie zmienia copy ani design systemu. Każdy prompt wdrożeniowy powinien wskazać specyfikację sekcji i przestrzegać niniejszych reguł.

## Stack

Wymagany:

```text
Vite
React
TypeScript
CSS Modules
```

Nie dodawać frameworka UI, Tailwind ani Next.js.

`REKOMENDACJA`: rozpocząć bez biblioteki ikon i bez Framer Motion. Proste symbole menu, chevron FAQ i motywy techniczne można wykonać semantycznym CSS lub minimalistycznym SVG, jeśli nie są ikonami produktowymi. Jeśli zestaw ikon okaże się potrzebny, wybrać jedną bibliotekę po weryfikacji `package.json`.

Framer Motion można dodać tylko wtedy, gdy po implementacji statycznej istnieje konkretny przypadek ruchu, którego CSS nie realizuje czytelnie. Dla obecnego `MOTION_INTENSITY: 3` nie jest wymagany.

## Reguła nadrzędna

> Zachowaj istniejący design system. Nie zmieniaj innych sekcji, jeśli zadanie tego nie wymaga.

## Kod

- TypeScript `strict: true`.
- Brak `any`, type assertions tylko przy jasno opisanej granicy zewnętrznej.
- Semantyczne elementy HTML: `header`, `nav`, `main`, `section`, `footer`, właściwa hierarchia H1-H3.
- Jedno H1 na stronie.
- Małe komponenty o jednej odpowiedzialności.
- Nie tworzyć abstrakcji przed pojawieniem się co najmniej dwóch realnych użyć.
- Powtarzalne dane oddzielić od JSX jako typed readonly arrays.
- CSS custom properties są jedynym źródłem tokenów.
- CSS Modules dla stylów sekcji, globalnie tylko reset, fonty, tokens i bazowa typografia.
- Nie używać inline styles poza wartościami dynamicznymi, których nie da się wyrazić klasą.
- Anchor IDs stabilne i zgodne z `00_project-overview.md`.

## Preferowana struktura

```text
src/
  components/
    Header/
      Header.tsx
      Header.module.css
    Hero/
    ProofBar/
    Services/
    Process/
    Audience/
    Experience/
    About/
    FAQ/
    Contact/
    Footer/
    shared/
      ButtonLink.tsx
      SectionHeader.tsx
      TechnicalDiagram.tsx
  content/
    siteContent.ts
  styles/
    reset.css
    tokens.css
    globals.css
  App.tsx
  main.tsx
```

`REKOMENDACJA`: folder `content/` jest uzasadniony, ponieważ ułatwia późniejszy wariant EN bez przebudowy komponentów. Nie wdrażać pełnej biblioteki i18n w v1.

## Komponenty współdzielone

- `ButtonLink`: anchor stylizowany jako primary lub secondary CTA.
- `SectionHeader`: opcjonalny, bez wymuszania eyebrow w każdej sekcji.
- `TechnicalDiagram`: tylko jeśli co najmniej dwa motywy mają wspólną strukturę API.
- `Container`: dopuszczalny prosty wrapper dla globalnej szerokości.

Nie tworzyć generycznych `Card`, `Stack`, `Box` i `Text` tylko w celu imitowania design systemu.

## Content model

```ts
export interface SiteLink {
  readonly label: string;
  readonly href: string;
}

export interface ContactDetails {
  readonly email: string;
  readonly phone?: string;
  readonly linkedIn?: string;
  readonly location: string;
}
```

Placeholdery `[EMAIL]`, `[TELEFON]`, `[LINKEDIN_URL]` muszą pozostać jawne do czasu podania danych. Nie publikować builda produkcyjnego z placeholderami.

## Styling rules

- Import `tokens.css` przed `globals.css`.
- Nie duplikować wartości kolorów i spacingu w modułach.
- Używać Grid dla layoutów wielokolumnowych.
- Używać logical properties: `margin-inline`, `padding-block`, `inset-inline`.
- Radius 0-4 px, brak gradientów i dużych shadow.
- Nie ukrywać istotnej treści wyłącznie dla poprawy kompozycji.
- Utrzymać jeden jasny theme na całej stronie.

## Interaction

- Linki kotwicowe mogą używać `scroll-behavior: smooth` tylko w `prefers-reduced-motion: no-preference`.
- Header sticky bez skryptu scroll direction.
- Mobile menu zarządzane lokalnym `useState`.
- FAQ jako natywny `details/summary` albo kontrolowany accordion. Preferować `details/summary`, jeśli projekt wizualny można zachować bez problemów przeglądarkowych.
- Nie dodawać listenera `window.scroll`.
- Animować tylko `transform` i `opacity`. FAQ może otwierać się bez animacji wysokości.

## Accessibility

- Cel WCAG 2.2 AA.
- Skip link jako pierwszy focusowalny element.
- Landmarks i dostępne nazwy nawigacji.
- Widoczny `:focus-visible` na każdej kontroli.
- Minimum 44 x 44 px targetu, preferowane 48 px.
- Menu: `aria-expanded`, `aria-controls`, Escape, focus return i blokada scrollu tła.
- FAQ: stan rozwinięcia dostępny natywnie lub przez `aria-expanded` i `aria-controls`.
- Dekoracyjne diagramy: `aria-hidden="true"` i brak focus.
- Formularz, jeśli zostanie dodany: label nad polem, opis błędu pod polem, `aria-describedby`, summary błędów przy submit.
- Respektować `prefers-reduced-motion`.
- Sprawdzić kontrast narzędziem, nie tylko wizualnie.

## Performance

- Minimalny JavaScript, brak ciężkich bibliotek wizualnych.
- Motywy techniczne jako lekkie SVG z zoptymalizowaną liczbą węzłów.
- Fonty WOFF2 self-hosted, preload tylko dla używanych wariantów above the fold.
- `font-display: swap` i fallback o zbliżonych metrykach.
- Rezerwować wymiary mediów, aby CLS pozostał poniżej 0.1.
- Lazy loading dla obrazów poniżej fold, jeśli później zostaną dodane.
- Cele: LCP < 2.5 s, INP < 200 ms, CLS < 0.1.

## SEO readiness

Przygotować centralną konfigurację metadanych do późniejszego użycia:

- title;
- description;
- canonical;
- Open Graph title, description i image;
- robots;
- structured data typu `ProfessionalService` lub `Person` po potwierdzeniu danych.

`REKOMENDACJA`: w Vite zarządzać podstawowymi metadanymi w `index.html`, a treść zdefiniować w `siteContent.ts`. Jeśli powstaną podstrony, dopiero wtedy ocenić routing lub rozwiązanie SSR/prerender.

## NDA i bezpieczeństwo treści

- Nie commitować niezanonimizowanych rzutów, modeli ani nazw projektów.
- Przed dodaniem assetu technicznego przeprowadzić ręczny review metadanych, nazw plików i widocznych opisów.
- Nie używać fikcyjnych nazw klientów jako placeholderów.
- Nie dodawać analityki, formularza wysyłkowego ani integracji zewnętrznej bez osobnej decyzji o prywatności.

## Formularz kontaktowy

Źródło nie ustala formularza. `REKOMENDACJA`: v1 może używać linku `mailto:` i jawnych kanałów kontaktu. Jeśli formularz zostanie dodany, potrzebne są osobne decyzje dotyczące backendu, zgody, polityki prywatności, zabezpieczenia antyspamowego, stanów loading/success/error i retencji danych.

## Testing

- Typecheck i production build bez ostrzeżeń.
- ESLint bez błędów.
- Test klawiatury całej strony.
- Test mobile menu i FAQ.
- Test linków kotwicowych.
- Test viewportów z `13_responsive.md`.
- Test zoom 200% i reduced motion.
- Lighthouse dla mobile i desktop.
- Sprawdzenie `git diff --check`.

`REKOMENDACJA`: dodać Vitest + Testing Library dla interakcji Header i FAQ oraz Playwright dla nawigacji klawiaturą i krytycznej ścieżki CTA. Nie dodawać testów snapshotowych dla statycznego markup.

## Kolejność implementacji

1. Tokens, reset, fonty i container.
2. App landmarks i kolejność sekcji.
3. Header, Hero, Proof Bar.
4. Services, Process, Audience.
5. Experience, About, FAQ, Contact, Footer.
6. Mobile pass 360 i 390 px.
7. Accessibility, performance, SEO i polish.

## Definition of done

- [ ] Każdy komponent spełnia specyfikację własnej sekcji.
- [ ] Brak nieuzgodnionych bibliotek i abstrakcji.
- [ ] Wszystkie powtarzalne treści mają typowany model danych.
- [ ] Brak `any`, błędów typecheck, lint i build.
- [ ] Focus order, menu i FAQ działają klawiaturą.
- [ ] Brak poziomego overflow od 360 px.
- [ ] Placeholdery danych kontaktowych są wykrywane przed publikacją.
- [ ] NDA i brak fikcyjnych danych są zweryfikowane ręcznie.
- [ ] Inne sekcje nie zmieniły się podczas iteracji ograniczonej do jednego komponentu.
