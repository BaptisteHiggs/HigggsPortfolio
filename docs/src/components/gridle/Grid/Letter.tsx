import { Char, Position } from "./types";
import classes from "./Grid.module.scss";

interface props {
  letter: Char;
  position: Position;
  disabled?: boolean;
  handleClick: (letter: Char, position: Position) => void;
}

const Letter = ({ letter, handleClick, disabled, position }: props) => {
  return (
    <button
      className={
        disabled ? classes["letter-button-disabled"] : classes["letter-button"]
      }
      onClick={() => handleClick(letter, position)}
    >
      {letter}
    </button>
  );
};

export default Letter;
