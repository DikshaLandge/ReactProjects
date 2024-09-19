import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: [],
};
export const Del_Slice = createSlice({
  name: "deletebtn",
  initialState,
  reducers: {
    deleteTask: (state, actions) => {
      console.log(state.input);
      console.log(actions.payload);

      state.input = actions.payload.arr;
      console.log(state.input);

      state.input = state.input.splice(actions.payload.id, 1);
    },
    // state.input = state.input.splice(actions.payload,1)
  },
});

export const { deleteTask } = Del_Slice.actions;

export default Del_Slice.reducer;
