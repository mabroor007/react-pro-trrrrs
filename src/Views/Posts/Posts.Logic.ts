import { RouteComponentProps } from "react-router-dom";

// Route Address
export const POSTS_PAGE_ADDREDD = "/posts/:name";

//
interface RouteUrlParams {
  name: string;
}

export interface Props extends RouteComponentProps<RouteUrlParams> {}

// Location interface
interface Location {
  pathname?: string;
  search?: string;
  hash?: string;
  state?: any;
}

export const usePostsPage = (location: Location) => {
  console.log(location.search);
  let res: string[] = [];
  if (location.search) {
    res = location.search.split("?")[1].split("=");
  }
  return { res };
};
