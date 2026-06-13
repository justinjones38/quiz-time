export const fetchQuizQuestions = async (categories = [], difficulty = []) => {
  const difficultyParams =
    difficulty.length > 0 ? `&difficulties=${[...difficulty].join(",")}` : "";

  const categoryParams =
    categories.length > 0 ? `&categories=${[...categories].join(",")}` : "";
  try {
    const res = await fetch(
      `https://the-trivia-api.com/v2/questions?contentFilter=family${categoryParams}${difficultyParams}`,
    );
    if (!res.ok) {
      throw new Error("cannot fetch data");
    }
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    return err;
  }
};
