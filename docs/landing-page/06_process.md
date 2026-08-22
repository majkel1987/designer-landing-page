# 06. Process

## Oznaczenie decyzji

Cztery etapy i ich znaczenie są ustalone. Finalne zdania copy, timeline, numeracja, spacing i warianty responsive są `REKOMENDACJĄ` zgodną z Technical Minimal.

## 1. Cel sekcji

Pokazać przewidywalny przebieg współpracy od briefu do przekazania dokumentacji. Sekcja ma obniżyć obawę przed wdrożeniem zewnętrznego projektanta do istniejącego procesu.

## 2. Odbiorca

Szczególnie biura projektowe i generalni wykonawcy odpowiedzialni za termin, przepływ informacji i odbiór zakresu.

## 3. Kluczowy komunikat

Współpraca zaczyna się od jasnego zakresu i materiałów wejściowych, a kończy przekazaniem dokumentacji oraz obsługą uzgodnionych komentarzy.

## 4. Copy

- Headline: `Jak wygląda współpraca`
- Supporting: `Cztery etapy porządkują zakres, materiały wejściowe, opracowanie i przekazanie dokumentacji.`

### Zakres i brief

`Ustalamy potrzeby, odpowiedzialność, termin oraz oczekiwany format i poziom szczegółowości opracowania.`

### Analiza materiałów wejściowych

`Weryfikuję rzuty, wytyczne, modele, dane branżowe i wymagania inwestora potrzebne do rozpoczęcia prac.`

### Opracowanie dokumentacji

`Przygotowuję uzgodniony projekt, obliczenia lub wydzielony zakres wraz z bieżącą koordynacją.`

### Przekazanie i wsparcie

`Przekazuję dokumentację, odpowiadam na komentarze i wprowadzam uzgodnione korekty w ramach zakresu.`

## 5. Desktop layout

Pozioma technical timeline na 12 kolumn. Headline w pionowym stacku. Cztery kroki pod nim, każdy 3 kolumny. Jedna wspólna linia osi nad tytułami, z czterema węzłami. Numer `01-04` ma funkcję orientacyjną, ale tytuł etapu pozostaje główną etykietą. Tekst wyrównany do lewej.

## 6. Tablet

Grid 2x2. Oś pozioma zastąpiona dwoma krótkimi separatorami, aby nie sugerować błędnej kolejności przestrzennej. Numer i tytuł na górze każdego bloku.

## 7. Mobile layout

Pionowa lista. Wąska oś po lewej zajmuje 24 px, treść po prawej. Każdy etap ma minimum 28 px odstępu od następnego. Ostatnia linia kończy się przy ostatnim węźle. Copy nie jest ukrywane.

## 8. Typography

- H2: Manrope 700.
- Numer: IBM Plex Sans 12 px, 600, accent.
- Tytuł: Manrope 700, 22-24 px.
- Opis: IBM Plex Sans 15-16 px, muted, max-width 34ch.

## 9. Spacing

- Section padding: 112 px desktop, 88 px tablet, 64 px mobile.
- Header to timeline: 56/40/36 px.
- Node to title: 24 px desktop.
- Tytuł do opisu: 14 px.
- Mobile step padding bottom: 36 px.

## 10. UI elements

- Section header bez eyebrow.
- Cztery `ProcessStep`.
- Oś i węzły jako dekoracyjne CSS.
- Numery 01-04 jako tekst pomocniczy.

## 11. Technical visual motif

Timeline przypomina linię zależności na rysunku technicznym. Węzły są kwadratowe 8 x 8 px, nie okrągłe status dots. Pierwszy odcinek może używać accent, pozostałe border. Oś organizuje realne etapy.

## 12. Interaction

Sekcja statyczna. `REKOMENDACJA`: delikatna zmiana koloru węzła przy hover/focus elementu tylko jeśli cały etap stanie się linkiem w przyszłości. W v1 brak hover i scroll animation.

## 13. Accessibility

- Kroki jako uporządkowana lista `ol`.
- Numery mogą być generowane CSS, ale tytuły muszą jasno przekazywać kolejność.
- Oś `aria-hidden`.
- Copy nie opiera znaczenia wyłącznie na kolorze.

## 14. Responsive behaviour

4 kolumny desktop, 2x2 tablet, pionowa lista mobile. Zmiana osi nie może zmieniać kolejności DOM.

## 15. React component

`ProcessSection`: renderuje uporządkowaną listę czterech etapów i ich opisy.

## 16. Możliwe komponenty pomocnicze

`SectionHeader`, `ProcessTimeline`, `ProcessStep`.

## 17. Content model

```ts
interface ProcessStep {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}
```

## 18. Acceptance criteria

- [ ] Etapy występują w ustalonej kolejności.
- [ ] Każdy etap opisuje rezultat, nie ogólny slogan.
- [ ] Desktop ma jedną czytelną oś, mobile pionową.
- [ ] Tablet nie udaje osi 4-kolumnowej w dwóch rzędach.
- [ ] Numery nie zastępują tytułów.
- [ ] Sekcja działa bez JavaScript.
- [ ] Nie pojawia się obietnica nieograniczonej liczby poprawek.

## 19. Czego nie robić

- Nie używać kart z ikonami.
- Nie nazywać etapów generycznie `Krok 1` bez właściwego tytułu.
- Nie animować linii podczas scrollu.
- Nie wprowadzać terminów liczbowych bez danych.
- Nie sugerować, że każdy projekt ma identyczny workflow niezależnie od zakresu.
