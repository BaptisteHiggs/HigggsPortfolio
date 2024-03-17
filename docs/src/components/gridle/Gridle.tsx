import Grid from "./Grid";
import WordVisualiser from "./WordVisualiser";
import classes from "./Gridle.module.scss";

const Gridle = () => {
  return (
    <div className={classes["container"]}>
      <WordVisualiser />
      <Grid />
    </div>
  );
};

export default Gridle;
