import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { Char, CharPosition, Position } from "./Grid/types";
import { GenerateRandomCharSet } from "./Grid/utils";
import { CharPosititionsToWord } from "./utils";

type GridleStoreState = {
  currentWord: CharPosition[];
  foundWords: CharPosition[][];
  charGrid: Char[][];
};

const initialState: GridleStoreState = {
  currentWord: [],
  foundWords: [],
  charGrid: GenerateRandomCharSet(4, 3),
};

const executionStore = combine(initialState, (set, get) => ({
  actions: {
    setCurrentWord: (value: CharPosition[]) => set({ currentWord: value }),
    getCurrentWordString: () => CharPosititionsToWord(get().currentWord),
    resetCurrentWord: () => {
      const startingCharPosition = getStartingCharPosition(get().foundWords);
      set({
        currentWord: !!startingCharPosition ? [startingCharPosition] : [],
      });
    },
    addLetterToCurrentWord: (char: Char, position: Position) =>
      set({
        currentWord: addCharPosition(get().currentWord, char, position),
      }),
    addCurrentWord: () =>
      set({ foundWords: [...get().foundWords, get().currentWord] }),
    resetFoundWords: () => set({ foundWords: [] }),
    deleteLastCharPosition: () => {
      if (get().currentWord.length === 1) {
        if (get().foundWords.length === 0) {
          set({ currentWord: [] });
        } else {
          const latestFoundWord = get().foundWords.at(
            get().foundWords.length - 1
          );
          set({ currentWord: latestFoundWord });
          set({
            foundWords: get().foundWords.slice(0, get().foundWords.length - 1),
          });
        }
      } else {
        set({
          currentWord: get().currentWord.slice(0, get().currentWord.length - 1),
        });
      }
    },
    getLastPosition: () => {},
  },
}));

function getStartingCharPosition(foundWords: CharPosition[][]) {
  const wordCount = foundWords.length;
  if (wordCount > 0) {
    const finalWord = foundWords.at(wordCount - 1);
    const finalLetter = finalWord?.at(finalWord.length - 1);
    return finalLetter;
  } else {
    return undefined;
  }
}

function addCharPosition(
  currentWord: CharPosition[],
  char: Char,
  position: Position
) {
  const letterCount = currentWord.length;
  const newCharPosition: CharPosition = { char: char, position: position };
  if (letterCount === 0) {
    return [newCharPosition];
  } else {
    const newWord = [...currentWord, newCharPosition];
    return newWord;
  }
}

export const useGridleStore = create(
  devtools(executionStore, { name: "Gridle Store" })
);
