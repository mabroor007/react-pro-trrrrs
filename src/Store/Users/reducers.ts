import {
  UserActionTypes,
  UserLoginSuccessAction,
  UserState,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./types";

//  Initial state for user
const initialState: UserState = {
  name: "",
  email: "",
  id: "",
};

export default function userReducer(
  state: UserState = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      const { name, id, email } = (action as UserLoginSuccessAction).user;
      return { name, id, email };
    }
    case USER_LOGIN_ERROR: {
      return { name: "", id: "", email: "" };
    }
    case USER_LOGOUT: {
      return { name: "", id: "", email: "" };
    }
    default:
      return state;
  }
}
