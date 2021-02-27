import "./App.css";
import React, { Suspense } from "react";
//import LandingPage from "./components/LandingPage";
//import Dashboard from "./components/Dashboard";
//import Login from "./components/Login/Login";
//import ProtectedRoute from "./utils/ProtectedRoute";
//import LoggedUserRoute from "./utils/LoggedUserRoute";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import ErrorBoundary from "./components/Shared/ErrorBoundary";

const DashboardComponent = React.lazy(() => import("./components/Dashboard"));
const LandingComponent = React.lazy(() => import("./components/LandingPage"));
const LoginComponent = React.lazy(() => import("./components/Login/Login"));
const ProtectedRouteComponent = React.lazy(() =>
  import("./utils/ProtectedRoute")
);
const LoggedUserRouteComponent = React.lazy(() =>
  import("./utils/LoggedUserRoute")
);

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Navbar />
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <LoggedUserRouteComponent
              exact
              path="/login"
              component={LoginComponent}
            />
            <Route exact path="/" component={LandingComponent} />
            <ProtectedRouteComponent
              exact
              path="/profile/:id"
              component={DashboardComponent}
            />
          </Suspense>
          <Route path="*" component={() => "404 Not found"} />
        </Switch>
      </div>
    </ErrorBoundary>
  );
}

export default App;
