export const reducerAction = {
  INCREMENT_STREAK: "increment_streak",
  RESET_STREAK: "reset_streak",
};

export const initialValue = {
  currentStreak: 0,
  longestStreak: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "increment_streak":
      const newStreak = state.currentStreak + 1;
      return {
        ...state,
        currentStreak: newStreak,
        longestStreak: Math.max(newStreak, state.longestStreak),
      };
    case "reset_streak":
      return {
        ...state,
        currentStreak: 0,
      };
    default:
      return state;
  }
};
