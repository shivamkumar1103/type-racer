import styles from "./TextDisplay.module.css";

function TextDisplay({ text, userInput }) {
  return (
    <div className={styles.textDisplay}>
      {text.split("").map((char, index) => {
        let colorClass = styles.notTyped;

        if (userInput.charAt(index) === "") {
          colorClass = styles.notTyped;
        } else if (userInput.charAt(index) !== char) {
          colorClass = styles.incorrect;
        } else {
          colorClass = styles.correct;
        }

        return (
          <span key={index} className={colorClass}>
            {char}
          </span>
        );
      })}
    </div>
  );
}

export default TextDisplay;
