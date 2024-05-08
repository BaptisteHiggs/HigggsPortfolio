import { useEffect, useState } from "react";
import { useGridleStore } from "../gridleStore";
import classes from "./InteractionButtons.module.scss";

const InteractionButtons = () => {
  const currentWord = useGridleStore((state) => state.currentWord);
  const setCurrentWord = useGridleStore(
    (state) => state.actions.setCurrentWord
  );
  const resetCurrentWord = useGridleStore(
    (state) => state.actions.resetCurrentWord
  );
  const addCurrentWord = useGridleStore(
    (state) => state.actions.addCurrentWord
  );
  const resetFoundWords = useGridleStore(
    (state) => state.actions.resetFoundWords
  );
  const setLastPosition = useGridleStore(
    (state) => state.actions.setLastPosition
  );

  const [wordToBeChecked, setWordToBeChecked] = useState("");
  useEffect(() => {
    async function checkWord(wordToBeChecked: string) {
      const data = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToBeChecked}`
      );
      if (data.status === 200 && currentWord === wordToBeChecked) {
        addCurrentWord();
        console.log("Is a word!");
      } else {
        console.log("Not a word!");
      }
      resetCurrentWord();
    }
    if (wordToBeChecked.length > 2) {
      checkWord(wordToBeChecked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordToBeChecked]);

  function resetHandler() {
    setCurrentWord("");
    resetFoundWords();
    setLastPosition(undefined);
  }

  function deleteHandler() {
    setCurrentWord(currentWord.substring(0, currentWord.length - 1));
  }

  function addHandler() {
    if (currentWord.length > 2) {
      setWordToBeChecked(currentWord);
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
