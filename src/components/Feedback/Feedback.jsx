export default function Feedback({ values, totalFeedback }) {
  const avarge = Math.round((values["good"] / totalFeedback) * 100);
  return (
    <>
      <p>Good: {values["good"]}</p>
      <p>Neutral: {values["neutral"]}</p>
      <p>Bad: {values["bad"]}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {avarge}%</p>
    </>
  );
}
