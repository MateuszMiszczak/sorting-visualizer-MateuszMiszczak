import { useCallback } from "react";

// Reusable hook to update part of the state
export const useUpdateState = <T extends object>(
  setState: React.Dispatch<React.SetStateAction<T>>
) => {
  const updateState = useCallback(
    (newState: Partial<T>) => {
      setState(prev => ({ ...prev, ...newState }));
    },
    [setState]
  );

  return updateState;
};
