import { useEffect, useState } from "react";
import s from "./App.module.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [reviews, setReviews] = useState(() => {
    const reviews = localStorage.getItem("reviews");

    if (reviews !== null) {
      return JSON.parse(reviews);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round(
    ((reviews.good + reviews.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const updateFeedback = (type) => {
    switch (type) {
      case "good":
        setReviews({
          ...reviews,
          good: reviews.good + 1,
        });
        break;

      case "neutral":
        setReviews({
          ...reviews,
          neutral: reviews.neutral + 1,
        });
        break;

      case "bad":
        setReviews({
          ...reviews,
          bad: reviews.bad + 1,
        });
        break;

      case "reset":
        setReviews({
          good: 0,
          neutral: 0,
          bad: 0,
        });
        break;

      default:
        setReviews({
          good: 0,
          neutral: 0,
          bad: 0,
        });
        break;
    }
  };

  return (
    <div className={s.mainWrapper}>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          reviews={reviews}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
