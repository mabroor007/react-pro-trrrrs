import {
  TodoAddBtn,
  TodoForm,
  TodoInput,
} from "../../StyledComponents/App.Styled";
import { useAddTodo } from "./AddTodo.Logic";

const AddTodo: React.FC = () => {
  const { handleAddTodo, todo, handleInputChange } = useAddTodo();
  return (
    <div>
      <TodoForm onSubmit={handleAddTodo}>
        <TodoInput
          value={todo}
          onChange={handleInputChange}
          placeholder="Add todo"
        />
        <TodoAddBtn type="submit">Add</TodoAddBtn>
      </TodoForm>
    </div>
  );
};

export default AddTodo;
