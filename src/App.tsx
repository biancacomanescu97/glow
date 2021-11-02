import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Brands from "./components/explore/brands/Brands";
import Explore from "./components/explore/Explore";
import Ingredients from "./components/explore/ingredients/Ingredients";
import Navbar from "./components/navigation/Navbar";
import Routine from "./components/routine/Routine";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">Hello Glow</Route>
          <Route path="/explore/brands">
            <Explore />
          </Route>
          <Route path="/explore/ingredients">
            <Explore />
          </Route>
          <Route path="/routine">
            <Routine />
          </Route>
          <Route path="/user/profile">User Profile</Route>
          <Route path="/user/settings">Settings</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
