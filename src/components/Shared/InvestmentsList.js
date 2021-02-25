import React, { useState } from "react";
import { useGet } from "../../Hooks/useApiCalls";
import {
  InvestmentList,
  InvestmentListEntry,
} from "../../styled-comps/DashboardPages";
import LoaderElement from "./LoaderElement";
import RetryError from "./RetryError";

function InvestmentsList() {
  const [retry, setRetry] = useState(false);
  const { data, isLoading, error } = useGet(
    "api/v1/platforms/investors/active-investments?profiles_id__in=" +
      JSON.parse(localStorage.my_app_user).profile_id,
    retry
  );

  const renderFunction = () => {
    if (isLoading) {
      return <LoaderElement />;
    } else {
      if (error) {
        return <RetryError retryBool={retry} retryFunc={setRetry} />;
      }
      return data.data.data.map((x) => (
        <InvestmentListEntry key={x.property_name}>
          {x.property_name}
        </InvestmentListEntry>
      ));
    }
  };

  return (
    <div>
      <p className="headingSection">Investments List</p>
      <InvestmentList>{renderFunction()}</InvestmentList>
    </div>
  );
}

export default InvestmentsList;
