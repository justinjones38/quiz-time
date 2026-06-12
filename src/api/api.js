export const fetchQuizQuestions = async(quizType, difficulty, categories) => {
  try {
    const res = await fetch(`https://the-trivia-api.com/v2/questions?contentFilter=family`);
    if(!res.ok) {
      throw new Error("cannot fetch data")
    }
    const resJson = await res.json();
    return resJson;
  } catch(err) {
    return err;
  }
}