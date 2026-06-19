import styles from "./FlashcardSettings.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import InputAnswer from "../InputAnswer";
import PrimaryBtn from "../buttons/PrimaryBtn";
import { Link } from "react-router";


export default function FlashcardSettings({
  cardNumber,
  quizData,
  updateQuestion,
  dispatch,
  handleShuffle,
  resetCardDeck,
}) {
  return (
    <>
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
      <InputAnswer
        correctAnswer={quizData[cardNumber].correctAnswer}
        cardNumber={cardNumber}
        dispatch={dispatch}
      />
      <div className={styles.settingBtnContainer}>
        <PrimaryBtn onClick={handleShuffle}>Shuffle Cards</PrimaryBtn>
        {cardNumber > 0 ? (
          <PrimaryBtn onClick={resetCardDeck}> Reset Card Deck</PrimaryBtn>
        ) : null}
      </div>
      <div className={styles.linkContainer}>
        <Link to="/" className={styles.linkBtn}>
          Return Home
        </Link>
      </div>
    </>
  );
}
