import TypingArena from "../features/typingArena/TypingArena";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Type<span className={styles.highlight}>Pro</span>
        </h1>
        <p className={styles.subtitle}>A minimalist typing experience.</p>
      </header>
      <TypingArena />
    </div>
  );
}

export default Home;
