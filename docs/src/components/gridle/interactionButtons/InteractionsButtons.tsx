import { useGridleStore } from "../gridleStore";
import classes from "./InteractionButtons.module.scss";

const InteractionButtons = () => {
  const foundWords = useGridleStore((state) => state.foundWords);
  const currentWord = useGridleStore((state) => state.currentWord);
  const setCurrentWord = useGridleStore(
    (state) => state.actions.setCurrentWord
  );
  const addCurrentWord = useGridleStore(
    (state) => state.actions.addCurrentWord
  );
  const resetFoundWords = useGridleStore(
    (state) => state.actions.resetFoundWords
  );

  function resetHandler() {
    setCurrentWord("");
    resetFoundWords();
  }

  function deleteHandler() {
    setCurrentWord(currentWord.substring(0, currentWord.length - 1));
  }

  function addHandler() {
    if (currentWord.length > 2) {
      addCurrentWord();
      setCurrentWord("");
    }
  }

  return (
    <div className={classes["container"]}>
      <button className={classes["button"]} onClick={resetHandler}>
        Reset
      </button>
      <button className={classes["button"]} onClick={deleteHandler}>
        Delete
      </button>
      <button className={classes["button"]} onClick={addHandler}>
        Add
      </button>
    </div>
  );
};

export default InteractionButtons;
