import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    const defaultParam = { good: 0, neutral: 0, bad: 0 };
    return savedCount !== null ? JSON.parse(savedCount) : defaultParam;
  });

  const updateFeedback = (feedbackType) => {
    setCount({
      ...count,
      [feedbackType]: count[feedbackType] + 1,
    });
  };
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const removeComments = () => {
    setCount({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = count["good"] + count["neutral"] + count["bad"];

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetParam={totalFeedback}
        removeComments={removeComments}
      />
      {totalFeedback ? (
        <Feedback values={count} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
