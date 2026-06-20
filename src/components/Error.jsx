import styles from "./Error.module.css";
import { Link } from "react-router";

export default function Error() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Sorry! The data server is not working. We cannot fetch the text
        flashcards.
      </h2>
      <p className={styles.description}>Please return to the home page.</p>
      <div className={styles.btnContainer}>
        <Link to="/" className={styles.btn}>
          Home
        </Link>
      </div>
    </div>
  );
}
