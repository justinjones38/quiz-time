import styles from "./SetupQuestion.module.css";
import { useOutletContext } from "react-router";

export default function SetupChecklistQuestion({ item, name }) {
  const { setupAnswers, updateCheckListAnswers } = useOutletContext();
  return (
    <label
      htmlFor={item.camelCase}
      className={styles.quizType}
      key={item.index}
    >
      <input
        type="checkbox"
        id={item.camelCase}
        className={styles.inputBtn}
        name={name}
        value={item.apiName}
        checked={setupAnswers[name].includes(item.apiName)}
        onChange={(e) => updateCheckListAnswers(e.target.name, e.target.value)}
      />
      {item.text}
    </label>
  );
}
