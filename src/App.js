import "./App.css";
import Users from "./Components/Users/Users";

import { Switch, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Comments from './Components/Comments/Comments'
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Users />} />
        <Route
          path="/profile/:id"
          render={(defaultProps) => <Profile {...defaultProps} />}
        />

        <Route
          path="/post/comments/:id"
          render={(props) => <Comments {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
