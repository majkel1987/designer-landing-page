# 13. Global responsive specification

## Cel

Zapewnić spójne zachowanie całej strony od 360 px do dużych desktopów bez utraty hierarchii, czytelności zakresów i jakości Technical Minimal.

## Breakpoints

`REKOMENDACJA`:

| Nazwa | Zakres | Główne zastosowanie |
| --- | --- | --- |
| Mobile S | 360-389 px | Krytyczny test minimalnej szerokości. |
| Mobile M | 390-639 px | Podstawowy telefon. |
| Tablet | 640-1023 px | 8-kolumnowy grid, skład pośredni. |
| Desktop | 1024-1279 px | Nawigacja desktop, 12 kolumn. |
| Desktop L | 1280-1535 px | Docelowy layout i kontener. |
| Wide | 1536 px+ | Większe gutters, bez niekontrolowanego skalowania tekstu. |

Media queries należy stosować dla zmian strukturalnych. Wielkości pośrednie realizować przez `clamp()`, `min()` i `max()`.

## Global container

```css
.container {
  width: min(100% - 2 * var(--page-gutter), 1280px);
  margin-inline: auto;
}
```

- 360-639 px: `--page-gutter: 20px`.
- 640-1023 px: `32px`.
- 1024-1535 px: `48px`.
- 1536 px+: `64px`.

Przy 360 px użyteczna szerokość wynosi 320 px. Żaden element nietypograficzny nie może wymuszać większej szerokości.

## Grid

- Mobile: 4 kolumny, 16 px gap.
- Tablet: 8 kolumn, 20 px gap.
- Desktop: 12 kolumn, 24 px gap.
- Wielokolumnowe sekcje poniżej 768 px przechodzą do jednej kolumny.
- Nie obliczać szerokości przez złożony flex `calc()`. Używać CSS Grid.

## Typography

- H1: `clamp(2.875rem, 5.55vw, 5rem)`.
- H2: `clamp(2.25rem, 3.9vw, 3.5rem)`.
- Body large: `clamp(1.125rem, 1.3vw, 1.25rem)`.
- Nie skalować technical labels poniżej 11 px.
- Nagłówki otrzymują kontrolowane `max-width`, aby unikać pojedynczych słów w ostatnim wierszu.
- Nie wymuszać `<br>` na mobile. Desktopowy podział H1 może być kontrolowany osobnymi `span` z mobile fallback.

## Section spacing

| Rodzaj | Mobile | Tablet | Desktop |
| --- | --- | --- | --- |
| Duża | 80 px | 112 px | 144 px |
| Średnia | 64 px | 88 px | 112 px |
| Zwarta | 32 px | 48 px | 64 px |

Przejście desktop-tablet nie może powodować nagłego podwojenia whitespace. Stosować fluid spacing, jeśli nie zaburza rytmu.

## Mobile 360 i 390 px

- Header ma jedną linię brandu i przycisk menu. Deskryptor zawija się maksymalnie do dwóch krótkich linii albo jest wizualnie ukryty przy 360 px.
- Hero ma automatyczną wysokość z minimalnym oddechem, nie `100vh`. CTA układają się pionowo i mają pełną szerokość.
- Proof Bar przechodzi w listę 2 kolumny przy 390 px i 1 kolumnę, jeśli label nie mieści się bez łamania.
- Services, Process, Audience, Experience i About przechodzą do jednej kolumny.
- Diagramy techniczne nie mogą wychodzić poza kontener. Uprościć liczbę adnotacji, nie zmniejszać ich do nieczytelnego rozmiaru.
- FAQ zachowuje minimum 48 px targetu dla triggera.
- Contact układa kanały kontaktu pionowo.
- Żaden CTA ani label nie może być obcięty lub przewijany poziomo.

## Tablet

