import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./Views/About/About";
import { ABOUT_PAGE_ADDRESS } from "./Views/About/About.Logic";
import { Home } from "./Views/Home/Home";
import { HOME_PAGE_ADDRESS } from "./Views/Home/Home.Logic";
import Posts from "./Views/Posts/Posts";
import { POSTS_PAGE_ADDREDD } from "./Views/Posts/Posts.Logic";

//Main App component
export const App: React.FC = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path={HOME_PAGE_ADDRESS} component={Home} />
        <Route exact path={ABOUT_PAGE_ADDRESS} component={About} />
        <Route exact path={POSTS_PAGE_ADDREDD} component={Posts} />
      </Switch>
    </div>
  );
};
