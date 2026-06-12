import styles from "./Home.module.css"
import { useOutletContext } from "react-router"
import SetupForm from "../components/setup-questions/SetupForm"

export default function Home() {
  return (
  <div className={styles.container}>
    <h2 className={styles.pageTitle}>Welcome to Quiz Time!</h2>
    <p className={styles.description}>
      Please answer the questions below to get started with your quiz
    </p>
    <SetupForm />
  </div>
  )
}