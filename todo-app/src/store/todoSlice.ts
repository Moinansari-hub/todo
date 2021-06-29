import { createSlice } from "@reduxjs/toolkit";

import Todo from "../models/Todo";

type TodosStateType = {
  todos: Todo[];
};

const initialState: TodosStateType = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, action) {
      const { payload } = action;
      state.todos.push(new Todo(payload));
    },
  },
});

export const TodoReducer = todoSlice.reducer;
export const TodoActions = todoSlice.actions;