- Używać 8-kolumnowego gridu.
- Hero może zachować split 5/3, jeśli visual ma co najmniej 240 px szerokości. W przeciwnym razie przejść do stack.
- Services: grupy w jednej kolumnie, wnętrze każdej grupy w dwóch kolumnach, jeśli treść na to pozwala.
- Process: układ 2x2, bez poziomej osi udającej desktop timeline.
- Audience: jedna grupa wyróżniona na pełną szerokość, dwie poniżej w układzie 2 kolumn.
- Header przechodzi na menu mobilne poniżej 1024 px, jeśli nawigacja nie mieści się w jednym wierszu.

## Desktop 1280 i 1440 px

- Kontener 1280 px z odpowiednimi gutters.
- Header do 72 px wysokości.
- Hero maksymalnie dwie linie H1 i CTA w pierwszym viewport.
- Layouty sekcji korzystają z 12 kolumn, lecz tekst body nie przekracza 65 znaków.
- Nie rozszerzać paneli technicznych do pełnej szerokości bez funkcji.

## Wide screens

- Kontener pozostaje 1280 px.
- Zwiększać przestrzeń zewnętrzną, nie rozciągać kolumn.
- H1 i H2 zatrzymują się na wartościach maksymalnych z design systemu.
- Hero nie przekracza około 900 px wysokości bez uzasadnienia.

## Navigation

- Desktop od 1024 px tylko wtedy, gdy brand, linki i CTA mieszczą się w jednym wierszu.
- Mobile menu jest modalnym panelem nawigacyjnym w obrębie dokumentu, z blokadą scrollu tła.
- Zamknięcie: przycisk, Escape, wybór linku.
- Po zamknięciu focus wraca do przycisku menu.

## CTA

- Desktop: szerokość auto, tekst w jednej linii.
- Mobile: w parach pełna szerokość i stack; pojedynczy CTA może mieć auto width, ale minimum 48 px wysokości.
- Odstęp między dwoma CTA: 12 px mobile, 16 px desktop.

## Diagrams

- SVG z `viewBox` i `width: 100%`.
- Nie skalować stroke poniżej optycznego 1 px.
- Ukrywać pomocnicze adnotacje poniżej 640 px.
- Zachować centralną ścieżkę i jeden accent node.
- Dekoracyjne diagramy `aria-hidden="true"`.

## FAQ

- Trigger zajmuje pełną szerokość.
- Pytanie ma elastyczną szerokość, ikona stałe 24 px.
- Odpowiedź ograniczona do 65 znaków w wierszu.
- Animacja wysokości nie jest wymagana. Dopuszczalne natychmiastowe otwarcie.

## Hero

- Desktop: 80-90vh tylko jeśli wszystkie elementy pozostają widoczne; stosować `min-height` z limitem, nie `h-screen`.
- Mobile: auto height, minimum około 620 px jako `REKOMENDACJA`, bez wymuszania wysokości viewportu.
- Visual poniżej tekstu na mobile i nie więcej niż 38% wysokości Hero.
- Ustalony podział H1 na dwie linie desktop nie może tworzyć czterech linii przy 360 px.

## Test matrix

Obowiązkowe viewporty:

- 360 x 800;
- 390 x 844;
- 768 x 1024;
- 1024 x 768;
- 1280 x 800;
- 1440 x 900;
- 1920 x 1080.

Sprawdzić zoom 200%, orientację landscape telefonu, długie polskie słowa, focus order i reduced motion.

## Acceptance criteria

- [ ] Brak poziomego overflow przy 360 i 390 px.
- [ ] Wszystkie targety dotykowe mają minimum 44 x 44 px, preferowane 48 px.
- [ ] Nawigacja desktop mieści się w jednym wierszu.
- [ ] Hero CTA jest widoczne bez przewijania na typowym desktopie.
- [ ] Każdy grid ma jawnie opisany collapse poniżej 768 px.
- [ ] Diagramy pozostają czytelne lub są celowo uproszczone.
- [ ] Zoom 200% nie ukrywa treści ani kontroli.
- [ ] Layout jest stabilny po załadowaniu fontów.
