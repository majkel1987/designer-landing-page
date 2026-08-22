# 10. FAQ

## Oznaczenie decyzji

Zakres dziesięciu tematów jest ustalony. Odpowiedzi, podział na grupy, zachowanie accordion i szczegóły responsive są `REKOMENDACJĄ` do weryfikacji biznesowej przed publikacją.

## 1. Cel sekcji

Usunąć najczęstsze obiekcje operacyjne przed kontaktem: zakres, model podwykonawstwa, wycena, terminy, materiały, narzędzia, NDA i współpraca długoterminowa.

## 2. Odbiorca

Każda grupa docelowa, szczególnie osoba gotowa przesłać brief, ale potrzebująca potwierdzenia zasad współpracy.

## 3. Kluczowy komunikat

Zakres i sposób współpracy są ustalane indywidualnie na podstawie materiałów wejściowych, odpowiedzialności, terminu i oczekiwanego rezultatu.

## 4. Copy

- Headline: `Najczęstsze pytania`

### Jakie typy projektów realizujesz?

`Realizuję projekty instalacji elektrycznych nn, dokumentację techniczną i wykonawczą oraz wybrane opracowania, obliczenia i schematy. Zakres może obejmować małe i średnie zadanie albo wydzieloną część większego projektu.`

### Czy współpracujesz z biurami projektowymi jako podwykonawca?

`Tak. Współpraca może mieć formę podwykonawstwa projektowego B2B, z odpowiedzialnością za uzgodniony zakres, termin i sposób przekazania dokumentacji.`

### Czy możesz przejąć tylko wydzielony zakres większego projektu?

`Tak. Zakres można ograniczyć do konkretnej instalacji, etapu dokumentacji, pakietu obliczeń, schematów lub innego jasno zdefiniowanego zadania.`

### Czy realizujesz mniejsze opracowania techniczne?

`Tak, jeśli zadanie ma jednoznaczne dane wejściowe, zakres i oczekiwany rezultat. Możliwość realizacji potwierdzam po krótkiej analizie materiałów.`

### Jak wygląda wycena?

`Wycena powstaje po określeniu zakresu, odpowiedzialności, terminu, materiałów wejściowych i formatu opracowania. Dzięki temu oferta odnosi się do realnego nakładu i oczekiwanego rezultatu.`

### Jak wygląda czas realizacji?

`Termin zależy od zakresu, jakości materiałów wejściowych, liczby uzgodnień i aktualnej dostępności. Po analizie briefu proponuję harmonogram oraz punkty przekazania.`

### Jakie materiały są potrzebne do rozpoczęcia współpracy?

`Najczęściej są to aktualne rzuty lub model, wytyczne inwestora, dane branżowe, wymagany etap dokumentacji, standard klienta i oczekiwany termin. Dokładna lista zależy od zadania.`

### Czy pracujesz w BIM / CAD?

`Tak, zakres może obejmować pracę z materiałami BIM i CAD. Format plików, wersje oprogramowania oraz standard wymiany należy potwierdzić przed rozpoczęciem.`

### Czy podpisujesz NDA?

`Tak, możliwa jest współpraca objęta umową poufności. Materiały i informacje projektowe są wykorzystywane wyłącznie w uzgodnionym zakresie.`

### Czy możliwa jest dłuższa współpraca B2B?

`Tak. Możliwe jest okresowe lub powtarzalne wsparcie przy kilku projektach, jeśli zakres odpowiedzialności, dostępność i sposób koordynacji zostaną jasno ustalone.`

## 5. Desktop layout

Grid 12 kolumn. Headline zajmuje 4 kolumny i może pozostać sticky w granicach sekcji jako `REKOMENDACJA`, tylko jeśli nie utrudnia zoomu. Accordion zajmuje kolumny 6-12. Dziesięć pytań podzielonych jest na dwie logiczne grupy wizualne bez tabs: `Zakres i model` oraz `Organizacja i formalności`. Każda grupa ma jeden top border, a pytania oddziela bottom border.

## 6. Tablet

