import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Brands from "./brands/Brands";
import Ingredients from "./ingredients/Ingredients";

export default function Explore() {
  return (
    <main className="-mt-32">
      <div className="max-w-full mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-citron-10 rounded-lg shadow py-4 sm:px-6">
          <div className="container mx-auto sm:px-6 lg:px-8 text-justify text-sm font-medium">
            <Router>
            <Navbar />
              <Switch>
                <Route path="/explore/brands">
                  <Brands />
                </Route>
                <Route path="/explore/ingredients">
                  <Ingredients />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </main>
  );
}
