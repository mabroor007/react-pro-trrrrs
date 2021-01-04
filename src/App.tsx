import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { About } from "./Views/About/About";
import { ABOUT_PAGE_ADDRESS } from "./Views/About/About.Logic";
import { Home } from "./Views/Home/Home";
import { HOME_PAGE_ADDRESS } from "./Views/Home/Home.Logic";
import Posts from "./Views/Posts/Posts";
import { POSTS_PAGE_ADDREDD } from "./Views/Posts/Posts.Logic";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { TODOS_PAGE_ADDRESS } from "./Views/Todos/Todos.Logic";
import Todos from "./Views/Todos/Todos";

//Main App component
export const App: React.FC = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

const AppWrapper: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          in={true}
          timeout={500}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path={HOME_PAGE_ADDRESS} component={Home} />
            <Route exact path={TODOS_PAGE_ADDRESS} component={Todos} />
            <Route exact path={ABOUT_PAGE_ADDRESS} component={About} />
            <Route exact path={POSTS_PAGE_ADDREDD} component={Posts} />
            <Route path="*" render={() => <h1>404 Not Found</h1>} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
