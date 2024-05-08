import { CharPosition } from "./Grid/types";

export function CharPosititionsToWord(charPositions: CharPosition[]) {
  return charPositions.map((x) => x.char).join("");
}
