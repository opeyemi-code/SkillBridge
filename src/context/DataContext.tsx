import { createContext, useState } from "react";
import type { DataContextType, DataProviderProps, Talent } from "../types";

export const DataContext = createContext<DataContextType | undefined>(
  undefined,
);

export function DataProvider({ children }: DataProviderProps) {
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);

  return (
    <DataContext.Provider value={{ selectedTalent, setSelectedTalent }}>
      {children}
    </DataContext.Provider>
  );
}
