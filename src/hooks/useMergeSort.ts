import { ArrayStateInterface } from "@/definitions/hookTypes";

export const useMergeSort = (
  state: ArrayStateInterface,
  setState: (
    newState:
      | ArrayStateInterface
      | ((prevState: ArrayStateInterface) => ArrayStateInterface)
  ) => void
) => {
  const { array } = state;

  const mergeSort = async () => {
    if (array.length <= 1) return;

    setState(prev => ({
      ...prev,
      isSorting: true,
    }));

    const arr = [...array];

    const merge = (left: number[], right: number[]): number[] => {
      const sortedArray: number[] = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          sortedArray.push(left.shift() as number);
        } else {
          sortedArray.push(right.shift() as number);
        }
      }
      return [...sortedArray, ...left, ...right];
    };

    const mergeSortHelper = async (arr: number[]): Promise<number[]> => {
      if (arr.length <= 1) return arr;
      const mid = Math.floor(arr.length / 2);
      const left = await mergeSortHelper(arr.slice(0, mid));
      const right = await mergeSortHelper(arr.slice(mid));
      return merge(left, right);
    };

    const sortedArray = await mergeSortHelper(arr);
    setState(prev => ({
      ...prev,
      array: sortedArray,
      isSorting: false,
      isSorted: true,
    }));
  };

  return { mergeSort };
};
