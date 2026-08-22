# 01. Design system

## Status dokumentu

Wspólny kontrakt wizualny dla wszystkich sekcji. Wartości oznaczone `REKOMENDACJA` uszczegóławiają kierunek Technical Minimal i mogą być skorygowane po pierwszym renderze bez zmiany charakteru systemu.

## Design principles

1. Treść i hierarchia przed dekoracją.
2. Jedna jasna paleta na całej stronie.
3. Jeden chłodny niebieski akcent.
4. Linie organizują informację, nie udają dokumentacji.
5. Prostokątne formy, mały radius, brak optycznego ciężaru.
6. Motywy techniczne są semantyczne i możliwe do wykonania w HTML/CSS/SVG.

## Kolory

```css
:root {
  --color-bg: #f4f4f0;
  --color-text: #0e1217;
  --color-accent: #1f57e7;
  --color-muted: #6c737a;
  --color-border: #d8dad7;
  --color-secondary: #bfc4c3;
}
```

| Token | Zastosowanie |
| --- | --- |
| `--color-bg` | Tło strony i bazowe powierzchnie. |
| `--color-text` | Nagłówki, body o wysokim priorytecie, obramowanie primary CTA. |
| `--color-accent` | Primary CTA, focus ring, aktywny link, pojedyncze linie i oznaczenia techniczne. |
| `--color-muted` | Teksty drugorzędne, opisy, metadane. Nie używać dla bardzo małego tekstu, jeśli kontrast spada poniżej AA. |
| `--color-border` | Separatory, obrysy paneli, pola formularza. |
| `--color-secondary` | Nieaktywne linework, diagramy tła i powierzchnie pomocnicze. |

`REKOMENDACJA`: dodać semantyczne aliasy `--color-surface: #F4F4F0`, `--color-surface-subtle: #EEEFEA`, `--color-on-accent: #FFFFFF`, `--color-error: #A52A2A` i `--color-focus: #1F57E7`. Kolor błędu służy wyłącznie walidacji.

Jasny motyw jest częścią ustalonego kierunku. Nie implementować automatycznego dark mode w v1, ponieważ zmieniałby wybrany charakter identyfikacji.

## Typografia

- Heading: Manrope, `700` i `800`.
- Body, labels, technical captions: IBM Plex Sans, `400`, `500`, `600`.
- Fallback: `Arial, sans-serif`.
- Fonty self-hosted w WOFF2 z `font-display: swap`.

`REKOMENDACJA` skali fluid:

| Styl | Desktop | Mobile | Line-height | Tracking |
| --- | --- | --- | --- | --- |
| Display | 88 px | 48 px | 0.96 | -0.045em |
| H1 | 80 px | 46 px | 0.98 | -0.04em |
| H2 | 56 px | 36 px | 1.04 | -0.03em |
| H3 | 26 px | 22 px | 1.18 | -0.015em |
| Body large | 20 px | 18 px | 1.55 | -0.005em |
| Body | 16 px | 16 px | 1.65 | 0 |
| Small | 14 px | 14 px | 1.5 | 0 |
| Technical label | 12 px | 11 px | 1.3 | 0.12em |

Implementacja preferowana:

```css
--type-display: clamp(3rem, 6.1vw, 5.5rem);
--type-h1: clamp(2.875rem, 5.55vw, 5rem);
--type-h2: clamp(2.25rem, 3.9vw, 3.5rem);
--type-h3: clamp(1.375rem, 1.8vw, 1.625rem);
--type-body-lg: clamp(1.125rem, 1.3vw, 1.25rem);
```

Nagłówki mają zachowywać naturalny zapis zdania. Uppercase jest zarezerwowany dla maksymalnie czterech technicznych etykiet na stronie, w tym Hero.

## Layout

`REKOMENDACJA`:

- maksymalna szerokość content container: 1280 px;
- szerokość: `min(100% - 2 * var(--gutter), 1280px)`;
- desktop gutter od 1280 px: 48 px;
- duży desktop od 1536 px: 64 px;
- tablet: 32 px;
- mobile 360 i 390 px: 20 px;
- grid desktop: 12 kolumn, gap 24 px;
- grid tablet: 8 kolumn, gap 20 px;
- grid mobile: 4 kolumny, gap 16 px.

Nie używać pełnej szerokości viewportu dla tekstu. Maksymalna miara body: 65 znaków, Hero supporting text: 54 znaki.

## Vertical rhythm

`REKOMENDACJA`:

- sekcja duża: 144 px desktop, 112 px tablet, 80 px mobile;
- sekcja średnia: 112 px desktop, 88 px tablet, 64 px mobile;
- sekcja zwarta: 64 px desktop, 48 px tablet, 32 px mobile;
- odstęp section header do treści: 56 px desktop, 40 px tablet, 32 px mobile.

