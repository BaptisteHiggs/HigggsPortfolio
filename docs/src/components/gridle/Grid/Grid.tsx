import { useGridleStore } from "../gridleStore";
import Letter from "./Letter";
import { Char, Position } from "./types";
import { GenerateRandomChar } from "./utils";
import classes from "./Grid.module.scss";
import { useCallback, useState } from "react";

const Grid = () => {
  const addLetterToCurrentWord = useGridleStore(
    (state) => state.actions.addLetterToCurrentWord
  );

  const [lastPosition, setLastPosition] = useState<Position | undefined>();

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

  const handleClick = (letter: Char, position: Position) => {
    if (!isDisabled(position)) {
      addLetterToCurrentWord(letter);
      setLastPosition(position);
    }
  };

  const isDisabled = useCallback(
    (position: Position) => {
      return (
        lastPosition &&
        (position.x === lastPosition.x || position.y === lastPosition.y)
      );
    },
    [lastPosition]
  );

  return (
    <table>
      <tbody>
        {grid.map((subList, x) => (
          <tr key={`tr-${x}`}>
            {subList.map((char, y) => (
              <td key={`td-${x}-${y}`} className={classes["td-cell"]}>
                <Letter
                  key={`lt-${x}-${y}`}
                  letter={char}
                  position={{ x, y }}
                  disabled={isDisabled({ x, y })}
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
