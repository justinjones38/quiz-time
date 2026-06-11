import styles from "./SetupForm.module.css"
import { useOutletContext } from "react-router"
export default function SetupForm({}) {
  const {setupAnswers, updateSetupAnswers} = useOutletContext()
  return (
    <form className={styles.form}>
      <fieldset>
        <legend>What type of quiz do you want?</legend>
        <div className={styles.question}>
          <label htmlFor="text-based" className={styles.quizType}>
            <input 
              type="radio" 
              id="text-based"
              className={styles.radioBtn} 
              name="quizType" 
              value="textBased" 
              checked={setupAnswers.quizType === "textBased"} 
              onChange={(e) => updateSetupAnswers(e.target.name, e.target.value)}
              />
            Text-based
          </label>
          <label htmlFor="image-based" className={styles.quizType}>
            <input 
              type="radio" 
              id="image-based"
              className={styles.radioBtn}  
              name="quizType" 
              value="imageBased" 
              checked={setupAnswers.quizType === "imageBased"} 
              onChange={(e) => updateSetupAnswers(e.target.name, e.target.value)}      
              />
            Image-based
          </label>
        </div>

      </fieldset>
    </form>
  )
}