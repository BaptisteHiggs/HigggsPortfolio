import { useGridleStore } from "../gridleStore";

const WordVisualiser = () => {
  const currentWord = useGridleStore((state) => state.currentWord);
  return <p>{currentWord}</p>;
};

export default WordVisualiser;
