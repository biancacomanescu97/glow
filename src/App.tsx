import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">Hello Glow</Route>
          <Route path="/explore">Explore Glow</Route>
          <Route path="/routine">My routine</Route>
          <Route path="/user/profile">User Profile</Route>
          <Route path="/user/settings">Settings</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
