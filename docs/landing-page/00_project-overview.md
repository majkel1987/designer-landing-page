# 00. Project overview

## Status dokumentu

Nadrzędna specyfikacja produktu dla landing page Michała Sarnackiego. Dokument należy czytać łącznie z `01_design-system.md`, `13_responsive.md` i specyfikacją aktualnie wdrażanej sekcji. Ustalenia źródłowe mają pierwszeństwo przed rekomendacjami.

## Design read

`REKOMENDACJA` interpretacyjna na potrzeby implementacji:

Landing page B2B dla technicznych decydentów, z językiem spokojnym, precyzyjnym i eksperckim, oparty na autorskim systemie Technical Minimal w React, TypeScript i CSS Modules.

- `DESIGN_VARIANCE: 5` - kontrolowana asymetria i architektoniczny rytm.
- `MOTION_INTENSITY: 3` - stany interakcji i krótkie przejścia bez widowiskowych animacji.
- `VISUAL_DENSITY: 4` - dużo whitespace, ale zakres usług pozostaje konkretny.

## Cel biznesowy

Strona ma pozyskiwać zapytania od organizacji potrzebujących kompetentnego, zewnętrznego wsparcia projektowego w branży elektrycznej. Ma skrócić drogę od oceny dopasowania specjalisty do przesłania konkretnego briefu.

Pożądane zlecenia:

- projekty instalacji elektrycznych nn;
- dokumentacja techniczna, wykonawcza, zamienna, warsztatowa i powykonawcza;
- obliczenia, dobory, schematy i koordynacja elektryczna;
- wydzielone zakresy większych projektów;
- okresowe wsparcie zespołów projektowych i współpraca B2B;
- małe i średnie opracowania techniczne, jeśli zakres i rezultat są jednoznaczne.

Poza celem:

- wykonawstwo i montaż instalacji;
- komunikowanie dostępności jako pracy po godzinach;
- konkurencja najniższą ceną;
- budowanie wizerunku początkującego freelancera;
- przypadkowe zlecenia bez określonego zakresu lub odpowiedzialności.

## Pozycjonowanie

Michał Sarnacki działa jako `independent electrical design consultant`: niezależny projektant, który może przejąć jasno wydzielony zakres oraz odpowiadać za uzgodniony rezultat. Model współpracy obejmuje:

- `external design support` jako wsparcie poza stałym zespołem klienta;
- `project-based engineering support` dla konkretnego projektu lub etapu;
- `extension of engineering team` przy przeciążeniu, równoległych terminach lub braku kompetencji branżowej;
- podwykonawstwo projektowe B2B z jasną odpowiedzialnością, terminem i formatem przekazania.

Strona sprzedaje kompetencje, odpowiedzialność i zdolność do przejęcia zakresu. Nie sprzedaje godzin pracy.

## Grupy docelowe

### Biura projektowe

Potrzebują zwiększyć moce projektowe, powierzyć wydzielony zakres lub utrzymać termin przy równoległych projektach. Najważniejsze są przewidywalność, jakość dokumentacji i sprawna komunikacja techniczna.

### Architekci i pracownie

Potrzebują partnera branżowego do projektu budowlanego, technicznego i koordynacji. Najważniejsze są czytelne wymagania wejściowe, koordynacja oraz rozwiązania zgodne z architekturą.

### Generalni wykonawcy

Potrzebują dokumentacji wykonawczej, zamiennej, warsztatowej lub szybkiego opracowania technicznego w ramach realizowanego kontraktu.

### Wykonawcy branżowi

Potrzebują dokumentacji wspierającej realizację, doborów, schematów i opracowań dla określonego zakresu instalacji.

## Kluczowa propozycja wartości

Klient otrzymuje doświadczonego projektanta, który rozumie dokumentację budynkową, koordynację wielobranżową i realia pracy zespołu projektowego. Może przekazać jasno zdefiniowany zakres bez budowania stałego etatu, a rezultat pozostaje czytelny, skoordynowany i przygotowany do dalszego wykorzystania w projekcie.

