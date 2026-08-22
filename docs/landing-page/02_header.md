# 02. Header

## Oznaczenie decyzji

Copy i elementy wymienione w źródle są ustalone. Konkretne wartości layoutu, breakpoint przełączenia menu, spacing i zachowanie panelu mobilnego są `REKOMENDACJĄ` zgodną z Technical Minimal.

## 1. Cel sekcji

Zapewnić natychmiastową identyfikację eksperta, orientację w stronie i najkrótszą drogę do rozmowy o projekcie. Header ma wspierać konwersję bez dominowania nad Hero.

## 2. Odbiorca

Wszystkie grupy, szczególnie użytkownik powracający, który chce szybko przejść do zakresu lub kontaktu.

## 3. Kluczowy komunikat

To osobista marka niezależnego projektanta instalacji elektrycznych. Najważniejsze informacje i kontakt są dostępne w jednym ruchu.

## 4. Copy

- Brand: `Michał Sarnacki`
- Descriptor: `Electrical Design Engineer`
- Navigation: `Usługi`, `Współpraca`, `O mnie`, `Kontakt`
- CTA: `Omów projekt`
- Mobile menu button: `Menu`
- Close accessible label: `Zamknij menu`

Linki: `#uslugi`, `#wspolpraca`, `#o-mnie`, `#kontakt`. CTA prowadzi do `#kontakt`.

## 5. Desktop layout

Pełna szerokość sticky wrapper, wewnątrz kontener 1280 px. Wysokość 72 px. Grid: brand 4 kolumny, nawigacja 5 kolumn, CTA 3 kolumny z wyrównaniem do prawej. Brand ma dwa wiersze o zwartej wysokości. Nawigacja i CTA muszą mieścić się w jednym wierszu.

## 6. Tablet

Poniżej 1024 px przejść na menu mobilne, jeśli pełna nawigacja nie mieści się bez ścisku. Brand pozostaje po lewej, `Menu` po prawej. CTA przenieść do otwartego panelu.

## 7. Mobile layout

Wysokość 64 px. Przy 390 px wyświetlać nazwisko oraz mniejszy descriptor. Przy 360 px descriptor może zostać wizualnie ukryty, ale nazwa pozostaje. Panel menu otwiera się pod nagłówkiem na całą szerokość viewportu, zawiera cztery linki i pełnoszeroki CTA. Padding 20 px, gap 20 px, link minimum 48 px wysokości.

## 8. Typography

- Brand: Manrope 16 px, 700, line-height 1.1.
- Descriptor: IBM Plex Sans 11 px, 500, muted.
- Navigation: IBM Plex Sans 14 px, 500.
- CTA: IBM Plex Sans 15 px, 600.

## 9. Spacing

- Container gutters zgodne z design systemem.
- Brand gap: 3 px.
- Navigation gap: 28 px desktop.
- Menu panel: 24 px padding block, 20 px gap.

## 10. UI elements

- Text wordmark.
- Landmark `header` i `nav aria-label="Główna nawigacja"`.
- Cztery anchor links.
- `ButtonLink` primary.
- Mobile menu button z prostą dwuliniową ikoną lub tekstem.
- Skip link przed Header: `Przejdź do treści`.

## 11. Technical visual motif

Dolny separator 1 px. `REKOMENDACJA`: krótki 48 px odcinek w kolorze accent pod brandem może wskazywać aktywny obszar, ale tylko jeśli zostanie powiązany ze stanem nawigacji. Nie dodawać dekoracyjnej siatki.

## 12. Interaction

- Sticky: `position: sticky; top: 0; z-index: var(--z-header)`.
- Tło nieprzezroczyste `--color-bg`, bez blur.
- Hover linku: accent lub animacja podkreślenia 180 ms.
- Mobile menu: otwórz/zamknij, Escape, zamknięcie po wyborze linku.
- Bez ukrywania Header przy scrollu.

## 13. Accessibility

- Przycisk menu ma `aria-expanded` i `aria-controls`.
- Focus zostaje przeniesiony do pierwszego linku po otwarciu lub pozostaje w logicznym porządku; po zamknięciu wraca do triggera.
- Scroll tła zablokowany przy otwartym menu.
- Link aktywnej sekcji może użyć `aria-current="location"`, tylko jeśli stan jest wiarygodnie śledzony.
- Target minimum 44 x 44 px.

## 14. Responsive behaviour

Desktop navigation działa od 1024 px, jeśli mieści się w jednym wierszu. Poniżej używać jednego spójnego menu. Nie wprowadzać osobnego wariantu tabletowego z uciętymi linkami.

## 15. React component

`Header`: renderuje brand, nawigację, CTA i kontroluje stan menu mobilnego. Nie śledzi scroll position.

## 16. Możliwe komponenty pomocnicze

`BrandLockup`, `PrimaryNavigation`, `MobileMenu`, `ButtonLink`, `SkipLink`.

## 17. Content model

```ts
interface NavigationItem {
  readonly label: string;
  readonly href: `#${string}`;
}

interface HeaderContent {
  readonly name: string;
  readonly role: string;
  readonly navigation: readonly NavigationItem[];
  readonly cta: NavigationItem;
}
```

## 18. Acceptance criteria

- [ ] Header ma maksymalnie 72 px na desktop i 64 px na mobile.
- [ ] Desktop navigation nie zawija się.
- [ ] Wszystkie linki prowadzą do istniejących ID.
- [ ] Menu działa myszą, dotykiem, Tab, Shift+Tab i Escape.
- [ ] Focus wraca do triggera po zamknięciu.
- [ ] Tło Header jest czytelne nad każdą sekcją.
- [ ] CTA ma dokładny tekst `Omów projekt`.

## 19. Czego nie robić

- Nie dodawać logo-symbolu bez briefu.
- Nie stosować przezroczystego glass header.
- Nie dodawać social icons, language switchera ani statusu dostępności w v1.
- Nie ukrywać nazwiska na mobile.
- Nie budować pełnoekranowego, animowanego mega menu.
