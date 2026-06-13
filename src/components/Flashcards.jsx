import { useState } from "react";
import styles from "./Flashcards.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

export default function Flashcards({ quizData }) {
  const [isQuestionShown, setIsQuestionShown] = useState(true);
  const [cardNumber, setCardNumber] = useState(0);
  const updateQuestion = (isNextBtnClicked) => {
    if (isNextBtnClicked) {
      setCardNumber((prev) => prev + 1);
      setIsQuestionShown(true);
      return;
    }
    setCardNumber((prev) => prev - 1);
    setIsQuestionShown(true);
  };
  console.log(quizData[cardNumber]);

  return (
    <div className={styles.container}>
      <p className={styles.cardNumber}>
        Card {cardNumber + 1} of {quizData.length}
      </p>
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
      <div className={styles.btnContainer}>
        <button
          className={styles.quizBtn}
          disabled={cardNumber === 0}
          onClick={() => updateQuestion(false)}
        >
          <FaArrowLeft />
        </button>
        <button
          className={styles.quizBtn}
          disabled={cardNumber + 1 === quizData.length}
          onClick={() => updateQuestion(true)}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
