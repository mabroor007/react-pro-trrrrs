import { createStore, combineReducers, Store, applyMiddleware } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { todosReducer } from "./Todos/reducers";
import thunk from "redux-thunk";
import userReducer from "./Users/reducers";

// Creating rootReducer
const rootReducer = combineReducers({
  todos: todosReducer,
  user: userReducer,
});

// Get rootState type
export type rootState = ReturnType<typeof rootReducer>;

// Creating main store
export const store: Store = createStore(rootReducer, applyMiddleware(thunk));

//Creating useSelector Hook for react
export const useTypedSelectorHook: TypedUseSelectorHook<rootState> = useSelector;
