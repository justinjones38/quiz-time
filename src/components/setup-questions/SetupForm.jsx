import styles from "./SetupForm.module.css";
import { data } from "../../utils/data";
import SetupRadioQuestion from "./SetupRadioQuestion";
import SetupChecklistQuestion from "./SetupChecklistQuestion";

export default function SetupForm({}) {
  return (
    <form className={styles.form}>
      <fieldset>
        <legend className={styles.questionTitle}>
          What type of quiz do you want? (Please only select 1)
        </legend>
        <div className={styles.question}>
          {data.quizType.map((item) => (
            <SetupRadioQuestion key={item.text} item={item} name="quizType" />
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className={styles.questionTitle}>
          What categories of questions do you want for the quiz? (Please select at least 1)
        </legend>
        <div className={styles.question}>
          {data.categories.map((item) => (
            <SetupChecklistQuestion key={item.text} item={item} name="categories" />
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className={styles.questionTitle}>
          What level of difficulty do you want from the quiz? (Please select at least 1)
        </legend>
        <div className={styles.question}>
          {data.difficulties.map((item) => (
            <SetupChecklistQuestion key={item.text} item={item} name="difficulties" />
          ))}
        </div>
      </fieldset>
    </form>
  );
}
