import { ArrayStateInterface } from "@/definitions/hookTypes";

import { Button } from "./ui/button";

interface ArrayControlsProps {
  arraySize: number;
  setState: React.Dispatch<React.SetStateAction<ArrayStateInterface>>;
  generateArray: (size?: number) => void;
  bubbleSort: () => Promise<void>;
  quickSort: () => Promise<void>;
  mergeSort: () => Promise<void>;
  isSorting: boolean;
  isSorted: boolean;
}

export default function ArrayControls({
  arraySize,
  setState,
  generateArray,
  bubbleSort,
  quickSort,
  mergeSort,
  isSorting,
  isSorted,
}: ArrayControlsProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center mx-auto">
      <label htmlFor="arraySize" className="text-xl">
        Array Size: {arraySize}
      </label>
      <input
        type="range"
        id="arraySize"
        min="5"
        max="30"
        value={arraySize}
        onChange={e => {
          setState(prev => ({
            ...prev,
            arraySize: Number(e.target.value),
          }));
          generateArray(Number(e.target.value));
        }}
        disabled={isSorting}
      />
      <div className="flex gap-4 justify-center items-center mx-auto">
        <Button onClick={() => generateArray(arraySize)} disabled={isSorting}>
          Generate New Array
        </Button>
        <Button onClick={bubbleSort} disabled={isSorting || isSorted}>
          Bubble Sort
        </Button>
        <Button onClick={quickSort} disabled={isSorting || isSorted}>
          Quick Sort
        </Button>
        <Button onClick={mergeSort} disabled={isSorting || isSorted}>
          Merge Sort
        </Button>
      </div>
    </div>
  );
}
