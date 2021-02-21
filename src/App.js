import "./App.css";

import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import LoggedUserRoute from "./utils/LoggedUserRoute";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <LoggedUserRoute exact path="/login" component={Login} />
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/profile" component={Dashboard} />
        <Route path="*" component={() => "404 Not found"} />
      </Switch>
    </div>
  );
}

export default App;
