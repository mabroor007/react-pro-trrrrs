import { createStore, combineReducers, Store } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { todosReducer } from "./Todos/reducers";

// Creating rootReducer
const rootReducer = combineReducers({
  todos: todosReducer,
});

// Get rootState type
export type rootState = ReturnType<typeof rootReducer>;

// Creating main store
export const store: Store = createStore(rootReducer);

//Creating useSelector Hook for react
export const useTypedSelectorHook: TypedUseSelectorHook<rootState> = useSelector;
