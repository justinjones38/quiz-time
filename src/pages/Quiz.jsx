import styles from "./Quiz.module.css";
import { useOutletContext } from "react-router";
import { fetchQuizQuestions } from "../api/api";
import { useEffect, useState } from "react";
import Flashcards from "../components/Flashcards";
import { imageQuestions } from "../utils/data";

export default function Quiz() {
  const { setupAnswers } = useOutletContext();
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const fetchResults = await fetchQuizQuestions(
        setupAnswers.categories,
        setupAnswers.difficulties,
      );
      setQuizData(fetchResults);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if(setupAnswers.quizType === "imageBased") {
      setQuizData(imageQuestions);
      return;
    }
    fetchData();
  }, []);

  const shuffleCards = () => {
    return;
  }
  return (
    <div className={styles.container}>
      {error ? <h2>Error: Cannot fetch flashcards</h2> : null}
      {loading ? <h2>Loading ...</h2> : null}
      {!error && !loading && quizData ? (
        <Flashcards quizData={quizData} setQuizData={setQuizData} />
      ) : null}
    </div>
  );
}
