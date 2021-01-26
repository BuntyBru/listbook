import "./App.css";

import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/profile" component={Dashboard} />
        <Route path="*" component={() => "404 Not found"} />
      </Switch>
    </div>
  );
}

export default App;
