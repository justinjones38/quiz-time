import styles from "./SetupForm.module.css";
import { data } from "../../utils/data";
import SetupRadioQuestion from "./SetupRadioQuestion";

export default function SetupForm({}) {
  return (
    <form className={styles.form}>
      <fieldset>
        <legend className={styles.questionTitle}>
          What type of quiz do you want?
        </legend>
        <div className={styles.question}>
          {data.quizType.map((item) => (
            <SetupRadioQuestion key={item.text} item={item} name="quizType" />
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className={styles.questionTitle}>
          What type of quiz do you want?
        </legend>
        <div className={styles.question}>
          {data.quizType.map((item) => (
            <SetupRadioQuestion key={item.text} item={item} name="quizType" />
          ))}
        </div>
      </fieldset>
    </form>
  );
}
