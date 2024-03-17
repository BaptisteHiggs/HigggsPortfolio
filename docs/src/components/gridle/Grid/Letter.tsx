import { Button } from "@mui/material";
import { Char } from "./types";
import classes from "./Grid.module.scss";

interface props {
  letter: Char;
}

const Letter = ({ letter }: props) => {
  return <Button className={classes["letterButton"]}>{letter}</Button>;
};

export default Letter;
