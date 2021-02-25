import React from "react";
import { InnerComponents } from "../styled-comps/DashboardPages";
import Kycbanner from "./Shared/Kycbanner";
import InvestmentList from "./Shared/InvestmentsList";

function Overview() {
  return (
    <InnerComponents>
      <Kycbanner />
      <InvestmentList />
    </InnerComponents>
  );
}

export default Overview;
