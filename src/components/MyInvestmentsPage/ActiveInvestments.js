import React, { useState, useCallback } from "react";
import InvestmentsPageView from "./InvestmentsPageView";
import { useGet } from "../../Hooks/useApiCalls";
import LoaderElement from "../Shared/LoaderElement";
import RetryError from "../Shared/RetryError";

const ActiveInvestments = () => {
  /**api/v1/platforms/investors/investments-overview?profiles_id__in */
  const [retry, setRetry] = useState(false);
  const { data, isLoading, error } = useGet(
    "api/v1/platforms/deals/investments?profiles_in=" +
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
      return "hello";
      //return <InvestmentsPageView data={data} />;
    }
  };

  return <div className="my_investments_page_view">{renderFunction()}</div>;
};

export default ActiveInvestments;
