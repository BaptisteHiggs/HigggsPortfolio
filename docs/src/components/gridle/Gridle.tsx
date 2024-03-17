import Grid from "./Grid/Grid";
import WordVisualiser from "./WordVisualiser/WordVisualiser";
import classes from "./Gridle.module.scss";

const Gridle = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["word-vis"]}>
        <WordVisualiser />
      </div>
      <div className={classes["grid"]}>
        <Grid />
      </div>
    </div>
  );
};

export default Gridle;
