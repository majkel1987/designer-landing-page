# 03. Hero

## Oznaczenie decyzji

Headline, bazowy supporting text, eyebrow i CTA są ustalone. Podział gridu, wysokość, skrócony wariant supporting text, szczegóły diagramu i motion są `REKOMENDACJĄ` zgodną z Technical Minimal.

## 1. Cel sekcji

W pierwszym viewport wyjaśnić specjalizację, odbiorcę i model wsparcia oraz skierować do rozmowy lub zakresu usług. To najważniejsza sekcja konwersyjna.

## 2. Odbiorca

Decydent w biurze projektowym, pracowni architektonicznej lub firmie wykonawczej, który szybko ocenia dopasowanie specjalisty.

## 3. Kluczowy komunikat

Michał Sarnacki zapewnia projektowanie instalacji elektrycznych i zewnętrzne wsparcie, które pomaga utrzymać ciągłość projektu.

## 4. Copy

- Eyebrow: `MICHAŁ SARNACKI / ELECTRICAL DESIGN ENGINEER`
- H1: `Electrical engineering that keeps projects moving.`
- Supporting text: `Projektowanie instalacji elektrycznych i zewnętrzne wsparcie dla biur projektowych, architektów i wykonawców.`
- Primary CTA: `Omów projekt`
- Secondary CTA: `Zobacz zakres usług`

Supporting text został skrócony względem źródła tylko o powtórzenie słowa `projektowe`, aby zmieścić się w pierwszym viewport. `REKOMENDACJA`: jeśli wymagana jest wersja dosłowna, użyć pełnego ustalonego zdania i zweryfikować 360 px.

Wariant językowy: headline EN i pozostała treść PL. Nie dodawać tłumaczenia headline obok.

## 5. Desktop layout

Asymmetric split hero w kontenerze 12 kolumn. Tekst zajmuje kolumny 1-7, visual 9-12, kolumna 8 zapewnia oddech. Minimum wysokości: `min(88dvh, 880px)` po odjęciu Header, z zachowaniem całego CTA w viewport. Content wyśrodkowany pionowo optycznie, ale top padding maksymalnie 96 px. H1 max-width 760 px i dwa kontrolowane wiersze:

```text
Electrical engineering
that keeps projects moving.
```

CTA w jednym wierszu, gap 16 px. Visual nie konkuruje z H1.

## 6. Tablet

Grid 8 kolumn. Tekst 5 kolumn, visual 3, jeśli dostępne co najmniej 768 px. Poniżej tego visual przechodzi pod CTA. H1 maksymalnie trzy linie. Hero ma auto height i padding 96 px block.

## 7. Mobile layout

Jedna kolumna. Padding top 72 px, bottom 64 px. Eyebrow, H1, supporting text, CTA, visual. H1 46-52 px zależnie od 360/390, line-height 0.98, bez wymuszonego desktopowego break. CTA stackują się, szerokość 100%. Visual ma wysokość 180-220 px i margin-top 48 px. Hero nie używa `100vh`.

## 8. Typography

- Eyebrow: IBM Plex Sans 11-12 px, 600, uppercase, tracking 0.12em.
- H1: Manrope 800, `var(--type-h1)`, line-height 0.98.
- Supporting: IBM Plex Sans body large, muted, max-width 54ch.
- CTA zgodne z design systemem.

## 9. Spacing

- Eyebrow do H1: 24 px.
- H1 do supporting: 32 px.
- Supporting do CTA: 36 px.
- CTA gap: 16 px desktop, 12 px mobile.
- Sekcja: dostosowana do viewportu, minimalnie 80 px block na desktop poza Header.

## 10. UI elements

- Technical eyebrow.
- H1.
- Supporting paragraph.
- Dwa `ButtonLink`.
- `TechnicalDiagram` jako visual.

## 11. Technical visual motif

Subtelny uproszczony SLD w pionowym polu. Główna linia grafitowa prowadzi od górnego znacznika do trzech węzłów, jeden odcinek i jeden węzeł w accent. Dwie krótkie adnotacje, na przykład `LV DISTRIBUTION` i `DESIGN SCOPE`, bez fikcyjnych parametrów. Visual ma wyglądać jak wycinek języka dokumentacji, nie jak gotowy projekt. SVG dekoracyjne i `aria-hidden`.

## 12. Interaction

- Primary hover i active zgodne z design systemem.
- Secondary scrolluje do `#uslugi`.
- `REKOMENDACJA`: linework może ujawnić opacity 0 do 1 w 400 ms po load, tylko przy no-preference. Brak rysowania całego schematu po ścieżce.

## 13. Accessibility

- Jedyny H1 na stronie.
- CTA są anchor links z jasnym celem.
- Dekoracyjny visual niewidoczny dla AT.
- Kontrast H1 docelowo AAA.
- Ustalony podział H1 nie może zaburzać kolejności czytania.

## 14. Responsive behaviour

Split desktop przechodzi do stack poniżej 768 px. Visual upraszcza adnotacje poniżej 640 px. CTA pozostają widoczne przed visualem na każdej szerokości.

## 15. React component

`HeroSection`: renderuje kluczowy komunikat, dwa CTA i dekoracyjny diagram. Nie zarządza stanem.

## 16. Możliwe komponenty pomocnicze

`TechnicalLabel`, `ButtonLink`, `HeroTechnicalDiagram`.

## 17. Content model

```ts
interface HeroContent {
  readonly eyebrow: string;
  readonly headline: string;
  readonly supportingText: string;
  readonly primaryCta: { readonly label: string; readonly href: string };
  readonly secondaryCta: { readonly label: string; readonly href: string };
}
```

## 18. Acceptance criteria

- [ ] H1 ma dwa wiersze przy 1280 i 1440 px.
- [ ] H1, supporting text i oba CTA są widoczne bez scrollu przy 1440 x 900.
- [ ] Supporting text ma maksymalnie 20 słów w rekomendowanym wariancie.
- [ ] CTA prowadzą do `#kontakt` i `#uslugi`.
- [ ] Przy 360 px nie ma overflow, a CTA mają pełną szerokość.
- [ ] Diagram nie zawiera nazw projektów ani fikcyjnych danych liczbowych.
- [ ] Hero nie przypomina dashboardu ani hero SaaS.

## 19. Czego nie robić

- Nie centrować całej treści.
- Nie dodawać feature listy, proof points, scroll cue ani statusu dostępności.
- Nie używać gradientu, glow, stock photo ani fake dashboard.
- Nie animować H1 słowo po słowie.
- Nie rozciągać Hero tak, aby CTA wypadało poza pierwszy viewport.
