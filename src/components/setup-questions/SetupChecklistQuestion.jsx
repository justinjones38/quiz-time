import styles from "./SetupQuestion.module.css";
import { useOutletContext } from "react-router";


export default function SetupChecklistQuestion({ item, name }) {
  const {setupAnswers, updateSetupAnswers} = useOutletContext();
  return (
    <label
      htmlFor={item.camelCase}
      className={styles.quizType}
      key={item.index}
    >
      <input
        type="checklist"
        id={item.camelCase}
        className={styles.inputBtn}
        name={name}
        value={item.camelCase}
        checked={setupAnswers.quizType === item.camelCase}
        onChange={(e) => updateSetupAnswers(e.target.name, e.target.value)}
      />
      {item.text}
    </label>
  );
}
