import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { Char } from "./Grid/types";

type GridleStoreState = {
  currentWord: string;
};

const initialState: GridleStoreState = {
  currentWord: "",
};

const executionStore = combine(initialState, (set, get) => ({
  actions: {
    setCurrentWord: (value: string) => set({ currentWord: value }),
    addLetterToCurrentWord: (value: Char) =>
      set({ currentWord: get().currentWord + value }),
  },
}));

export const useGridleStore = create(
  devtools(executionStore, { name: "Gridle Store" })
);
