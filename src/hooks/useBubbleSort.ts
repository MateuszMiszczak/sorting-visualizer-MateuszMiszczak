import {
  ArrayStateInterface,
  UseBubbleSortReturnInterface,
} from "@/definitions/hookTypes";

export const useBubbleSort = (
  state: ArrayStateInterface,
  setState: (
    newState:
      | ArrayStateInterface
      | ((prevState: ArrayStateInterface) => ArrayStateInterface)
  ) => void
): UseBubbleSortReturnInterface => {
  const { array } = state;

  const bubbleSort = async () => {
    if (array.length <= 1) return;

    setState(prev => ({
      ...prev,
      isSorting: true,
    }));

    const arr: number[] = [...array];
    const len: number = arr.length;

    for (let i = 0; i < len; i++) {
      let swapped = false;
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }
      if (swapped) {
        setState(prev => ({
          ...prev,
          array: [...arr],
        }));
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    setState(prev => ({
      ...prev,
      isSorting: false,
      isSorted: true,
    }));
  };

  return { bubbleSort };
};
