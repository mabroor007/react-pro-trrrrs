import { useTypedSelectorHook, rootState } from "../../../Store/store";

export const useTodosList = () => {
  const todos = useTypedSelectorHook((state) => state.todos).todos;
  return { todos };
};
