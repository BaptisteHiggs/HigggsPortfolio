import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { Char, Position } from "./Grid/types";
import { GenerateRandomCharSet } from "./Grid/utils";

type GridleStoreState = {
  currentWord: string;
  foundWords: string[];
  charGrid: Char[][];
  lastPosition: Position | undefined;
};

const initialState: GridleStoreState = {
  currentWord: "",
  foundWords: [],
  charGrid: GenerateRandomCharSet(4, 3),
  lastPosition: undefined,
};

const executionStore = combine(initialState, (set, get) => ({
  actions: {
    setCurrentWord: (value: string) => set({ currentWord: value }),
    resetCurrentWord: () =>
      set({ currentWord: getStartingLetter(get().foundWords) }),
    addLetterToCurrentWord: (value: Char) =>
      set({ currentWord: get().currentWord + value }),
    addCurrentWord: () =>
      set({ foundWords: [...get().foundWords, get().currentWord] }),
    resetFoundWords: () => set({ foundWords: [] }),
    setLastPosition: (value: Position | undefined) =>
      set({ lastPosition: value }),
  },
}));

function getStartingLetter(foundWords: string[]) {
  const listLen = foundWords.length;
  if (listLen > 0) {
    const finalWord = foundWords.at(listLen - 1);
    const finalLetter = finalWord?.at(finalWord.length - 1) ?? "";
    return finalLetter;
  } else {
    return "";
  }
}

export const useGridleStore = create(
  devtools(executionStore, { name: "Gridle Store" })
);
