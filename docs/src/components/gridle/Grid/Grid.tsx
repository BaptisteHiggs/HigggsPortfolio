import { useGridleStore } from "../gridleStore";
import Letter from "./Letter";
import { Char, Position } from "./types";
import classes from "./Grid.module.scss";
import { useCallback } from "react";

const Grid = () => {
  const grid = useGridleStore((state) => state.charGrid);
  const lastPosition = useGridleStore((state) => state.lastPosition);
  const setLastPosition = useGridleStore(
    (state) => state.actions.setLastPosition
  );
  const addLetterToCurrentWord = useGridleStore(
    (state) => state.actions.addLetterToCurrentWord
  );

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
