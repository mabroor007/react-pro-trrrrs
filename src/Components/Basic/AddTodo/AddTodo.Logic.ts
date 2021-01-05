import { useDispatch } from "react-redux";
import { useState } from "react";
import { createTodo } from "../../../Store/Todos/actions";

export const useAddTodo = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo.length <= 0 || todo.length >= 40) return;
    dispatch(createTodo(todo));
    return setTodo("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return { handleAddTodo, todo, handleInputChange };
};
