export const USER_LOGIN_SUCCESS: string = "USER_LOGIN_SUCCESS";
export const USER_LOGOUT: string = "LOGOUT_USER";
export const USER_LOGIN_ERROR: string = "USER_LOGIN_ERROR";

//  User State
export interface UserState {
  name: string;
  email: string;
  id: string;
}

// Action types
export interface UserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS;
  user: UserState;
}
export interface UserLogoutAction {
  type: typeof USER_LOGOUT;
}
export interface UserLoginErrorAction {
  type: typeof USER_LOGIN_ERROR;
}

export type UserActionTypes =
  | UserLoginErrorAction
  | UserLoginSuccessAction
  | UserLogoutAction;
