import styles from "./InputAnswer.module.css";
import { useEffect, useRef, useState } from "react";
import { reducerAction } from "../../reducer/reducer";

export default function InputAnswer({
  correctAnswer,
  cardNumber,
  dispatch,
}) {
  const [guess, setGuess] = useState("");
  const [answer, setAnswer] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    setGuess("");
    setAnswer("");
  }, [cardNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // If the user gets more than 80% of the letters correct. Then the answer is marked correct.
    // This accounts for typos.

    // This splits the original guess into an array of lowercase chars
    const splittedGuess = guess.toLowerCase().trim().split("");

    // This splits the correct answer into an array of lowercase chars
    const splittedCorrectAnswer = correctAnswer.toLowerCase().split("");
    // Initial correct letters is set to 0
    let correctLetters = 0;

    // For each letter that matches, the correctLetters increments
    splittedCorrectAnswer.forEach((correctLetter, index) => {
      if (correctLetter === splittedGuess[index]) {
        correctLetters += 1;
      }
    });

    // If the ratio of correct letters to the length of the correctAnswer is equal/greater than 80%, 
    // then the answer is correct. This allows for minor typos.
    if (correctLetters / splittedCorrectAnswer.length >= 0.8) {
      setAnswer("correct");
      dispatch({type: reducerAction["INCREMENT_STREAK"]});
      return;
    }
    setAnswer("wrong");
    dispatch({type: reducerAction["RESET_STREAK"]})
    return;
  };
  return (
    <div className={styles.container}>
      <p className={`${styles.guess} ${styles[answer]}`}>
        {answer ? `${answer} guess!` : null}
      </p>
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
          autoComplete="off"
        />
        <button className={styles.btn} disabled={answer === "correct" || !guess}>
          Submit
        </button>
      </form>
    </div>
  );
}
