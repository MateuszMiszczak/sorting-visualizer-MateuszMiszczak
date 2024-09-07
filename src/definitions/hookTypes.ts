export interface ArrayStateInterface {
  array: number[];
  arraySize: number;
  isSorting: boolean;
  isSorted: boolean;
  hoveredIndex: number | null;
}

export interface UseBubbleSortReturnInterface {
  bubbleSort: () => Promise<void>;
}
