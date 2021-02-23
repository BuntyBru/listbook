import React from "react";
import { DashboardPages } from "../styled-comps/DashboardPages";
import { Link } from "react-router-dom";
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
          <ul>
            <li>
              <Link to="/profile/overview">Overview</Link>
            </li>
            <li>
              <Link to="/profile/my-investments">My Investments</Link>
            </li>
            <li>
              <Link to="/profile/transactions">Transactions</Link>
            </li>
            <li>
              <Link to="/profile/schedule">Schedule Call</Link>
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
