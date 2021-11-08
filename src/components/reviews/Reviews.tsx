import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import Navbar from "./Navbar";
import Favourites from "./brands/Favourites";
import BeautyOfJoseon from "./brands/BeautyOfJoseon";
import Cosrx from "./brands/Cosrx";
import Fresh from "./brands/Fresh";
import HaruHaru from "./brands/HaruHaru";
import ImFrom from "./brands/ImFrom";
import Laneige from "./brands/Laneige";
import MakePrem from "./brands/MakePrem";
import PaulasChoice from "./brands/PaulasChoice";
import Sioris from "./brands/Sioris";
import TheInkeyList from "./brands/TheInkeyList";
import TheOrdinary from "./brands/TheOrdinary";

export default function Reviews() {
  let match = useRouteMatch();

  return (
    <main className="flex">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={`${match.path}`}>
            <Favourites />
          </Route>
          <Route path={`${match.path}/joseon`}>
            <BeautyOfJoseon />
          </Route>
          <Route path={`${match.path}/cosrx`}>
            <Cosrx />
          </Route>
          <Route path={`${match.path}/fresh`}>
            <Fresh />
          </Route>
          <Route path={`${match.path}/haruharu`}>
            <HaruHaru />
          </Route>
          <Route path={`${match.path}/imfrom`}>
            <ImFrom />
          </Route>
          <Route path={`${match.path}/laneige`}>
            <Laneige />
          </Route>
          <Route path={`${match.path}/makeprem`}>
            <MakePrem />
          </Route>
          <Route path={`${match.path}/paulaschoice`}>
            <PaulasChoice />
          </Route>
          <Route path={`${match.path}/sioris`}>
            <Sioris />
          </Route>
          <Route path={`${match.path}/theinkeylist`}>
            <TheInkeyList />
          </Route>
          <Route path={`${match.path}/theordinary`}>
            <TheOrdinary />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}
