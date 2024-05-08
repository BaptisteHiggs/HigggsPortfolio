import { Char, CharPosition } from "./Grid/types";

export function CharPosititionsToWord(charPositions: CharPosition[]) {
  return charPositions.map((x) => x.char).join("");
}

const charList: Char[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export function GenerateRandomChar() {
  return charList[Math.floor(Math.random() * charList.length)];
}

export function GenerateRandomCharSet(rowCount: number, columnCount: number) {
  const grid: Char[][] = [];
  for (let y = 0; y < rowCount; y++) {
    const subList: Char[] = [];
    for (let x = 0; x < columnCount; x++) {
      subList.push(GenerateRandomChar());
    }
    grid.push(subList);
  }

  return grid;
}
