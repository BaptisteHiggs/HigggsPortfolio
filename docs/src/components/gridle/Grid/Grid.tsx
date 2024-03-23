import { ChangeEvent, MouseEventHandler } from "react";
import { useGridleStore } from "../gridleStore";
import Letter from "./Letter";
import { Char } from "./types";
import { GenerateRandomChar } from "./utils";
import classes from "./Grid.module.scss";

const Grid = () => {
  const addLetterToCurrentWord = useGridleStore(
    (state) => state.actions.addLetterToCurrentWord
  );

  const rowCount = 4;
  const columnCount = 3;

  const grid: Char[][] = [];
  for (let y = 0; y < rowCount; y++) {
    const subList: Char[] = [];
    for (let x = 0; x < columnCount; x++) {
      subList.push(GenerateRandomChar());
    }
    grid.push(subList);
  }

  const handleClick = (letter: Char) => {
    addLetterToCurrentWord(letter);
  };

  return (
    <table>
      <tbody>
        {grid.map((subList, i) => (
          <tr key={`tr-${i}`}>
            {subList.map((char, j) => (
              <td key={`td-${i}-${j}`} className={classes["td-cell"]}>
                <Letter
                  key={`lt-${i}-${j}`}
                  letter={char}
                  handleClick={handleClick}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
