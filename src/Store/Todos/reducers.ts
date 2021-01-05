import {
  CreateTodoAction,
  CREATE_TODO,
  DeleteTodoAction,
  DELETE_TODO,
  MarkDoneTodoAction,
  MARK_DONE_TODO,
  TodosActionTypes,
  TodoState,
} from "./types";

const initialState: TodoState = {
  todos: [],
};

export function todosReducer(
  state: TodoState = initialState,
  action: TodosActionTypes
): TodoState {
  switch (action.type) {
    case CREATE_TODO: {
      //   Creating Todo
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.random(),
            task: (action as CreateTodoAction).todo,
            done: false,
          },
        ],
      };
    }
    case DELETE_TODO: {
      // Deleting Todo
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.id !== (action as DeleteTodoAction).id
        ),
      };
    }

    case MARK_DONE_TODO: {
      //   UpdatingTodo
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === (action as MarkDoneTodoAction).id) {
            return { ...todo, done: true };
          }
          return todo;
        }),
      };
    }

    default:
      return state;
  }
}
