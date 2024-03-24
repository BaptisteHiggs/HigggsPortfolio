import Grid from "./Grid/Grid";
import WordVisualiser from "./WordVisualiser/WordVisualiser";
import classes from "./Gridle.module.scss";
import InteractionButtons from "./interactionButtons/InteractionsButtons";

const Gridle = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["word-vis"]}>
        <WordVisualiser />
      </div>
      <div className={classes["grid"]}>
        <Grid />
      </div>
      <div className={classes["buttons"]}>
        <InteractionButtons />
      </div>
    </div>
  );
};

export default Gridle;
