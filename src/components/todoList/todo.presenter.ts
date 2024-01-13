import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import {
  addToTodo,
  removeFromTodo,
  todoItem,
  updateTodo,
} from "@/store/todoSlice";
import { Ierror, status } from "@/utils/utils";
import React, { useState, useEffect } from "react";

const initState = { title: "", time: "" };
const useTodo = () => {
  const todos = useAppSelector((state) => state.cart.todoItems);
  const dispatch = useAppDispatch();
  const [newTodo, setNewTodo] = useState<todoItem>({ ...initState });
  const [validateNewTodo, setValidateNewTodo] = useState({});
  const [date, setDate] = useState({});
  const [show, setShow] = useState<{ show: boolean; todo: any }>({
    show: false,
    todo: {},
  });

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 3000);
  }, []);

  const addTodo = () => {
    const error = validateCreation(setValidateNewTodo);
    if (!!error.title || !!error.time) return;
    dispatch(addToTodo({ ...newTodo }));
    setNewTodo({ ...initState });
  };

  const setTodos = () => {};

  const validateCreation = (func: ({}: any) => void) => {
    const error: Ierror = {};
    if (!newTodo.title.trim()) {
      error.title = "Please provide a valid title";
    }
    if (true) {
      error.time = !newTodo.time ? "Please provide a valid time" : null;
      if (new Date() > new Date(newTodo.time))
        error.time = "you selected a previous date";
    }
    func({ ...error });
    console.log("error", error, newTodo);
    return error;
  };

  const changeHandle = (e: any) => {
    if (e?.target?.name === "title") {
      setNewTodo({ ...newTodo, title: e.target.value });
      setValidateNewTodo({
        ...validateNewTodo,
        title: e.target.value ? null : "Please provide a valid title",
      });
    } else {
      setNewTodo({ ...newTodo, time: e as string });
      setValidateNewTodo({
        ...validateNewTodo,
        time: e ? null : "Please provide a valid time",
      });
    }
  };

  const changeModalHandle = (e: any) => {
    if (e?.target?.name === "title") {
      setShow({ ...show, todo: { ...show.todo, title: e.target.value } });
    } else if (e?.target?.name === "status") {
      setShow({ ...show, todo: { ...show.todo, status: e.target.value } });
    } else {
      setShow({ ...show, todo: { ...show.todo, time: e as string } });
    }
  };

  const submitEdit = () => {
    dispatch(updateTodo(show.todo));
    setShow({ show: false, todo: {} });
  };

  const removeTodo = (index: number) => {
    dispatch(removeFromTodo(index));
  };

  const colorfinderForStatus = (str: string): string => {
    if (str === status.pending) return "text-blue-500";
    else if (str === status.cancaled) return "text-red-600";
    else return "text-lime-700";
  };

  const closeModal = () => {
    setShow({ show: false, todo: {} });
  };
  return {
    todos,
    setTodos,
    addTodo,
    changeHandle,
    newTodo,
    removeTodo,
    colorfinderForStatus,
    show,
    setShow,
    closeModal,
    changeModalHandle,
    submitEdit,
    validateNewTodo,
    date,
  };
};

export default useTodo;
