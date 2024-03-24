import { useGridleStore } from "../gridleStore";
import classes from "./WordVisualiser.module.scss";

const WordVisualiser = () => {
  const currentWord = useGridleStore((state) => state.currentWord);
  return (
    <div className={classes["container"]}>
      <p className={classes["text"]}>{currentWord}</p>
    </div>
  );
};

export default WordVisualiser;
