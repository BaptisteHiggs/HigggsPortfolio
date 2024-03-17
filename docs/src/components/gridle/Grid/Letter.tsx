import { Button } from "@mui/material";
import { Char } from "./types";
import classes from "./Grid.module.scss";
import { useGridleStore } from "../gridleStore";
import { ChangeEvent, MouseEventHandler } from "react";

interface props {
  letter: Char;
  handleClick: (letter: Char) => void;
}

const Letter = ({ letter, handleClick }: props) => {
  return (
    <Button
      className={classes["letterButton"]}
      onClick={() => handleClick(letter)}
    >
      {letter}
    </Button>
  );
};

export default Letter;
