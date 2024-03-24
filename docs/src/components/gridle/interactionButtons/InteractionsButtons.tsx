import classes from "./InteractionButtons.module.scss";

const InteractionButtons = () => {
  return (
    <div className={classes["container"]}>
      <button className={classes["button"]}>Reset</button>
      <button className={classes["button"]}>Delete</button>
      <button className={classes["button"]}>Add</button>
    </div>
  );
};

export default InteractionButtons;
