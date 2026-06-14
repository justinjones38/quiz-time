import { useState } from "react";
import styles from "./Flashcards.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, Navigate } from "react-router";
import { shuffleArr } from "../utils/helper";

export default function Flashcards({ quizData, setQuizData }) {
  const [isQuestionShown, setIsQuestionShown] = useState(true);
  const [cardNumber, setCardNumber] = useState(Math.floor(Math.random() * quizData.length));

  if (quizData.length === 0) {
    return (
      <Navigate
        to="/"
        state={{
          message: "Try different settings. Cannot find any flashcards",
        }}
      />
    );
  }

  const updateQuestion = (isNextBtnClicked) => {
    if (isNextBtnClicked) {
      setCardNumber(Math.floor(Math.random() * quizData.length));
      setIsQuestionShown(true);
      return;
    }
    setCardNumber(Math.floor(Math.random() * quizData.length));
    setIsQuestionShown(true);
  };

  const resetCardDeck = () => {
    setCardNumber(0);
    setIsQuestionShown(true);
  };

  const shuffle = () => {
    resetCardDeck();
    setQuizData((prev) => shuffleArr(prev));
  };

  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Test your trivial skills with fun, thought-provoking, random questions
      </p>
      <p className={styles.cardNumber}>
        Total Cards: {quizData.length}
      </p>
      <div
        className={`${styles["flashcard"]} ${styles[quizData[cardNumber].difficulty]} `}
        onClick={() => setIsQuestionShown((prev) => !prev)}
      >
        {isQuestionShown ? (
          <div className={styles.frontCard}>
            <p className={styles.question}>
              {quizData[cardNumber].question.text}
              {quizData[cardNumber].img ? (
                <img
                  src={quizData[cardNumber].img}
                  alt="image of answer"
                  className={styles.img}
                />
              ) : null}
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
          onClick={() => updateQuestion(false)}
        >
          <FaArrowLeft />
        </button>
        <button
          className={styles.quizBtn}
          onClick={() => updateQuestion(true)}
        >
          <FaArrowRight />
        </button>
      </div>
      <div className={styles.settingBtnContainer}>
        <button className={styles.settingBtn} onClick={shuffle}>
          Shuffle Cards
        </button>
          <button onClick={resetCardDeck} className={styles.settingBtn}>
            {" "}
            Reset Card Deck
          </button>
      </div>
      <div className={styles.linkContainer}>
        <Link to="/" className={styles.linkBtn}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
