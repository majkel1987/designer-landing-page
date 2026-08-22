# 05. Services

## Oznaczenie decyzji

Nazwy grup i pełny zakres usług są ustalone. Opisy grup, kody S-01 do S-03, podział gridu, typografia sekcji i zachowanie responsive są `REKOMENDACJĄ` zgodną z Technical Minimal.

## 1. Cel sekcji

Pozwolić klientowi jednoznacznie sprawdzić, czy oczekiwany zakres może zostać przejęty. To główna sekcja sprzedażowa po Hero.

## 2. Odbiorca

Biura projektowe, architekci, generalni wykonawcy i wykonawcy branżowi porównujący konkretny zakres dokumentacji.

## 3. Kluczowy komunikat

Wsparcie obejmuje kompletne opracowania, wyspecjalizowane zadania techniczne oraz wydzielone zakresy realizowane jako część zespołu klienta.

## 4. Copy

- Headline: `Zakres usług`
- Supporting: `Możliwa współpraca przy małych, średnich oraz wydzielonych zakresach większych projektów.`

### S-01 Projekty i dokumentacja

`Dokumentacja branży elektrycznej przygotowana dla uzgodnionego etapu i sposobu wykorzystania.`

- Projekty instalacji elektrycznych nn
- Projekty techniczne
- Projekty wykonawcze
- Dokumentacja zamienna
- Dokumentacja warsztatowa
- Dokumentacja powykonawcza

### S-02 Opracowania techniczne

`Obliczenia, dobory i schematy potrzebne do rozwinięcia lub zamknięcia konkretnego zakresu.`

- Bilanse mocy
- Dobór kabli
- Dobór zabezpieczeń
- Schematy rozdzielnic
- Projekty oświetlenia
- Projekty oświetlenia awaryjnego
- Uziemienie
- Instalacja odgromowa LPS
- Zasilanie HVAC
- Zasilanie technologii
- Trasy kablowe

### S-03 Wsparcie dla biur projektowych

`Elastyczne wsparcie B2B włączone w istniejący proces projektowy i standard dokumentacji zespołu.`

- Wydzielone zakresy większych projektów
- Okresowe wsparcie projektowe
- Współpraca B2B
- Koordynacja elektryczna
- Wsparcie przy przeciążeniu zespołu
- Wsparcie przy dokumentacji technicznej

## 5. Desktop layout

Nagłówek w pionowym stacku, max-width 720 px. Poniżej trzy poziome grupy techniczne, każda na gridzie 12 kolumn: kod 1 kolumna, tytuł i opis 3 kolumny, zakres 8 kolumn. Lista zakresu dzieli się wewnętrznie na 2 kolumny. Między grupami jeden separator. Nie zamykać grup w osobnych kartach.

## 6. Tablet

Każda grupa: pierwszy rząd kod + tytuł, drugi opis, trzeci lista 2 kolumny. Grid 8 kolumn. S-02 może mieć nierówne kolumny 6/5 elementów.

## 7. Mobile layout

Jedna kolumna. Kod i tytuł w jednym wierszu, opis pod spodem, lista podzielona semantycznie na 2 krótsze podlisty, lecz wizualnie jedna kolumna. Padding grupy 32 px block. Nie używać poziomego scrollu ani accordion, aby zakres był od razu dostępny.

## 8. Typography

- H2: Manrope 700, `var(--type-h2)`.
- Group code: IBM Plex Sans 12 px, 600, accent, tracking 0.1em.
- H3: Manrope 700, 24-26 px.
- Group description: IBM Plex Sans 16 px, muted.
- Item: IBM Plex Sans 15-16 px, text.

## 9. Spacing

- Section: 144 px desktop, 112 px tablet, 80 px mobile.
- Header to groups: 64/48/40 px.
- Group padding: 48 px desktop, 40 px tablet, 32 px mobile.
- List gap: 14 px row, 32 px column.

## 10. UI elements

- `SectionHeader` bez eyebrow.
- Trzy `ServiceGroup`.
- Kody S-01 do S-03.
- Grouped lists, nie bullet wall.
- Sparse separators.

## 11. Technical visual motif

Kody S-01, S-02, S-03 działają jak oznaczenia zakresów na arkuszu. `REKOMENDACJA`: pionowa linia łączy kod z początkiem grupy tylko na desktop, jeśli wynika z gridu. Bez fikcyjnych parametrów i dekoracyjnych crosshair.

## 12. Interaction

Sekcja statyczna. Dopuszczalny hover całego wiersza tylko jeśli prowadzi do przyszłej podstrony, czego v1 nie zakłada. Nie zwijać list.

## 13. Accessibility

- `section aria-labelledby="services-title"`.
- Każda grupa jako `article` z H3.
- Zakresy jako prawdziwe listy.
- Kody nie zastępują tytułów.
- Kolumnowanie CSS nie może zmieniać kolejności DOM.

## 14. Responsive behaviour

Layout 1/3/8 na desktop przechodzi do pionowego stacku. Wewnętrzna lista 2 kolumny do 640 px, potem 1 kolumna. Cała treść zawsze widoczna.

## 15. React component

`ServicesSection`: renderuje nagłówek i dane trzech grup usług bez stanu.

## 16. Możliwe komponenty pomocnicze

`SectionHeader`, `ServiceGroup`, `ServiceList`, `TechnicalCode`.

## 17. Content model

```ts
interface ServiceGroup {
  readonly id: `S-0${1 | 2 | 3}`;
  readonly title: string;
  readonly description: string;
  readonly items: readonly string[];
}
```

## 18. Acceptance criteria

- [ ] Są dokładnie trzy grupy S-01, S-02 i S-03.
- [ ] Każdy zakres z dokumentu źródłowego występuje raz.
- [ ] Na desktop listy są skanowalne w dwóch kolumnach.
- [ ] Na mobile wszystkie pozycje są widoczne bez accordion.
- [ ] Nie ma trzech dużych kart SaaS.
- [ ] Separatory nie występują pod każdą pojedynczą pozycją.
- [ ] Supporting copy nie obiecuje pełnej obsługi poza ustalonym zakresem.

## 19. Czego nie robić

- Nie dodawać ikon usług.
- Nie grupować każdej pozycji w card lub pill.
- Nie wymyślać branż, norm, narzędzi i uprawnień.
- Nie używać cennika ani etykiet `od`.
- Nie ukrywać długiej grupy technicznej za interakcją.
