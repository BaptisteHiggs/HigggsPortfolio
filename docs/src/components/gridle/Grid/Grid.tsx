import Letter from "./Letter";
import { Char } from "./types";
import { GenerateRandomChar } from "./utils";

const Grid = () => {
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

  return (
    <table>
      <tbody>
        {grid.map((subList, i) => (
          <tr key={`tr-${i}`}>
            {subList.map((char, j) => (
              <td key={`td-${i}-${j}`}>
                <Letter key={`lt-${i}-${j}`} letter={char} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
  //return <Letter letter="L" />;
};

export default Grid;
