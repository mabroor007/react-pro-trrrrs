import {
  MainContent,
  Page,
  TodoContent,
  TodoInput,
  TodosTitle,
} from "../../Components/StyledComponents/App.Styled";

const Todos: React.FC = () => {
  return (
    <Page>
      <MainContent>
        <TodoContent>
          <TodosTitle>Todos</TodosTitle>
          <TodoInput type="text" placeholder="New Todo" />
        </TodoContent>
      </MainContent>
    </Page>
  );
};

export default Todos;
