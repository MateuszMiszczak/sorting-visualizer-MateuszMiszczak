import { ArrayStateInterface } from "@/definitions/hookTypes";

export const useQuickSort = (
  state: ArrayStateInterface,
  setState: (
    newState:
      | ArrayStateInterface
      | ((prevState: ArrayStateInterface) => ArrayStateInterface)
  ) => void
) => {
  const { array } = state;

  const quickSort = async () => {
    if (array.length <= 1) return;

    setState(prev => ({
      ...prev,
      isSorting: true,
    }));

    const arr = [...array];

    const partition = (arr: number[], low: number, high: number): number => {
      const pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      return i + 1;
    };

    const quickSortHelper = async (
      arr: number[],
      low: number,
      high: number
    ) => {
      if (low < high) {
        const pi = partition(arr, low, high);

        await quickSortHelper(arr, low, pi - 1);
        await quickSortHelper(arr, pi + 1, high);

        setState(prev => ({
          ...prev,
          array: [...arr],
        }));

        await new Promise(resolve => setTimeout(resolve, 100));
      }
    };

    await quickSortHelper(arr, 0, arr.length - 1);

    setState(prev => ({
      ...prev,
      isSorting: false,
      isSorted: true,
    }));
  };

  return { quickSort };
};
