import { useState } from "react";
import styles from "./Flashcards.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, Navigate } from "react-router";

export default function Flashcards({ quizData, shuffleCards }) {
  const [isQuestionShown, setIsQuestionShown] = useState(true);
  const [cardNumber, setCardNumber] = useState(0);

  if(quizData.length === 0) {
    return <Navigate to="/" state={{message: "Try different settings. Cannot find any flashcards"}} />
  }
  
  const updateQuestion = (isNextBtnClicked) => {
    if (isNextBtnClicked) {
      setCardNumber((prev) => prev + 1);
      setIsQuestionShown(true);
      return;
    }
    setCardNumber((prev) => prev - 1);
    setIsQuestionShown(true);
  };

  const resetCardDeck = () => {
    setCardNumber(0);
    setIsQuestionShown(true);
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
              {quizData[cardNumber].img ? 
                <img src={quizData[cardNumber].img} alt="image of answer" className={styles.img} /> 
                : null}
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
          <button className={styles.settingBtn} onClick={shuffleCards}>Shuffle Cards</button>
          {cardNumber > 0 ? <button onClick={resetCardDeck} className={styles.settingBtn}> Reset Card Deck</button> : null}
        </div>
        <div className={styles.linkContainer}>
            <Link to="/" className={styles.linkBtn}>Return Home</Link>
        </div>
    </div>
  );
}
