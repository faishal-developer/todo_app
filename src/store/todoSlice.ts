"use client";
import { createDataLS, getDataLS } from "@/helper/helper";
import { lsnames } from "@/utils/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type statusType = "pending" | "completed" | "canceled";
export interface todoItem {
  title: string;
  time: string;
  status?: statusType;
  id?: number;
}

interface TodoState {
  todoItems: todoItem[];
}

export const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    todoItems: [...getDataLS(lsnames.todo)] as todoItem[],
  },
  reducers: {
    addToTodo: (state, action: PayloadAction<todoItem>) => {
      console.log(action.payload);
      state.todoItems = [
        ...state.todoItems,
        {
          ...action.payload,
          status: "pending",
          id: state.todoItems?.length,
        },
      ];
      createDataLS(state.todoItems, lsnames.todo);
    },
    updateTodo: (state, action: PayloadAction<todoItem>) => {
      console.log(action.payload);
      const current = state.todoItems.findIndex(
        (item) => item.id === action.payload?.id
      );
      state.todoItems[current] = action.payload;
      createDataLS(state.todoItems, lsnames.todo);
    },
    removeFromTodo: (state, action: PayloadAction<string | number>) => {
      const id = action.payload;
      const newTodo = state.todoItems.filter((item) => item.id !== id);
      state.todoItems = newTodo;
      createDataLS(state.todoItems, lsnames.todo);
    },
  },
});

export const { addToTodo, updateTodo, removeFromTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
