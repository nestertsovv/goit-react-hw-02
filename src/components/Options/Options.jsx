import s from "./Options.module.css";
import clsx from "clsx";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div className={s.wrapper}>
      <button
        className={clsx(s.btn, s.good)}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={clsx(s.btn, s.neutral)}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={clsx(s.btn, s.bad)}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={clsx(s.btn, s.reset)}
          onClick={() => updateFeedback("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
