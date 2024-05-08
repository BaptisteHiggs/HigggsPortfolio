import { useEffect, useState } from "react";
import { useGridleStore } from "../gridleStore";
import classes from "./InteractionButtons.module.scss";
import { CharPosititionsToWord } from "../utils";

const InteractionButtons = () => {
  const setCurrentWord = useGridleStore(
    (state) => state.actions.setCurrentWord
  );
  const currentWord = useGridleStore((state) => state.currentWord);
  const resetCurrentWord = useGridleStore(
    (state) => state.actions.resetCurrentWord
  );
  const addCurrentWord = useGridleStore(
    (state) => state.actions.addCurrentWord
  );
  const resetFoundWords = useGridleStore(
    (state) => state.actions.resetFoundWords
  );
  const deleteLastCharPosition = useGridleStore(
    (state) => state.actions.deleteLastCharPosition
  );

  const [wordToBeChecked, setWordToBeChecked] = useState("");
  useEffect(() => {
    async function checkWord(wordToBeChecked: string) {
      const data = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToBeChecked}`
      );
      if (
        data.status === 200 &&
        CharPosititionsToWord(currentWord) === wordToBeChecked
      ) {
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
    setCurrentWord([]);
    resetFoundWords();
  }

  function deleteHandler() {
    deleteLastCharPosition();
  }

  function addHandler() {
    if (currentWord.length > 2) {
      setWordToBeChecked(CharPosititionsToWord(currentWord));
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
