import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { useTypedSelectorHook } from "../../Store/store";
import { logInUserAction } from "../../Store/Users/actions";
import { AboutPageReachHandler } from "../About/About.Logic";
import { TodosPageReachHandler } from "../Todos/Todos.Logic";

// PageAddress
export const HOME_PAGE_ADDRESS = "/";

// Getting route Details
export interface HomeProps extends RouteComponentProps {}

// Custom interface of useHistory to make typescript happy
interface History {
  push: (path: string, state?: any) => void;
}

// Hook for Homepage
export const useHomePage = (history: History) => {
  const user = useTypedSelectorHook((state) => state.user);
  const dispatch = useDispatch();
  // Event listener for Button that takes us to About Page and passes data as well
  // This function is necessary because we can not call hooks here as they should only be called is components
  const handleGoToAboutPageClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // This function came from where we are going to take us there
    const { path, state } = AboutPageReachHandler({
      name: "Mabroor Ahmad",
      qual: ["Metric", "Inter", "Bachelor", "Full Stack Engineer"],
    });
    return history.push(path, state);
  };
  //
  //
  const handleStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // This function came from where we are going to take us there
    const { path } = TodosPageReachHandler();
    return history.push(path);
  };

  const handleLogin = () => {
    dispatch(logInUserAction());
  };

  return { handleGoToAboutPageClick, handleStart, user, handleLogin };
};
