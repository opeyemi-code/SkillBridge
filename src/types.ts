import type { Dispatch, ReactNode, SetStateAction } from "react";

// 1. Define the professional's data structure
export interface Talent {
  id: string;
  name: string;
  title: string;
  category: string;
  location: string;
  avatar: string;
  bio: string;
  experience: string;
  skills: string[];
  hourlyRate: number;
  currency: string;
  verified: boolean;
  availability: string;
  portfolioUrl: string;
  email: string;
}

// 2. Define the context value type
export interface DataContextType {
  selectedTalent: Talent | null;
  setSelectedTalent: Dispatch<SetStateAction<Talent | null>>;
}

// 3. Create the context

// 4. Create the Provider
export interface DataProviderProps {
  children: ReactNode;
}
