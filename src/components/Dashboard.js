import React from "react";
import {
  DashboardPages,
  DashboardLinkPage,
} from "../styled-comps/DashboardPages";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Overview from "./Overview";
import Investments from "./Investments";
import Transactions from "./Transactions";
import Schedule from "./Schedule";

function Dashboard() {
  return (
    <Router>
      <DashboardPages>
        <div className="sidenav">
          <ul className="nav navbar-nav">
            <li>
              <NavLink activeClassName="active" to="/profile/overview">
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/profile/my-investments">
                My Investments
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/profile/transactions">
                Transactions
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/profile/schedule">
                Schedule Call
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="mainBody">
          <Switch>
            <Route path="/profile/overview" component={Overview} />
            <Route path="/profile/my-investments" component={Investments} />
            <Route path="/profile/transactions" component={Transactions} />
            <Route path="/profile/schedule" component={Schedule} />
            <Route
              path="*"
              component={() => "Not sure what you are looking for"}
            />
          </Switch>
        </div>
      </DashboardPages>
    </Router>
  );
}

export default Dashboard;
