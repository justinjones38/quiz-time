import styles from "./Layout.module.css"
import { Outlet } from "react-router"
import { useState } from "react";

export default function Layout() {
  const [quizQuestions, setQuizQuestions] = useState({
    quizType: ""
  });

  const updateQuestions = (newName, newVal) => {
    setQuizQuestions(prev => ({
      ...prev,
      [newName]: newVal
    }))
  }

  console.log(quizQuestions);

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Quiz Time</h1>
      <div className={styles.bodyContainer}>
        <Outlet context={{quizQuestions, updateQuestions}} />
      </div>
    </div>
  )
}