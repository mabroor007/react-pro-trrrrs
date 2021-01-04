export const CREATE_TODO: string = "CREATE_TODO";
export const DELETE_TODO: string = "DELETE_TODO";
export const MARK_DONE_TODO: string = "MARK_DONE_TODO";

// Todo State Interface
export interface Todo {
  id: number;
  task: string;
  done: boolean;
}
export interface TodoState {
  todos: Array<Todo>;
}

// Actions interfaces
export interface CreateTodoAction {
  type: typeof CREATE_TODO;
  todo: string;
}
export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  id: number;
}
export interface MarkDoneTodoAction {
  type: typeof MARK_DONE_TODO;
  id: number;
}

export type TodosActionTypes =
  | CreateTodoAction
  | DeleteTodoAction
  | MarkDoneTodoAction;
