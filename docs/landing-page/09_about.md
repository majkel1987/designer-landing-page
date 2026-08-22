# 09. About

## Oznaczenie decyzji

Kierunek bio i wymagane akcenty są ustalone. Finalne copy, kompozycja, proof list oraz sposób użycia opcjonalnego portretu są `REKOMENDACJĄ` zgodną z Technical Minimal.

## 1. Cel sekcji

Zbudować zaufanie do osoby odpowiedzialnej za pracę, bez tworzenia klasycznego CV. Sekcja ma połączyć uprawnienia, doświadczenie i sposób współpracy.

## 2. Odbiorca

Klient, który potwierdził dopasowanie zakresu i chce ocenić odpowiedzialność, komunikację oraz praktyczne podejście projektanta.

## 3. Kluczowy komunikat

Za projektem stoi uprawniony projektant instalacji elektrycznych, pracujący w sposób uporządkowany, odpowiedzialny i świadomy koordynacji wielobranżowej.

## 4. Copy

- Headline: `O mnie`
- Main copy: `Jestem projektantem instalacji elektrycznych z uprawnieniami do projektowania. Specjalizuję się w dokumentacji projektowej i technicznej dla obiektów budowlanych. Wspieram biura projektowe, architektów i wykonawców w opracowaniu rzetelnych, przemyślanych rozwiązań elektrycznych.`
- Supporting copy: `W pracy łączę praktyczne podejście, odpowiedzialność za uzgodniony zakres, pracę względem uzgodnionych terminów, komunikację techniczną i koordynację z pozostałymi branżami.`

Proof points:

- `Uprawnienia budowlane do projektowania`
- `Doświadczenie w projektach wielobranżowych`
- `Wsparcie B2B i podwykonawstwo projektowe`

`REKOMENDACJA`: przed publikacją zweryfikować dokładną, prawną nazwę uprawnień i zastąpić ogólny proof point, jeśli właściciel chce podać pełne brzmienie.

## 5. Desktop layout

Grid 12 kolumn. Headline i opcjonalne pole na autentyczny portret zajmują 4 kolumny. Main copy zajmuje 5 kolumn, proof points 3 kolumny. Jeśli nie ma profesjonalnego portretu, nie tworzyć placeholdera. Wtedy headline zajmuje 4 kolumny, copy 5, proof 3, a whitespace jest celowy.

## 6. Tablet

Headline pełna szerokość. Main copy 5 z 8 kolumn, proof points 3 z 8. Portret, jeśli istnieje, umieścić nad proof points i nie przekraczać 280 px wysokości.

## 7. Mobile layout

Jedna kolumna: headline, main copy, supporting copy, proof points. Jeśli istnieje portret, umieścić go między headline a copy lub po copy, zależnie od jakości kadru; `REKOMENDACJA`: po copy, aby kompetencje pozostały pierwsze. Proof points jako lista z jednym separatorem między pozycjami.

## 8. Typography

- H2: Manrope 700.
- Main copy: Manrope 500 lub IBM Plex Sans 20 px. `REKOMENDACJA`: IBM Plex Sans 20 px dla spójności technicznej.
- Supporting: IBM Plex Sans 16 px, muted.
- Proof: IBM Plex Sans 14-15 px, 600.

## 9. Spacing

- Section: 144/112/80 px.
- Main do supporting: 24 px.
- Proof item padding: 18 px block.
- Mobile headline to copy: 36 px.

## 10. UI elements

- H2.
- Dwa akapity.
- Lista trzech proof points.
- Opcjonalny autentyczny portret, tylko po dostarczeniu.

## 11. Technical visual motif

`REKOMENDACJA`: cienka pionowa linia gridu może łączyć proof points, ale nie dodawać diagramu konkurującego z ludzkim charakterem sekcji. Jeśli jest portret, bez overlays, technical captions i filtrów blueprint.

## 12. Interaction

Brak interakcji. Portret nie jest linkiem. Proof points nie są tooltipami.

## 13. Accessibility

- Portret ma alt opisujący osobę, na przykład `Michał Sarnacki, projektant instalacji elektrycznych`, bez słowa `zdjęcie`.
- Proof points jako lista.
- Pełne brzmienie uprawnień ma być tekstem, nie obrazem dokumentu.
- Zachować H2 po Experience.

## 14. Responsive behaviour

Trzy obszary desktop przechodzą do 5/3 tablet, a potem jednego stacku. Brak portretu nie może pozostawić pustego, obramowanego placeholdera.

## 15. React component

`AboutSection`: renderuje bio, sposób pracy, proof points i opcjonalny portret.

## 16. Możliwe komponenty pomocnicze

`AboutCopy`, `ProofPointList`, `ResponsiveImage` tylko po dodaniu assetu.

## 17. Content model

```ts
interface AboutContent {
  readonly headline: string;
  readonly paragraphs: readonly string[];
  readonly proofPoints: readonly string[];
  readonly portrait?: {
    readonly src: string;
    readonly alt: string;
  };
}
```

## 18. Acceptance criteria

- [ ] Sekcja nie wygląda jak CV i nie zawiera osi czasu zatrudnienia.
- [ ] Występują uprawnienia, doświadczenie, praktyczne podejście, odpowiedzialność, koordynacja i komunikacja.
- [ ] Copy odnosi się do pracy względem uzgodnionych terminów bez składania niepotwierdzonej obietnicy.
- [ ] Nie ma niepotwierdzonych tytułów, lat ani certyfikatów.
- [ ] Brak portretu skutkuje celowym layoutem bez placeholdera.
- [ ] Proof points są czytelne przy 360 px.
- [ ] Copy pozostaje w pierwszej osobie i spokojnym rejestrze.

## 19. Czego nie robić

- Nie dodawać osi kariery, listy pracodawców i pełnego CV.
- Nie używać stockowego portretu ani sylwetki placeholder.
- Nie pisać o pasji, misji i byciu najlepszym.
- Nie publikować skanu uprawnień bez decyzji o danych osobowych.
- Nie mieszać pierwszej i trzeciej osoby w copy.
