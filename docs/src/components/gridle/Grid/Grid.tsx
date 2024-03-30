import { useGridleStore } from "../gridleStore";
import Letter from "./Letter";
import { Char, Position } from "./types";
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

  const handleClick = (letter: Char, position: Position) => {
    addLetterToCurrentWord(letter);
  };

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
                  position={{ x: x, y: y }}
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
