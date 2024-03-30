import { Char, Position } from "./types";
import classes from "./Grid.module.scss";

interface props {
  letter: Char;
  position: Position;
  handleClick: (letter: Char, position: Position) => void;
}

const Letter = ({ letter, handleClick, position }: props) => {
  return (
    <button
      className={classes["letterButton"]}
      onClick={() => handleClick(letter, position)}
    >
      {letter}
    </button>
  );
};

export default Letter;
