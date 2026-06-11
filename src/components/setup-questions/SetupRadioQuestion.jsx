import styles from "./SetupQuestion.module.css";
import { useOutletContext } from "react-router";


export default function SetupRadioQuestion({ item, name }) {
  const {setupAnswers, updateRadioAnswers} = useOutletContext();
  return (
    <label
      htmlFor={item.camelCase}
      className={styles.quizType}
      key={item.index}
    >
      <input
        type="radio"
        id={item.camelCase}
        className={styles.inputBtn}
        name={name}
        value={item.camelCase}
        checked={setupAnswers.quizType === item.camelCase}
        onChange={(e) => updateRadioAnswers(e.target.name, e.target.value)}
      />
      {item.text}
    </label>
  );
}
