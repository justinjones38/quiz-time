import styles from "./InputAnswer.module.css";
import { useEffect, useRef, useState } from "react";


export default function InputAnswer({ correctAnswer, cardNumber }) {
  const [guess, setGuess] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    setGuess("")
  }, [cardNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(correctAnswer === guess) {
      console.log("correct!")
      return;
    }
    console.log("wrong");
    return;
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="guess">Enter Guess</label>
        <input
          type="text"
          value={guess}
          id="guess"
          onChange={(e) => setGuess(e.target.value)}
          className={styles.input}
          ref={inputRef}
        />
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  );
}
