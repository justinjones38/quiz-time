import { useState } from "react";
import styles from "./Flashcards.module.css";

export default function Flashcards({ quizData }) {
  const [isQuestionShown, setIsQuestionShown] = useState(true);
  const [cardNumber, setCardNumber] = useState(0);
  console.log(quizData[cardNumber]);

  return (
    <div className={styles.container}>
      <div
        className={`${styles["flashcard"]} ${styles[quizData[cardNumber].difficulty]} `}
        onClick={() => setIsQuestionShown((prev) => !prev)}
      >
        {isQuestionShown ? (
          <div className={styles.frontCard}>
            <p className={styles.question}>
              {quizData[cardNumber].question.text}
            </p>
          </div>
        ) : (
          <div className={styles.backCard}>
            <p className={styles.answer}>
              {quizData[cardNumber].correctAnswer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
