import { Todo } from "../../../Store/Todos/types";
import {
  TodoCover,
  TodoDelBtn,
  TodoDoneBtn,
  TodoTask,
} from "../../StyledComponents/App.Styled";
import { useTodoView } from "./TodoView.Logic";

interface Props {
  todo: Todo;
}

const TodoView: React.FC<Props> = ({ todo }) => {
  const { handleDoneTodo, handleDeleteTodo } = useTodoView(todo);
  return (
    <TodoCover done={todo.done}>
      <TodoTask>{todo.task}</TodoTask>
      <TodoDelBtn onClick={handleDeleteTodo}>Delete</TodoDelBtn>
      <TodoDoneBtn done={todo.done} onClick={handleDoneTodo}>
        Done
      </TodoDoneBtn>
    </TodoCover>
  );
};

export default TodoView;
