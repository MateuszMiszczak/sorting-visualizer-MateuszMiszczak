import { useArrayState } from "./hooks/useArrayState";
import { useBubbleSort } from "./hooks/useBubbleSort";
import { useQuickSort } from "./hooks/useQuickSort";
import { useMergeSort } from "./hooks/useMergeSort";

import ArrayVisualization from "./components/ArrayVisualization";
import ArrayControls from "./components/ArrayControls";

export default function App() {
  const { state, setState, generateArray } = useArrayState();
  const { bubbleSort } = useBubbleSort(state, setState);
  const { quickSort } = useQuickSort(state, setState);
  const { mergeSort } = useMergeSort(state, setState);
  const { array, arraySize, isSorting, isSorted, hoveredIndex } = state;

  return (
    <div className="grid grid-cols-1 gap-1 place-items-center place-content-center h-screen">
      <ArrayVisualization
        array={array}
        isSorting={isSorting}
        hoveredIndex={hoveredIndex}
        setState={setState}
      />
      <ArrayControls
        arraySize={arraySize}
        setState={setState}
        generateArray={generateArray}
        bubbleSort={bubbleSort}
        quickSort={quickSort}
        mergeSort={mergeSort}
        isSorting={isSorting}
        isSorted={isSorted}
      />
    </div>
  );
}
