import styles from "./Quiz.module.css";
import { useOutletContext } from "react-router";
import { fetchQuizQuestions } from "../api/api";
import { useEffect, useState } from "react";

export default function Quiz() {
  const { setupAnswers } = useOutletContext();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const fetchResults = await fetchQuizQuestions(
        setupAnswers.categories,
        setupAnswers.difficulties,
      );
      setData(fetchResults);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      {error ? <h2>Error: Cannot fetch flashcards</h2> : null}
      {loading ? <h2>Loading ...</h2> : null}
      {!error && !loading && data ? <h2>test: fetched data</h2> : null}
    </div>
  );
}
