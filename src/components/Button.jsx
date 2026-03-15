import styles from "./Button.module.css";

function Button({ onClick, children }) {
  return (
    <div style={{ marginTop: "2rem", textAlign: "center" }}>
      <button onClick={onClick} className={styles.button}>
        {children}
      </button>
    </div>
  );
}

export default Button;
