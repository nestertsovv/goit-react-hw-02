import s from "./Feedback.module.css";

const Feedback = ({
  reviews: { bad, good, neutral },
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li className={s.bold}>Total: {totalFeedback}</li>
        <li className={s.bold}>
          Positive:
          <span className={positiveFeedback >= 75 ? s.positive : undefined}>
            &nbsp;{positiveFeedback}%
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
