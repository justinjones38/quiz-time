import styles from "./Home.module.css"
import { useOutletContext } from "react-router"

export default function Home() {
  const {quizQuestions, updateQuestions} = useOutletContext()
  return (
  <div className={styles.container}>
    <h2 className={styles.pageTitle}>Welcome to Quiz Time!</h2>
    <p className={styles.description}>
      Please answer the questions below to get started with your questions
    </p>
    <form className={styles.form}>
      <fieldset>
        <legend>What type of quiz do you want?</legend>
        <div className={styles.questions}>
          <label htmlFor="quiz-type">
            <input 
              type="radio" 
              id="quiz-type" 
              name="quizType" 
              value="textBased" 
              checked={quizQuestions.quizType === "textBased"} 
              onChange={(e) => updateQuestions(e.target.name, e.target.value)}
              />
            Text-based
          </label>
          <label htmlFor="quiz-type">
            <input 
              type="radio" 
              id="quiz-type" 
              name="quizType" 
              value="imageBased" 
              checked={quizQuestions.quizType === "imageBased"} 
              onChange={(e) => updateQuestions(e.target.name, e.target.value)}      
              />
            Image-based
          </label>
        </div>

      </fieldset>
    </form>
  </div>
  )
}