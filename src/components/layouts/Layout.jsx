import styles from "./Layout.module.css"
import { Outlet } from "react-router"
import { useState } from "react";

export default function Layout() {
  const [setupAnswers, setSetupAnswers] = useState({
    quizType: "",
    categories: [],
    difficulties: []
  });

  const updateSetupAnswers = (newName, newVal) => {
    setSetupAnswers(prev => ({
      ...prev,
      [newName]: newVal
    }))
  }

  console.log(setupAnswers);

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Quiz Time</h1>
      <div className={styles.bodyContainer}>
        <Outlet context={{setupAnswers, updateSetupAnswers}} />
      </div>
    </div>
  )
}