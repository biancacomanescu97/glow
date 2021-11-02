import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Explore from "./components/explore/Explore";
import Navbar from "./components/navigation/Navbar";
import Routine from "./components/routine/Routine";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">Hello Glow</Route>
          <Route path="/explore">
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
