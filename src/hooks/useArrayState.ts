import { useState, useEffect } from "react";
import { ArrayStateInterface } from "@/definitions/hookTypes";
import { useUpdateState } from "@/hooks/useUpdateState";

interface UseArrayStateReturn {
  state: ArrayStateInterface;
  setState: React.Dispatch<React.SetStateAction<ArrayStateInterface>>;
  generateArray: (size?: number) => void;
}

export const useArrayState = (): UseArrayStateReturn => {
  const [state, setState] = useState<ArrayStateInterface>(() => {
    const savedState = localStorage.getItem("arrayState");
    return savedState
      ? JSON.parse(savedState)
      : {
          array: [],
          arraySize: 20,
          isSorting: false,
          isSorted: false,
          hoveredIndex: null,
        };
  });

  const updateState = useUpdateState(setState);

  const validateArraySize = (
    size: string | null,
    defaultSize: number
  ): number => {
    const parsedSize = Number(size);
    return !isNaN(parsedSize) && parsedSize >= 5 && parsedSize <= 30
      ? parsedSize
      : defaultSize;
  };

  const { arraySize, array } = state;

  useEffect(() => {
    if (array.length === 0) {
      const savedSize = localStorage.getItem("arraySize");
      const validatedSize = validateArraySize(savedSize, arraySize);
      generateArray(validatedSize);
    }
  }, [array, validateArraySize]);

  useEffect(() => {
    localStorage.setItem("arrayState", JSON.stringify(state));
  }, [state]);

  const generateArray = (size: number = arraySize) => {
    const newArray = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 100)
    );

    updateState({
      array: newArray,
      arraySize: size,
      isSorted: false,
    });
  };

  return { state, setState, generateArray };
};
