import AddTodo from "../../Components/Basic/AddTodo/AddTodo";
import TodosList from "../../Components/Basic/TodosList/TodosList";
import {
  MainContent,
  Page,
  TodoContent,
  TodosTitle,
} from "../../Components/StyledComponents/App.Styled";

const Todos: React.FC = () => {
  return (
    <Page>
      <MainContent>
        <TodoContent>
          <TodosTitle>Todos</TodosTitle>
          <AddTodo />
          <TodosList />
        </TodoContent>
      </MainContent>
    </Page>
  );
};

export default Todos;
