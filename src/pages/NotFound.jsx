import styles from "./NotFound.module.css";
import { Link, useOutletContext } from "react-router";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sorry, this page is not found. Please return to the home page</h2>
      <Link to="/" className={styles.btn}>
        Home
      </Link>
    </div>
  );
}
