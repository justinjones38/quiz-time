import styles from "./FlashcardAnswer.module.css";

export default function FlashcardAnswer({ quizData, cardNumber }) {
  return (
    <div className={styles.backCard}>
      <p className={styles.answer}>{quizData[cardNumber].correctAnswer}</p>
    </div>
  );
}
