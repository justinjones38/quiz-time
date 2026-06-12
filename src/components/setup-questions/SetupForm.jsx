import styles from "./SetupForm.module.css";
import { data } from "../../utils/data";
import SetupRadioQuestion from "./SetupRadioQuestion";
import SetupChecklistQuestion from "./SetupChecklistQuestion";
import PrimaryBtn from "../btns/PrimaryBtn";
import { useOutletContext } from "react-router";

export default function SetupForm({}) {
  const { setupAnswers } = useOutletContext();
  const isBtnDisabled =
    (!setupAnswers.quizType && !setupAnswers.categories.length > 0) ||
    !setupAnswers.difficulties.length > 0;

    const handleBtnClick = () => {
      
    }
  return (
    <form className={styles.form}>
      <fieldset>
        <legend className={styles.questionTitle}>
          What type of quiz do you want? <span>(Please select at least 1)</span>
        </legend>
        <div className={styles.question}>
          {data.quizType.map((item) => (
            <SetupRadioQuestion key={item.text} item={item} name="quizType" />
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className={styles.questionTitle}>
          What categories of questions do you want for the quiz?{" "}
          <span>(Please select at least 1)</span>
        </legend>
        <div className={styles.question}>
          {data.categories.map((item) => (
            <SetupChecklistQuestion
              key={item.text}
              item={item}
              name="categories"
            />
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className={styles.questionTitle}>
          What level of difficulty do you want from the quiz?{" "}
          <span>(Please select at least 1)</span>
        </legend>
        <div className={styles.question}>
          {data.difficulties.map((item) => (
            <SetupChecklistQuestion
              key={item.text}
              item={item}
              name="difficulties"
            />
          ))}
        </div>
      </fieldset>
      <div className={styles.btnContainer}>
        <PrimaryBtn disabled={isBtnDisabled}>Next</PrimaryBtn>
      </div>
    </form>
  );
}
