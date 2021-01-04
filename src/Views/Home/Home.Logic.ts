import { RouteComponentProps } from "react-router-dom";
import { AboutPageReachHandler } from "../About/About.Logic";

// PageAddress
export const HOME_PAGE_ADDRESS = "/";

// Getting route Details
export interface HomeProps extends RouteComponentProps {}

// Custom interface of useHistory to make typescript happy
interface History {
  push: (path: string, state: any) => void;
}

// Hook for Homepage
export const useHomePage = (history: History) => {
  //
  //
  //
  //
  //
  // Event listener for Button that takes us to About Page and passes data as well
  // This function is necessary because we can not call hooks here as they should only be called is components
  function handleGoToAboutPageClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    // This function came from where we are going to take us there
    const { path, state } = AboutPageReachHandler({
      name: "Mabroor Ahmad",
      qual: ["Metric", "Inter", "Bachelor", "Full Stack Engineer"],
    });
    return history.push(path, state);
  }
  //
  //
  //
  //
  //
  return { handleGoToAboutPageClick };
};
