import { Dispatch } from "redux";
import {
  UserActionTypes,
  UserState,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./types";

export const logInUserAction = () => async (
  dispatch: Dispatch<UserActionTypes>
) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    if (data) {
      dispatch({ type: USER_LOGIN_SUCCESS, user: (data as UserState[])[0] });
    }
  } catch (error) {
    dispatch({ type: USER_LOGIN_ERROR });
  }
};

export const logOutUser = (): UserActionTypes => {
  return {
    type: USER_LOGOUT,
  };
};
