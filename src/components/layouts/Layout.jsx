import styles from "./Layout.module.css";
import { Outlet } from "react-router";
import { useState } from "react";

export default function Layout() {
  const [setupAnswers, setSetupAnswers] = useState({
    quizType: "",
    categories: [],
    difficulties: [],
  });

  const updateRadioAnswers = (newName, newVal) => {
    setSetupAnswers((prev) => ({
      ...prev,
      [newName]: newVal,
    }));
  };

  const updateCheckListAnswers = (newName, newVal) => {
    console.log(newName, newVal);
    console.log(setupAnswers);
    if (setupAnswers[newName].includes(newVal)) {
      setSetupAnswers((prev) => ({
        ...prev,
        [newName]: prev[newName].filter((item) => item !== newVal),
      }));
    } else {
      setSetupAnswers((prev) => ({
        ...prev,
        [newName]: [...prev[newName], newVal],
      }));
    }
  };

  console.log(setupAnswers);

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Quiz Time</h1>
      <div className={styles.bodyContainer}>
        <Outlet
          context={{ setupAnswers, updateRadioAnswers, updateCheckListAnswers }}
        />
      </div>
    </div>
  );
}
