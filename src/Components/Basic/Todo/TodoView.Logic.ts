import { useDispatch } from "react-redux";
import { deleteTodo, markDoneTodo } from "../../../Store/Todos/actions";
import { Todo } from "../../../Store/Todos/types";

export const useTodoView = (todo: Todo) => {
  const dispatch = useDispatch();

  const handleDoneTodo = () => {
    if (todo.done) return;

    dispatch(markDoneTodo(todo.id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  return { handleDoneTodo, handleDeleteTodo };
};
