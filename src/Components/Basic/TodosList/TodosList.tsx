import React from "react";
import TodoView from "../Todo/TodoView";
import { useTodosList } from "./TodosList.Logic";

const TodosList: React.FC = () => {
  const { todos } = useTodosList();
  return (
    <div>
      {todos.map((todo) => (
        <TodoView key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