## Spacing scale

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-14: 56px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-28: 112px;
--space-36: 144px;
```

## Borders i radius

- Border podstawowy: 1 px solid `--color-border`.
- Border aktywny: 1 px solid `--color-text`.
- Radius bazowy: 2 px.
- Maksymalny radius: 4 px dla pól i paneli.
- Brak cieni domyślnie.
- `REKOMENDACJA`: shadow tylko dla otwartego menu mobilnego, `0 12px 32px rgb(14 18 23 / 8%)`.

## Buttons

### Primary

- Tło `--color-accent`, tekst `--color-on-accent`.
- Wysokość 52 px desktop, minimum 48 px mobile.
- Padding inline 24 px, radius 2 px.
- IBM Plex Sans 15 px, weight 600.
- Hover: tło `#1849C7` jako `REKOMENDACJA`.
- Active: przesunięcie `translateY(1px)`.
- Focus-visible: 2 px outline `--color-focus`, offset 3 px.
- Disabled tylko dla formularza: opacity 0.48, `cursor: not-allowed`, bez hover.

### Secondary

- Transparentne tło, tekst `--color-text`, border `--color-text`.
- Hover: `--color-text` jako tło i `--color-bg` jako tekst.
- Pozostałe wymiary identyczne jak primary.

CTA nie mogą łamać się na dwie linie. Na mobile mogą mieć `width: 100%`, jeśli sekcja zawiera dwa CTA.

## Links

- Link tekstowy ma dziedziczyć kolor tekstu i mieć czytelne podkreślenie lub dolną linię.
- Hover zmienia kolor na accent i utrzymuje podkreślenie.
- Focus-visible identyczny jak dla przycisków.
- Link zewnętrzny musi być oznaczony w dostępnej nazwie, jeśli otwiera nową kartę.

## Cards i technical panels

Nie stosować kart jako domyślnego kontenera. Preferować grid, whitespace i pojedyncze separatory.

Panel techniczny:

- 1 px border;
- radius 0-2 px;
- padding 24-32 px;
- brak shadow;
- maksymalnie 10% powierzchni w kolorze accent;
- treść o realnej funkcji: zakres, etap, odpowiedzialność lub diagram.

## Technical labels

Przykład: `E-01 | LV-DB-12 | ΔU 2.7% | 4×95 mm²`.

Zasady:

- dane demonstracyjne muszą być jawnie oznaczone jako przykładowe w `aria-label` lub komentarzu implementacyjnym;
- nie sugerować, że liczby pochodzą z realnego projektu;
- IBM Plex Sans 11-12 px, weight 500, letter-spacing 0.1-0.14em;
- nie używać technicznej etykiety nad każdą sekcją;
- znaki i jednostki mają być poprawne typograficznie.

## Motywy techniczne

Dozwolone:

- linie SLD połączone z podpisanymi węzłami;
- fragment siatki modułowej, jeśli organizuje realne elementy;
- uproszczona trasa kablowa;
- numeracja zakresów `S-01`, `S-02`, `S-03` w Services;
- bounding boxes wokół realnej treści;
- krótkie adnotacje BIM/CAD.

Motyw ma być wykonany jako semantyczny HTML i dekoracyjne CSS/SVG. Dekoracyjne SVG otrzymuje `aria-hidden="true"` i `focusable="false"`. Linie nie mogą obniżać czytelności tekstu ani wyglądać jak przypadkowa siatka.

## Motion

- Czas hover: 160-220 ms.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Automatyczne animacje nie są wymagane.
- `REKOMENDACJA`: ograniczyć ruch do rozwijania menu, FAQ i feedbacku przycisków.
- Każdy ruch wyłączyć lub uprościć przy `prefers-reduced-motion: reduce`.

## Do

- dużo kontrolowanego whitespace;
- mocna typografia Manrope;
- cienkie separatory używane oszczędnie;
- pojedynczy niebieski akcent;
- zróżnicowane rodziny layoutu;
- techniczne motywy powiązane z treścią;
- widoczny focus i kontrast WCAG AA.

## Don't

- gradienty, glow i glassmorphism;
- duże cienie i miękkie, pływające karty;
- pill UI;
- trzy identyczne karty SaaS w rzędzie;
- stockowe zdjęcia wykonawcze;
- pioruny, wtyczki i żarówki jako dekoracja;
- dark section pośrodku jasnej strony;
- techniczne liczby udające prawdziwe dane;
- status dots, scroll cues i dekoracyjne paski tekstu;
- inny radius, akcent lub typografia w pojedynczej sekcji.

## Acceptance criteria

- [ ] Wszystkie sekcje używają tych samych tokenów kolorów, typografii, spacingu i radius.
- [ ] Jedynym kolorem akcentowym jest `#1F57E7` oraz jego ciemniejszy hover.
- [ ] Tekst body i kontrolki spełniają WCAG AA.
- [ ] Na stronie nie występują gradienty, glassmorphism ani duże cienie.
- [ ] Motywy techniczne nie zawierają danych identyfikujących projekt.
- [ ] Widok 360 px nie ma poziomego overflow.
- [ ] Wszystkie CTA mają pojedynczą linię tekstu i stan focus-visible.
