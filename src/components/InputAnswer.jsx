import styles from "./InputAnswer.module.css";
import { useEffect, useRef, useState } from "react";


export default function InputAnswer({ correctAnswer, cardNumber, incrementStreak, resetStreak }) {
  const [guess, setGuess] = useState("");
  const [answer, setAnswer] = useState("")
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    setGuess("")
    setAnswer("");
  }, [cardNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("logged")
    if(correctAnswer === guess) {
      setAnswer("correct")
      incrementStreak();
      return;
    }
    setAnswer("wrong")
    resetStreak();
    return;
  }
console.log(answer)
  return (
    <div className={styles.container}>
      <p className={`${styles.guess} ${styles[answer]}`}>{answer ? `${answer} guess!` : null}</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* I am using an aria-label tag instead of an input tag */}
        <input
          type="text"
          value={guess}
          id="guess"
          onChange={(e) => setGuess(e.target.value)}
          className={styles.input}
          ref={inputRef}
          placeholder="Enter Guess"
          aria-label="Enter Guess"
          className={`${styles.input} ${styles[answer]}`}
        />
        <button className={styles.btn} disabled={answer === "correct"}>Submit</button>
      </form>
    </div>
  );
}
