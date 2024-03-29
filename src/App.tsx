import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/home/Home";
import Explore from "./components/explore/Explore";
import Routine from "./components/routine/Routine";
import Footer from "./components/footer/Footer";
import Reviews from "./components/reviews/Reviews";
import AHA from "./components/explore/exfoliants/AHA";
import BHA from "./components/explore/exfoliants/BHA";
import PHA from "./components/explore/exfoliants/PHA";
import Ginseng from "./components/explore/powerhouses/Ginseng";
import Propolis from "./components/explore/powerhouses/Propolis";
import GreenTea from "./components/explore/teas/GreenTea";
import Mugwort from "./components/explore/teas/Mugwort";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/aha">
          <AHA />
        </Route>
        <Route path="/bha">
          <BHA />
        </Route>
        <Route path="/pha">
          <PHA />
        </Route>
        <Route path="/ginseng">
          <Ginseng />
        </Route>
        <Route path="/propolis">
          <Propolis />
        </Route>
        <Route path="/greentea">
          <GreenTea />
        </Route>
        <Route path="/mugwort">
          <Mugwort />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/routine">
          <Routine />
        </Route>
        <Route path="/user/profile">User Profile</Route>
        <Route path="/user/settings">Settings</Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
