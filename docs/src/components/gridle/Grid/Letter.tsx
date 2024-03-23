import { Button } from "@mui/material";
import { Char } from "./types";
import classes from "./Grid.module.scss";

interface props {
  letter: Char;
  handleClick: (letter: Char) => void;
}

const Letter = ({ letter, handleClick }: props) => {
  return (
    <button
      className={classes["letterButton"]}
      onClick={() => handleClick(letter)}
    >
      {letter}
    </button>
  );
};

export default Letter;
