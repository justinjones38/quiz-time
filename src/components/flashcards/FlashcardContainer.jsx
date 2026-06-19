import { useEffect, useState, useReducer } from "react";
import styles from "./FlashcardContainer.module.css";
import { Navigate } from "react-router";
import { shuffleArr } from "../../utils/helper";
import { initialValue, reducer } from "../../reducer/reducer";
import FlashcardSettings from "./FlashcardSettings";
import FlashcardQuestion from "./FlashcardQuestion";
import FlashcardAnswer from "./FlashcardAnswer";

export default function FlashcardContainer({ quizData, setQuizData }) {
  const [isQuestionShown, setIsQuestionShown] = useState(true);
  const [cardNumber, setCardNumber] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialValue);

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
      if ((e.ctrlKey && e.key === "ArrowUp") || e.key === "ArrowDown") {
        setIsQuestionShown((prev) => !prev);
      } else if (e.ctrlKey && e.key === "ArrowLeft" && cardNumber !== 0) {
        updateQuestion(false);
      } else if (
        e.ctrlKey &&
        e.key === "ArrowRight" &&
        cardNumber < quizData.length - 1
      ) {
        updateQuestion(true);
      }
    };

    document.addEventListener("keydown", handleKeyEvents);

    return () => document.removeEventListener("keydown", handleKeyEvents);
  });

  if(masteredCards.length === 10) {
    return (
      <Navigate 
        to="/"
        state={{
          message: "Congratulations! You have mastered all flashcards. Please adjust settings and try some more.",
          completed: true,
        }}
      />
    )
  }  

  if (quizData.length === 0) {
    return (
      <Navigate
        to="/"
        state={{
          message: "Try different settings. Cannot find any flashcards",
          completed: false
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

  const addMasteredCards = (card) => {
    if(cardNumber === quizData.length - 1) {
      setCardNumber(prev => prev - 1)
    };
    setIsQuestionShown(true);
    setMasteredCards((prev) => [
      ...prev,
      quizData.find((item) => item.id === card.id),
    ]);
    setQuizData((prev) => prev.filter((item) => item.id !== card.id));
  };

  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Test your trivial skills with fun, thought-provoking, random questions
      </p>
      <div className={styles.streakContainer}>
        <p className={styles.currentStreak}>
          Current Streak: {state.currentStreak}{" "}
        </p>
        <p className={styles.longestStreak}>
          Longest Streak: {state.longestStreak}
        </p>
      </div>
      <p className={styles.cardNumber}>
        Card {cardNumber + 1} of {quizData.length}
      </p>
      <div
        className={`${styles["flashcard"]} ${styles[quizData[cardNumber].difficulty]} `}
        onClick={() => setIsQuestionShown((prev) => !prev)}
      >
        {isQuestionShown ? (
          <FlashcardQuestion quizData={quizData} cardNumber={cardNumber} />
        ) : (
          <FlashcardAnswer quizData={quizData} cardNumber={cardNumber} />
        )}
      </div>
      <FlashcardSettings
        cardNumber={cardNumber}
        quizData={quizData}
        updateQuestion={updateQuestion}
        dispatch={dispatch}
        handleShuffle={handleShuffle}
        resetCardDeck={resetCardDeck}
        addMasteredCards={addMasteredCards}
      />

    </div>
  );
}
