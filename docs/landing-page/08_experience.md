# 08. Experience

## Oznaczenie decyzji

Obszary doświadczenia i zasada NDA są ustalone. Finalne copy, macierz odpowiedzialności, układ i technical motif są `REKOMENDACJĄ`; nie stanowią nowych twierdzeń o projektach.

## 1. Cel sekcji

Zbudować wiarygodność przez rodzaj odpowiedzialności i środowisko pracy, bez ujawniania informacji objętych NDA i bez wymyślania case studies.

## 2. Odbiorca

Klienci oceniający ryzyko jakościowe: kierownicy projektów, liderzy branżowi, architekci i generalni wykonawcy.

## 3. Kluczowy komunikat

Doświadczenie obejmuje złożone projekty, prowadzenie zespołu, pracę międzynarodową i koordynację wielobranżową przy wysokich wymaganiach dokumentacyjnych.

## 4. Copy

- Headline: `Doświadczenie, które wspiera złożone projekty`
- Intro: `Praktyka projektowa obejmuje odpowiedzialność za dokumentację, koordynację oraz pracę zespołową w wymagającym środowisku projektowym.`

Obszary doświadczenia:

### Złożone projekty budynkowe i infrastrukturalne

`Praca nad zakresami wymagającymi koordynacji rozwiązań elektrycznych z architekturą, konstrukcją i pozostałymi branżami.`

### Prowadzenie zespołu projektowego

`Organizacja pracy, kontrola jakości dokumentacji i komunikacja potrzebna do utrzymania spójnego rezultatu.`

### Środowisko międzynarodowe

`Doświadczenie w pracy z wymaganiami, standardami dokumentacji i komunikacją właściwą dla zespołów międzynarodowych.`

### Jakość dokumentacji

`Nacisk na czytelność, koordynację i poziom opracowania dopasowany do etapu projektu.`

NDA note: `Szczegóły wybranych realizacji pozostają poufne. Zakres doświadczenia prezentowany jest bez nazw inwestycji i danych umożliwiających ich identyfikację.`

## 5. Desktop layout

Sekcja w układzie 5/7. Po lewej headline i intro, po prawej pionowa macierz czterech obszarów. Macierz ma dwie kolumny i dwa rzędy, ale nie wygląda jak osobne cards: wspólne obramowanie, jeden pionowy i jeden poziomy separator. NDA note na pełną szerokość pod macierzą w spokojnym panelu z accent rule.

## 6. Tablet

Headline pełna szerokość, macierz 2x2 pod spodem. NDA note poniżej. Bez sticky text.

## 7. Mobile layout

Jedna kolumna. Obszary jako cztery bloki z jednym separatorem pomiędzy. NDA note z padding 20 px i lewą linią accent. Nie używać akordeonu.

## 8. Typography

- H2: Manrope 700.
- H3: Manrope 700, 22-24 px.
- Intro: IBM Plex Sans body large.
- Opisy: IBM Plex Sans 15-16 px, muted.
- NDA note: IBM Plex Sans 14 px, 500.

## 9. Spacing

- Section: 144/112/80 px.
- Intro to matrix na tablet/mobile: 48/36 px.
- Experience cell: 32 px desktop, 28 px mobile.
- H3 to description: 14 px.
- Matrix to NDA: 32 px.

## 10. UI elements

- Section header.
- Cztery experience areas.
- NDA notice.
- Brak statystyk, logo i nazw projektów.

## 11. Technical visual motif

Macierz przypomina zestaw pól odpowiedzialności na arkuszu koordynacyjnym. `REKOMENDACJA`: krótkie kody `EXP-A` do `EXP-D` można dodać jako captions wewnątrz pól, ale nie są konieczne. Nie używać miniatur rzutów bez realnego, zanonimizowanego materiału.

## 12. Interaction

Sekcja statyczna. Brak carousel, hover reveal i modalnych case studies.

## 13. Accessibility

- Obszary jako lista lub grupa `article` z prawidłowymi H3.
- NDA note jako zwykły tekst, nie tooltip.
- Nie używać skrótów bez rozwinięcia.
- Nie sugerować statystyk przez dekoracyjne wykresy.

## 14. Responsive behaviour

Split desktop przechodzi do pionowego nagłówka i macierzy na tablet, następnie do listy na mobile. NDA zawsze po obszarach.

## 15. React component

`ExperienceSection`: prezentuje anonimowe obszary doświadczenia oraz stałą informację NDA.

## 16. Możliwe komponenty pomocnicze

`ExperienceMatrix`, `ExperienceArea`, `NdaNotice`.

## 17. Content model

```ts
interface ExperienceArea {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

interface ExperienceContent {
  readonly headline: string;
  readonly intro: string;
  readonly areas: readonly ExperienceArea[];
  readonly ndaNote: string;
}
```

## 18. Acceptance criteria

- [ ] Sekcja komunikuje projekty złożone, prowadzenie zespołu, środowisko międzynarodowe, koordynację i jakość.
- [ ] Nie zawiera nazw klientów, projektów, lokalizacji ani identyfikujących parametrów.
- [ ] Nie zawiera niepotwierdzonych liczb i lat.
- [ ] NDA note jest widoczny, nie ukryty.
- [ ] Mobile prezentuje wszystkie obszary bez interakcji.
- [ ] Copy opisuje odpowiedzialność i środowisko, nie marketingowe superlatywy.

## 19. Czego nie robić

- Nie tworzyć fikcyjnych case studies i nazw obiektów.
- Nie używać placeholderów typu `Projekt A, 50 000 m²`.
- Nie dodawać wykresów doświadczenia, procentów i logotypów klientów.
- Nie publikować screenshotów dokumentacji bez osobnego review NDA.
- Nie obiecywać znajomości konkretnych standardów, których nie ma w źródle.
