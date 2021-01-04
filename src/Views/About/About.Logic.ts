import { RouteComponentProps } from "react-router-dom";

// Name of Route
export const ABOUT_PAGE_ADDRESS: string = "/about";

// State recived from router notice they are ? because they may not exist when user goes comes to this page from url directly
export interface AboutPageRouteState {
  name?: string;
  qual?: string[];
}

// Creating Props that include Route Details
export interface AboutPageProps
  extends RouteComponentProps<{}, {}, AboutPageRouteState> {}

// Function to get to this route programatically
export const AboutPageReachHandler = (params: AboutPageRouteState) => {
  return { path: ABOUT_PAGE_ADDRESS, state: params };
};

export const useAboutPage = () => {
  return {};
};
