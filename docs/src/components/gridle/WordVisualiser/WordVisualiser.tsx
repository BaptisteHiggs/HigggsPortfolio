import { useGridleStore } from "../gridleStore";
import classes from "./WordVisualiser.module.scss";

const WordVisualiser = () => {
  const currentWord = useGridleStore((state) => state.currentWord);
  const submittedWords = useGridleStore((state) => state.foundWords);
  return (
    <div className={classes["container"]}>
      <p className={classes["text"]}>{currentWord}</p>
      <div className={classes["submitted-words"]}>
        {!!submittedWords.length &&
          submittedWords
            .map<React.ReactNode>((word) => (
              <div className={classes["word"]}>{word}</div>
            ))
            .reduce((prev, curr) => [
              prev,
              <div className={classes["dash"]}> - </div>,
              curr,
            ])}
      </div>
    </div>
  );
};

export default WordVisualiser;
