import styles from "./NotFound.module.css";
import { Link, useOutletContext } from "react-router";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2>Sorry, this page is not found</h2>
      <Link to="/" className={styles.btn}>
        Please return home
      </Link>
    </div>
  );
}
