import styles from "./Home.module.css";
import { useLocation, useOutletContext } from "react-router";
import SetupForm from "../components/setup-questions/SetupForm";

export default function Home() {
  const location = useLocation();
  console.log(location)
  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>Welcome to Quiz Time!</h2>
      {location.state?.message ? <p className={styles.alert}>{location.state.message}</p> : null}
      <p className={styles.description}>
        Please answer the questions below to get started with your quiz
      </p>
      <SetupForm />
    </div>
  );
}
