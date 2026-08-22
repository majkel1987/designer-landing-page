# 12. Footer

## Oznaczenie decyzji

Brand, rola, trzy linki i copyright są ustalone. Grid, spacing, sposób aktualizacji roku i zachowanie responsive są `REKOMENDACJĄ` zgodną z Technical Minimal.

## 1. Cel sekcji

Domknąć stronę, powtórzyć identyfikację eksperta i zapewnić podstawową nawigację bez konkurowania z Contact CTA.

## 2. Odbiorca

Użytkownik na końcu strony oraz osoba szukająca szybkiego powrotu do kluczowej sekcji.

## 3. Kluczowy komunikat

Michał Sarnacki, Electrical Design Engineer. Najważniejsze sekcje pozostają dostępne na końcu dokumentu.

## 4. Copy

- `Michał Sarnacki`
- `Electrical Design Engineer`
- Links: `Usługi`, `O mnie`, `Kontakt`
- Copyright: `© 2026 Michał Sarnacki`

`REKOMENDACJA`: rok może być generowany programowo, jeśli zespół akceptuje automatyczną zmianę. W przeciwnym razie pozostawić 2026 zgodnie ze źródłem.

## 5. Desktop layout

Border top. Pierwszy rząd grid 12 kolumn: brand 6 kolumn, trzy linki wyrównane do prawej w pozostałych 6. Drugi rząd po 48 px zawiera copyright po lewej. Footer ma dużo oddechu, lecz nie tworzy osobnego hero.

## 6. Tablet

Brand 4 z 8 kolumn, linki 4 z 8. Copyright poniżej na pełną szerokość.

## 7. Mobile layout

Jedna kolumna. Brand, descriptor, pionowa lista linków, copyright. Link minimum 44 px wysokości. Padding 64 px top, 32 px bottom. Brak accordion.

## 8. Typography

- Brand: Manrope 18 px, 700.
- Descriptor: IBM Plex Sans 12 px, muted.
- Links: IBM Plex Sans 14 px, 500.
- Copyright: IBM Plex Sans 12 px, muted.

## 9. Spacing

- Section padding: 72 px top, 32 px bottom desktop; 64/32 mobile.
- Brand gap: 4 px.
- Desktop nav gap: 28 px.
- Mobile brand to nav: 36 px, nav to copyright: 40 px.

## 10. UI elements

- Brand lockup.
- Footer navigation z trzema anchor links.
- Copyright.
- Opcjonalny privacy link tylko po powstaniu dokumentu prawnego.

## 11. Technical visual motif

Jedna górna linia i ścisłe wyrównanie do gridu. To wystarczający motyw. Nie dodawać numeru wersji, współrzędnych, zegara ani fikcyjnego pola rewizji.

## 12. Interaction

- Link hover i focus zgodne z systemem.
- Anchor links korzystają z globalnego zachowania scroll.
- Brak `back to top`, chyba że test użyteczności wykaże potrzebę. `REKOMENDACJA`: pominąć w v1.

## 13. Accessibility

- `footer` landmark.
- `nav aria-label="Nawigacja w stopce"`.
- Copyright jako tekst.
- Linki mają widoczny focus i target minimum 44 px na mobile.

## 14. Responsive behaviour

Poziomy layout desktop i tablet przechodzi do jednego stacku mobile. Linki nie tworzą dwóch przypadkowych kolumn przy 360 px.

## 15. React component

`Footer`: renderuje brand, skróconą nawigację i copyright. Bez stanu.

## 16. Możliwe komponenty pomocnicze

`BrandLockup`, `FooterNavigation`.

## 17. Content model

```ts
interface FooterContent {
  readonly name: string;
  readonly role: string;
  readonly navigation: readonly {
    readonly label: string;
    readonly href: `#${string}`;
  }[];
  readonly copyright: string;
}
```

## 18. Acceptance criteria

- [ ] Footer zawiera nazwę, rolę, trzy ustalone linki i copyright.
- [ ] Linki prowadzą do istniejących sekcji.
- [ ] Footer nie powtarza głównego CTA z Contact.
- [ ] Brak wersji builda, lokalnego czasu i dekoracyjnych metadanych.
- [ ] Przy 360 px każdy link ma minimum 44 px targetu.
- [ ] Layout korzysta z tych samych gutters i border co reszta strony.

## 19. Czego nie robić

- Nie dodawać newslettera, social feed i dodatkowego CTA.
- Nie powtarzać pełnej nawigacji z Header.
- Nie dodawać fikcyjnych danych firmy, NIP ani adresu.
- Nie umieszczać linku do polityki prywatności, dopóki dokument nie istnieje.
- Nie stosować dark footer ani dużego logo-symbolu.
