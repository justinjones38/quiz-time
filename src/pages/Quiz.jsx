import styles from "./Quiz.module.css";
import { useOutletContext } from "react-router";
import { fetchQuizQuestions } from "../api/api";
import { useEffect, useState } from "react";

export default function Quiz() {
  const {setupAnswers} = useOutletContext()
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);
  console.log(data);
  useEffect(() => {
    const fetchData = async() => {
      setLoading(true);
      try {
        const fetchResults = await fetchQuizQuestions();
        setData(fetchResults);

      } catch(err) {
        setError(true); 
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [])
  return ( 
    <h1>test</h1>
  );
}