## Architektura strony

1. Header
2. Hero
3. Proof Bar
4. Services
5. Process
6. Who I Work With
7. Experience
8. About
9. FAQ
10. Contact CTA
11. Footer

`REKOMENDACJA` identyfikatorów kotwic:

| Sekcja | ID |
| --- | --- |
| Services | `uslugi` |
| Process i Who I Work With | `wspolpraca` na początku Process |
| About | `o-mnie` |
| Contact | `kontakt` |

## Conversion goals

Primary: `Omów projekt`. Ten tekst oznacza przejście do sekcji kontaktowej i ma pozostać identyczny w Header oraz Hero.

Secondary: `Zobacz zakres usług`. Prowadzi do `#uslugi`.

Final CTA w sekcji kontaktowej: `Napisz wiadomość`. Jest to działanie kanałowe po podjęciu decyzji, nie alternatywna etykieta głównej intencji.

## Główna ścieżka użytkownika

1. Użytkownik rozpoznaje specjalizację i model współpracy w Hero.
2. Proof Bar potwierdza podstawowe kompetencje.
3. Services pozwala zweryfikować konkretny zakres.
4. Process i Who I Work With obniżają ryzyko współpracy.
5. Experience i About budują zaufanie bez naruszania NDA.
6. FAQ usuwa obiekcje operacyjne.
7. Contact CTA prowadzi do przesłania zakresu.

## Strategia treści i języka

- Główna treść: polski.
- Ustalony headline Hero pozostaje po angielsku.
- Angielskie określenia modelu współpracy można stosować w dokumentacji i metadanych, lecz w widocznym copy powinny mieć naturalny polski kontekst.
- Copy ma mówić o zakresie, odpowiedzialności, współpracy i rezultacie.
- Zdania krótkie, bez superlatyw, sloganów i obietnic bez pokrycia.

`REKOMENDACJA`: uruchomić wersję polską jako jedyną w v1. Struktura treści powinna być gotowa do późniejszego i18n, ale przełącznik PL/EN należy dodać dopiero po przygotowaniu pełnego copy EN.

## Główne ograniczenia

- NDA: nie używać nazw klientów, inwestycji, lokalizacji, wartości ani parametrów pozwalających zidentyfikować projekt.
- Nie wymyślać liczb, lat doświadczenia, liczby projektów, certyfikatów ani nazw oprogramowania poza BIM/CAD.
- Nie komunikować pracy po godzinach ani ograniczonej dostępności etatowej.
- Nie pozycjonować marki jako taniego freelancera.
- Nie sugerować wykonawstwa, montażu ani serwisu instalacji.
- Nie stosować stockowych zdjęć ludzi w kaskach, kabli, gniazdek i piorunów.
- Nie budować logo wall, jeśli nie ma zgody na ujawnienie klientów.
- Nie przedstawiać rekomendacji jako ustalonego faktu.

## Kryteria sukcesu

- Użytkownik w pierwszym viewport rozumie specjalizację, odbiorcę i następny krok.
- Pełny zakres usług można przeskanować w mniej niż minutę.
- Każda grupa docelowa znajduje własny przypadek użycia.
- Doświadczenie jest wiarygodne bez nazw projektów i niepotwierdzonych liczb.
- CTA `Omów projekt` jest widoczne w Header i Hero, a kontakt dostępny klawiaturą.
- Widok 360 px nie wymaga poziomego przewijania.
- Charakter strony pozostaje bliższy butikowej konsultacji inżynierskiej niż portfolio lub SaaS.

## Źródła szczegółowe

- System wizualny: `01_design-system.md`
- Sekcje: `02_header.md` do `12_footer.md`
- Responsywność: `13_responsive.md`
- Reguły implementacji: `14_implementation-rules.md`