Headline pełna szerokość, accordion poniżej. Dwie grupy pozostają. Brak sticky. Maksymalna szerokość odpowiedzi 65ch.

## 7. Mobile layout

Jedna kolumna. Trigger pełna szerokość, pytanie po lewej, chevron 24 px po prawej. Padding 20 px block. Odpowiedź padding bottom 24 px i right 32 px. Target minimum 48 px. Domyślnie wszystkie elementy zamknięte lub pierwszy otwarty jako `REKOMENDACJA`; preferowane wszystkie zamknięte, ponieważ intro nie wymaga odpowiedzi.

## 8. Typography

- H2: Manrope 700.
- Group label: IBM Plex Sans 12 px, 600, tracking 0.08em. To jedna z nielicznych etykiet technicznych na stronie.
- Pytanie: Manrope 600, 18-20 px.
- Odpowiedź: IBM Plex Sans 16 px, muted, line-height 1.65.

## 9. Spacing

- Section: 144/112/80 px.
- Header to accordion mobile/tablet: 40/48 px.
- Między grupami: 48 px.
- Trigger: 20-24 px block.
- Pytanie do odpowiedzi: 8-12 px.

## 10. UI elements

- Dwie grupy tematyczne.
- Dziesięć accordion items.
- Trigger z chevron lub znakiem plus/minus.
- Odpowiedź jako panel powiązany z triggerem.

## 11. Technical visual motif

Accordion przypomina indeks dokumentacji: precyzyjna kolumna tytułów, grupowanie i pojedyncze linie. Bez numerowania wszystkich pytań, aby nie tworzyć dekoracyjnego indeksu.

## 12. Interaction

- Kliknięcie lub Enter/Space rozwija odpowiedź.
- Dozwolone wiele otwartych pozycji, jeśli używany jest natywny `details`.
- Chevron obraca się 180 stopni w 180 ms; reduced motion usuwa obrót.
- Nie animować wysokości, jeśli wymaga to pomiarów i powoduje skoki.

## 13. Accessibility

- Preferowany natywny `details` i `summary` po usunięciu domyślnego markera w sposób niełamący semantyki.
- Alternatywnie button z `aria-expanded`, `aria-controls` i unikalnym ID panelu.
- Focus-visible na całym triggerze.
- Kolejność pytań logiczna, odpowiedź bez ukrytych linków wymagających osobnego kontekstu.

## 14. Responsive behaviour

Split z opcjonalnym sticky headline działa wyłącznie desktop. Tablet i mobile używają pionowego flow. Długa treść nie może powodować zmiany szerokości accordion.

## 15. React component

`FaqSection`: renderuje grupy pytań i dostępne elementy accordion. Stan tylko wtedy, gdy nie użyto natywnego `details`.

## 16. Możliwe komponenty pomocnicze

`FaqGroup`, `FaqItem`, `AccordionIcon`.

## 17. Content model

```ts
interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

interface FaqGroup {
  readonly title: string;
  readonly items: readonly FaqItem[];
}
```

## 18. Acceptance criteria

- [ ] Jest dokładnie dziesięć wymaganych tematów FAQ.
- [ ] Każda odpowiedź jest konkretna i nie wymyśla cen, terminów ani formatów.
- [ ] Accordion działa klawiaturą i komunikuje stan AT.
- [ ] Target triggera ma minimum 48 px wysokości.
- [ ] Przy 360 px pytanie nie nachodzi na ikonę.
- [ ] Reduced motion nie blokuje dostępu do odpowiedzi.
- [ ] NDA, BIM/CAD i dłuższa współpraca B2B są jawnie opisane.

## 19. Czego nie robić

- Nie dodawać FAQ schema z treścią inną niż widoczna na stronie.
- Nie odpowiadać konkretną ceną lub czasem bez danych.
- Nie używać tooltipów i hover-only answers.
- Nie zamykać automatycznie poprzedniej odpowiedzi, jeśli utrudnia porównanie.
- Nie dodawać wyszukiwarki do dziesięciu pytań.
