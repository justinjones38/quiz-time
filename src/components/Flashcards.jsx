import { useEffect, useState } from "react";
import styles from "./Flashcards.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, Navigate } from "react-router";
import { shuffleArr } from "../utils/helper";
import PrimaryBtn from "./buttons/PrimaryBtn";
import InputAnswer from "./InputAnswer";

export default function Flashcards({ quizData, setQuizData }) {
  const [isQuestionShown, setIsQuestionShown] = useState(true);
  const [cardNumber, setCardNumber] = useState(0);
  console.log(quizData);

  const updateQuestion = (isNextBtnClicked) => {
    if (isNextBtnClicked) {
      setCardNumber((prev) => prev + 1);
      setIsQuestionShown(true);
      return;
    }
    setCardNumber((prev) => prev - 1);
    setIsQuestionShown(true);
  };

  useEffect(() => {
    // Added keyboard events so users can use the arrows on the screen to change questions
    // and flip between question and answer
    const handleKeyEvents = (e) => {
      if(e.key === "ArrowUp" || e.key === "ArrowDown") {
        setIsQuestionShown(prev => !prev);
      } else if (e.key === "ArrowLeft" && cardNumber !== 0) {
        updateQuestion(false)
      } else if (e.key === "ArrowRight" && cardNumber < quizData.length - 1) {
        updateQuestion(true);
      }
    }

    document.addEventListener("keydown", handleKeyEvents);

    return () => document.removeEventListener("keydown", handleKeyEvents);
  })


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

  const resetCardDeck = () => {
    setCardNumber(0);
    setIsQuestionShown(true);
  };

  const handleShuffle = () => {
    resetCardDeck();
    setQuizData((prev) => shuffleArr(prev));
  };

  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Test your trivial skills with fun, thought-provoking, random questions
      </p>
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
              {quizData[cardNumber].img ? (
                <img
                  src={quizData[cardNumber].img}
                  alt="The answer to the question"
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
      <InputAnswer correctAnswer={quizData[cardNumber].correctAnswer} cardNumber={cardNumber}  />
      <div className={styles.settingBtnContainer}>
        <PrimaryBtn onClick={handleShuffle}>
          Shuffle Cards
        </PrimaryBtn>
        {cardNumber > 0 ? (
          <PrimaryBtn onClick={resetCardDeck} >
            {" "}
            Reset Card Deck
          </PrimaryBtn>
        ) : null}
      </div>
      <div className={styles.linkContainer}>
        <Link to="/" className={styles.linkBtn}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
