import styles from "./StatsBar.module.css";

function renderDelta(current, previous) {
  if (previous === 0) return null; // Hide on the very first game

  const delta = current - previous;
  if (delta > 0)
    return (
      <span style={{ color: "#a6e3a1", fontSize: "1rem" }}> (+{delta})</span>
    ); // Green
  if (delta < 0)
    return (
      <span style={{ color: "#f38ba8", fontSize: "1rem" }}> ({delta})</span>
    ); // Red
  return <span style={{ color: "#646669", fontSize: "1rem" }}> (+0)</span>; // Gray
}

function StatsBar({
  timeRemaining,
  currAccuracy,
  currWpm,
  previousScore,
  status,
}) {
  return (
    <div className={styles.statsBar}>
      <div>{timeRemaining}s</div>
      <div>
        Accuracy : {currAccuracy}
        {status === "finished"
          ? renderDelta(currAccuracy, previousScore.accuracy)
          : null}
      </div>
      <div>
        WPM : {currWpm}
        {status === "finished" ? renderDelta(currWpm, previousScore.wpm) : null}
      </div>
      {status === "finished" && <div>Game Over!</div>}
    </div>
  );
}

export default StatsBar;
