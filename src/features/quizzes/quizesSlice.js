import { createSlice } from "@reduxjs/toolkit";
import { addQuizForTopic } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = {
        id: id,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      };
    }
  }
});

export const thunkAddQuiz = (payload) => {
  const { topicId, id } = payload;
  return (dispatch) => {
    // dispatch multiple actions here
    dispatch(quizzesSlice.actions.addQuiz(payload));
    dispatch(addQuizForTopic({ topicId: topicId, quizId: id }));    
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;