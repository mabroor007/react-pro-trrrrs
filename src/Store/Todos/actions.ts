import {
  CreateTodoAction,
  DeleteTodoAction,
  CREATE_TODO,
  DELETE_TODO,
  MarkDoneTodoAction,
  MARK_DONE_TODO,
} from "./types";

// Action Creators
export function createTodo(todo: string): CreateTodoAction {
  return {
    type: CREATE_TODO,
    todo: todo,
  };
}

export function deleteTodo(id: number): DeleteTodoAction {
  return {
    type: DELETE_TODO,
    id: id,
  };
}

export function markDoneTodo(id: number): MarkDoneTodoAction {
  return {
    type: MARK_DONE_TODO,
    id: id,
  };
}
