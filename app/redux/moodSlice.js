import { createSlice } from "@reduxjs/toolkit";

export const Mood = createSlice({
  name: 'mood',
  initialState: { value: 'Light' },
  reducers: {
    SetMood: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { SetMood } = Mood.actions;
export default Mood.reducer;
