import styles from "./FlashcardQuestion.module.css";

export default function FlashcardQuestion({quizData, cardNumber}) {
  return (
    <div className={styles.frontCard}>
      <p className={styles.question}>
        {quizData[cardNumber].question.text}
        {quizData[cardNumber].img ? (
          <img
            src={quizData[cardNumber].img}
            alt={quizData[cardNumber].altText}
            className={styles.img}
          />
        ) : null}
      </p>
    </div>
  );
}
