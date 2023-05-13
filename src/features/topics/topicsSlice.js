import { createSlice } from "@reduxjs/toolkit";

export const topicsSlics = createSlice({
  name: 'topics', 
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    },
    addQuizForTopic: (state, action ) => {
      const topicId = action.payload.topicId
      const topic = state.topics[topicId];
      topic.quizIds.push(action.payload.quizId);
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizForTopic } = topicsSlics.actions;
export default topicsSlics.reducer;