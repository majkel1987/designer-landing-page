# 04. Proof Bar

## Oznaczenie decyzji

Pięć obszarów kompetencji jest ustalonych. Polski wariant copy, układ segmentów, breakpointy i separatory są `REKOMENDACJĄ` zgodną z Technical Minimal.

## 1. Cel sekcji

Szybko potwierdzić podstawowe kompetencje i zakres pracy po deklaracji Hero. Sekcja redukuje ryzyko bez udawania logo cloud lub zestawu certyfikatów.

## 2. Odbiorca

Użytkownik skanujący stronę, szczególnie biuro projektowe i generalny wykonawca.

## 3. Kluczowy komunikat

Zakres obejmuje uprawnione projektowanie instalacji nn, dokumentację techniczną i wykonawczą oraz pracę w BIM/CAD w Polsce.

## 4. Copy

`REKOMENDACJA` wersji polskiej:

- `Uprawnienia projektowe`
- `Instalacje elektryczne nn`
- `Projekty techniczne i wykonawcze`
- `BIM / CAD`
- `Polska`

Wariant EN z materiału źródłowego może zostać użyty wyłącznie w pełnej wersji angielskiej. Nie mieszać języków w jednym proof bar.

## 5. Desktop layout

Pełna szerokość z border top i bottom. Kontener dzieli się na pięć nierównych segmentów opartych o długość treści, nie pięć kart. Separator tylko między segmentami. Wysokość około 88 px. Najdłuższy label otrzymuje większą kolumnę.

## 6. Tablet

Grid 3 + 2. Pierwszy rząd trzy elementy, drugi dwa, z jednym poziomym separatorem pomiędzy rzędami. Nie wymuszać pięciu ciasnych kolumn.

## 7. Mobile layout

Przy 390 px grid 2 kolumny, ostatni element na pełną szerokość. Przy 360 px ten sam układ, jeśli każdy label ma co najmniej 140 px; w przeciwnym razie jedna kolumna. Padding 18 px block na element. Czytanie od góry do dołu.

## 8. Typography

IBM Plex Sans 12-13 px, 600, line-height 1.35. Bez globalnego uppercase, aby długie polskie frazy były czytelne. Opcjonalny krótki kod w muted, na przykład `01`, nie jest zalecany w v1.

## 9. Spacing

- Section padding block: 0, spacing wewnątrz elementów.
- Item padding: 24 px inline, 28 px block desktop.
- Pierwszy i ostatni item wyrównane do krawędzi kontenera.

## 10. UI elements

Semantyczna lista `ul` z pięcioma `li`. Brak ikon i badge.

## 11. Technical visual motif

Separatory i precyzyjne wyrównanie do gridu wystarczają jako motyw. `REKOMENDACJA`: pojedynczy accent rule o szerokości 32 px nad pierwszym elementem, jeśli potrzebny jest sygnał identyfikacji.

## 12. Interaction

Brak hover, jeśli elementy nie są linkami. Sekcja statyczna. Nie dodawać marquee ani auto-scroll.

## 13. Accessibility

Lista ma naturalną kolejność DOM. Tekst nie może być renderowany jako obraz. Separatory dekoracyjne nie są ogłaszane.

## 14. Responsive behaviour

5 kolumn desktop, 3 + 2 tablet, 2 + 2 + 1 mobile, a jedna kolumna jako fallback dla nieprzewidzianego zawijania.

## 15. React component

`ProofBar`: renderuje statyczną, typowaną listę sygnałów kompetencji.

## 16. Możliwe komponenty pomocnicze

`ProofItem` tylko jeśli logika klas responsywnych tego wymaga. Preferować prosty map w komponencie.

## 17. Content model

```ts
interface ProofItem {
  readonly id: string;
  readonly label: string;
}
```

## 18. Acceptance criteria

- [ ] Widocznych jest dokładnie pięć ustalonych obszarów.
- [ ] Sekcja nie zawiera logo, ikon, kart ani slidera.
- [ ] Polski wariant nie miesza angielskich etykiet.
- [ ] Przy 360 px żaden label nie jest obcięty.
- [ ] Separatory są maksymalnie 1 px i zgodne z gridem.
- [ ] Elementy bez akcji nie otrzymują hover ani kursora pointer.

## 19. Czego nie robić

- Nie nazywać sekcji `Trusted by`.
- Nie tworzyć logo wall.
- Nie dodawać wymyślonych certyfikatów, liczb i lat doświadczenia.
- Nie używać pill badges.
- Nie animować listy poziomo.
