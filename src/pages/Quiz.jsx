import styles from "./Quiz.module.css";
import { useOutletContext } from "react-router";

export default function Quiz() {
  const {setupAnswers} = useOutletContext()
  console.log(setupAnswers);
  return (
    <h1>test</h1>
  );
}
