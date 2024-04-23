import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [
  { todo: "Happy National Sovereignty and Children's Day!", id: 23 + "April" },
];

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      return [...state, action.payload];
    },
    removeTodo(state, action) {
      const newList = state.filter((todo) => todo.id !== action.payload.id);
      return [...newList];
    },
    editTodo(state, action) {
      const todoUpdate = { todo: action.payload.todo, id: action.payload.id };
      const newList = state.filter((todo) => todo.id !== action.payload.id);
      return [...newList, todoUpdate];
    },
  },
});

const store = configureStore({
  reducer: { todo: todoSlice.reducer },
});

export const todoActions = todoSlice.actions;

export default store;
