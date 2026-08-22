# 07. Who I Work With

## Oznaczenie decyzji

Trzy grupy klientów i ich potrzeby są ustalone. Finalne zdania copy, asymetryczny grid, hierarchia segmentów i collapse są `REKOMENDACJĄ` zgodną z Technical Minimal.

## 1. Cel sekcji

Odpowiedzieć użytkownikowi: `Czy ten specjalista współpracuje z firmą taką jak moja?` i pokazać konkretne sytuacje, w których wsparcie wnosi wartość.

## 2. Odbiorca

Biura projektowe, architekci i pracownie, wykonawcy oraz generalni wykonawcy.

## 3. Kluczowy komunikat

Model współpracy dopasowuje się do roli klienta, ale zawsze opiera się na jasno wydzielonym zakresie i komunikacji technicznej.

## 4. Copy

- Headline: `Z kim współpracuję`
- Supporting: `Wsparcie może uzupełnić zespół projektowy, zapewnić obsługę branżową lub domknąć dokumentację wykonawczą.`

### Biura projektowe

`Wsparcie przy przeciążeniu zespołu, równoległych projektach oraz wydzielonych zakresach dokumentacji technicznej i wykonawczej.`

Zakresy: `wydzielone zakresy`, `projekty techniczne`, `projekty wykonawcze`, `koordynacja elektryczna`.

### Architekci i pracownie

`Wsparcie branżowe dla projektu budowlanego i technicznego, z uwzględnieniem wymagań architektury oraz koordynacji międzybranżowej.`

Zakresy: `projekt budowlany`, `projekt techniczny`, `koordynacja branżowa`.

### Wykonawcy i generalni wykonawcy

`Opracowania potrzebne na etapie realizacji, zmian lub uszczegółowienia przyjętych rozwiązań.`

Zakresy: `dokumentacja wykonawcza`, `dokumentacja zamienna`, `dokumentacja warsztatowa`, `opracowania techniczne`.

## 5. Desktop layout

Asymetryczny grid, nie trzy równe karty. Biura projektowe zajmują 6 kolumn i dwa rzędy treści, dwie pozostałe grupy po 6 kolumn w prawym stosie. Wyróżnienie wynika z prawdopodobnego znaczenia segmentu, nie z koloru lub cienia. Wszystkie bloki współdzielą jedną ramę gridu i sparse separators.

## 6. Tablet

Biura projektowe na pełną szerokość, dwie pozostałe grupy po 4 kolumny poniżej. Opisy zachowują podobną wysokość optyczną bez wymuszania `min-height` kosztem whitespace.

## 7. Mobile layout

Jedna kolumna w kolejności: biura, architekci, wykonawcy. Każda grupa oddzielona jednym top border, padding 28-32 px block. Zakresy w krótkiej liście 2 kolumn tylko przy 390 px, jeśli nie powoduje łamania; przy 360 px jedna kolumna.

## 8. Typography

- H2: Manrope 700.
- H3: Manrope 700, 24-28 px.
- Opis: IBM Plex Sans 16 px, muted.
- Zakres: IBM Plex Sans 13-14 px, 500.

## 9. Spacing

- Section padding: 144/112/80 px.
- Header to grid: 56/40/36 px.
- Block padding: 32 px desktop, 28 px mobile.
- H3 to description: 16 px, description to scopes: 24 px.

## 10. UI elements

- Section header.
- Trzy `AudienceGroup`.
- Krótkie listy zakresów.
- Separatory w ramach wspólnego gridu.

## 11. Technical visual motif

`REKOMENDACJA`: każdy blok może mieć mały nagłówek roli `CLIENT TYPE` tylko jeśli liczba eyebrow na stronie pozostaje zgodna z design systemem. Preferowane jest użycie tytułu bez dodatkowego labelu. Grid i prostokątne bounding boxes pełnią rolę techniczną.

## 12. Interaction

Brak interakcji. Bloki nie są linkami w v1. Nie dodawać hover elevation.

## 13. Accessibility

- Każda grupa jako `article` z H3.
- Zakresy jako lista.
- Wyróżnienie pierwszej grupy nie może opierać się wyłącznie na kolorze.
- Kolejność DOM zgodna z priorytetem treści.

## 14. Responsive behaviour

Asymetryczny desktop przechodzi przez układ 1 + 2 na tablet do jednego stacku mobile. Nie zachowywać różnic wysokości na mobile.

## 15. React component

`AudienceSection`: renderuje segmenty klientów i sytuacje współpracy.

## 16. Możliwe komponenty pomocnicze

`SectionHeader`, `AudienceGroup`, `ScopeList`.

## 17. Content model

```ts
interface AudienceGroup {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly scopes: readonly string[];
  readonly emphasis?: "primary";
}
```

## 18. Acceptance criteria

- [ ] Są dokładnie trzy ustalone grupy klientów.
- [ ] Każda grupa ma konkretny kontekst współpracy i zakres.
- [ ] Desktop nie używa trzech równych kart.
- [ ] Mobile zachowuje kolejność priorytetów.
- [ ] Brak ikon postaci, budynków i kasków.
- [ ] Copy nie sugeruje wykonawstwa instalacji.
- [ ] Sekcja odpowiada na pytanie o dopasowanie klienta bez ogólników.

## 19. Czego nie robić

- Nie dodawać branż ani typów klientów spoza źródła.
- Nie stosować person marketingowych i fikcyjnych cytatów.
- Nie używać zdjęć stockowych.
- Nie tworzyć kart SaaS z ikoną, nagłówkiem i linkiem `Dowiedz się więcej`.
- Nie ukrywać zakresów w tabs.
