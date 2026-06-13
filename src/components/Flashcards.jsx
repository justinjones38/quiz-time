import { useState } from "react";
import styles from "./Flashcards.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, Navigate } from "react-router";

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
  console.log(quizData.length);
  if(quizData.length === 0) {
    return <Navigate to="/" state={{message: "Try different settings. Cannot find any flashcards"}} />
  }

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
        <div className={styles.settingBtnContainer}>
          <button className={styles.settingBtn}>Shuffle Cards</button>
          {cardNumber > 0 ? <button onClick={() => setCardNumber(0)} className={styles.settingBtn}> Reset Card Deck</button> : null}
        </div>
        <div className={styles.linkContainer}>
            <Link to="/" className={styles.linkBtn}>Return Home</Link>
        </div>
    </div>
  );
}
