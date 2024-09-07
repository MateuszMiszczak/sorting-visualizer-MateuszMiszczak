# Recruitment Task: Sorting Algorithm Visualization - Mateusz Miszczak [(https://sorting-visualizer-mthwmiszczak.netlify.app/)

Pana zadaniem jest stworzenie aplikacji React, która wizualizuje algorytm sortowania, np. QuickSort, MergeSort lub inne, według twojego wyboru.

Wizualizacja:

    Stwórz wizualizację procesu sortowania, gdzie kroki algorytmu są krok po kroku prezentowane na interfejsie użytkownika.
    Na przykład, dla QuickSort, kroki mogą obejmować wybór pivota, podział tablicy, rekurencyjne sortowanie podtablic itp.

Animacje:

    Dodaj animacje do wizualizacji, aby lepiej zobrazować, jak elementy tablicy poruszają się i zmieniają swoje pozycje podczas sortowania.

Interaktywność:

    Dodaj przycisk "Sortuj", który inicjuje proces sortowania.
    Zaimplementuj przycisk "Generate new array", który generuje nową losową tablicę do posortowania.
    Udostępnij opcję wyboru algorytmu sortowania spośród co najmniej dwóch różnych algorytmów.
    Pozwól użytkownikowi na dostosowanie rozmiaru tablicy do sortowania.

Kolorowanie elementów:

    Podczas sortowania, podkreślaj różnymi kolorami elementy tablicy, aby wskazać, które są porównywane, zamieniane, itp.

---

# Wizualizacja Algorytmu Sortowania - Bubble Sort, QuickSort i MergeSort

Aplikacja React służąca do wizualizacji sortowania algorytmami:

- **Bubble Sort**
- **Quick Sort**
- **Merge Sort**

## Uruchomienia projektu:

Projekt został napisany z użyciem technologii React Vite.

- Instalacja zależności: **npm i**
- Uruchomienie projektu: **npm run dev**

## Technologie i Biblioteki

- **React (Vite)**
- **TypeScript**
- **Framer Motion**
- **ShadCN UI**
- **Tailwind CSS**
- **LocalStorage**

## Opis decyzji projektowych

### 1. Struktura projektu i komponenty

- Projekt został podzielony na kilka **modularnych komponentów**, co zwiększa jego czytelność i łatwość w rozwijaniu:

  - `ArrayVisualization` - Odpowiada za wizualizację tablicy. Wykorzystuje animacje do wizualnego przedstawienia porównywania i zamiany elementów.
  - `ArrayControls` - Zawiera interfejs użytkownika, który umożliwia sterowanie aplikacją, np. poprzez generowanie nowej tablicy, zmianę jej rozmiaru i uruchomienie wybranego algorytmu sortowania.

  - Logika zarządzania stanem aplikacji została wydzielona do niestandardowych hooków:
    - `useArrayState` - Hook zarządzający stanem aplikacji, takimi jak tablica, rozmiar tablicy oraz statusy sortowania.
    - **`useBubbleSort`** - Hook implementujący logikę sortowania dla algorytmu **Bubble Sort**. Algorytm porównuje sąsiadujące elementy i zamienia je miejscami, jeśli są w złej kolejności. Powtarza ten proces dla każdego elementu, co sprawia, że najcięższe elementy "wypływają" na wierzch. Złożoność czasowa: O(n²).
    - **`useQuickSort`** - Hook implementujący logikę sortowania dla algorytmu **Quick Sort**. Algorytm wybiera element zwany pivotem, dzieli tablicę na dwie części (mniejsze i większe od pivota), a następnie rekurencyjnie sortuje każdą z nich. Złożoność czasowa w średnim przypadku: O(n log n).
    - **`useMergeSort`** - Hook implementujący logikę sortowania dla algorytmu **Merge Sort**. Algorytm rekurencyjnie dzieli tablicę na połowy, aż do uzyskania jednoelementowych tablic, a następnie scala poszczególne podtablice w większe, w sposób uporządkowany. Złożoność czasowa: O(n log n).
    - `useUpdateState` - Hook pozwala na łatwe aktualizowanie części stanu aplikacji bez nadpisywania całości, co czyni kod bardziej czytelnym i efektywnym.

### 2. Użycie `framer-motion` do animacji

- Wybór `framer-motion` jako narzędzia do animacji pozwala na płynne przedstawienie zmian w tablicy podczas sortowania. Animowane są zarówno zmiany wysokości słupków, jak i kolory, co w sposób wizualny ukazuje porównania i zamiany elementów.
- Animacje są wywoływane w trakcie każdego kroku algorytmu, dzięki czemu użytkownik może śledzić proces sortowania w czasie rzeczywistym.

### 3. Zarządzanie stanem z użyciem `useArrayState`

`useArrayState` to niestandardowy hook zaprojektowany do zarządzania stanem aplikacji związanym z tablicą liczb. Hook ten obsługuje:

- **Stan tablicy** (`array`) – Aktualny zbiór liczb do posortowania.
- **Rozmiar tablicy** (`arraySize`) – Liczba elementów, które mają być sortowane. Użytkownik może dynamicznie zmieniać rozmiar tablicy za pomocą suwaka.
- **Status sortowania** (`isSorting`, `isSorted`) – Przechowuje informacje o tym, czy proces sortowania jest w trakcie (`isSorting`) oraz czy tablica została już posortowana (`isSorted`).
- **Interakcje użytkownika** (`hoveredIndex`) – Indeks elementu, który jest aktualnie najechany kursorem, aby zapewnić dodatkową informację wizualną.

Wykorzystuje on wbudowane Reactowe Hooki takie jak:

- **`useState`** do zarządzania stanem tablicy i jej atrybutów.
- **`useEffect`** do synchronizacji danych w `localStorage`, tak aby tablica i jej preferencje (rozmiar) były zapisywane i odzyskiwane po odświeżeniu strony.
- **`useUpdateState`** – Hook, który upraszcza i optymalizuje aktualizację stanu, poprzez umożliwienie modyfikacji wybranych atrybutów stanu, bez konieczności przepisywania całości obiektu.

#### Przykładowe funkcje hooka `useArrayState`:

- **`generateArray`**: Funkcja służąca do generowania nowej, losowej tablicy liczb o określonym rozmiarze. Tablica jest generowana za pomocą losowych liczb, a wynik jest zapisywany w stanie aplikacji.
- **Zapisywanie do `localStorage`**: Hook zapisuje stan tablicy oraz preferencje użytkownika (np. rozmiar tablicy) w `localStorage` za pomocą `useEffect`, co umożliwia przywrócenie poprzedniego stanu po odświeżeniu strony.

### 4. Optymalizacja zarządzania stanem

- Użycie hooka `useCallback` oraz niestandardowego hooka `useUpdateState` do optymalizacji aktualizacji stanu zapobiega zbędnym renderowaniom komponentów.

### 5. Rozbudowa interaktywności

- **Interaktywność**: Aplikacja oferuje podstawowe mechanizmy interakcji, takie jak możliwość generowania nowej tablicy, wybierania jej rozmiaru poprzez suwak oraz uruchamiania algorytmu sortowania. Użytkownik może wybrać algorytm do sortowania spośród trzech dostępnych: **Bubble Sort**, **Quick Sort**, i **Merge Sort**.

# Podsumowanie:

Udało mi się zrealizować wszystkie cele używając 3 algorytmów do sortowania. Dodatkowo dodałem od siebie zmianę koloru wraz z wyświetlaniem okienka z konkretną wartością na hover danego elementu i poprawiłem również wygląd buttonów dla dużo lepszego UX.
