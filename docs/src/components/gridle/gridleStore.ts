import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { Char } from "./Grid/types";

type GridleStoreState = {
  currentWord: string;
  foundWords: string[];
};

const initialState: GridleStoreState = {
  currentWord: "",
  foundWords: [],
};

const executionStore = combine(initialState, (set, get) => ({
  actions: {
    setCurrentWord: (value: string) => set({ currentWord: value }),
    addLetterToCurrentWord: (value: Char) =>
      set({ currentWord: get().currentWord + value }),
    addCurrentWord: () =>
      set({ foundWords: [...get().foundWords, get().currentWord] }),
    resetFoundWords: () => set({ foundWords: [] }),
  },
}));

export const useGridleStore = create(
  devtools(executionStore, { name: "Gridle Store" })
);
