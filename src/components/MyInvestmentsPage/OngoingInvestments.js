import React, { useState } from "react";
import InvestmentsPageView from "./InvestmentsPageView";
import { useGet } from "../../Hooks/useApiCalls";
import LoaderElement from "../Shared/LoaderElement";
import RetryError from "../Shared/RetryError";

function OngoingInvestments(props) {
  console.log(props);
  //const [retry, setRetry] = useState(false);
  /*const { data, isLoading, error } = useGet(
    "api/v1/platforms/investors/ongoing-investments?profiles_in=" +
      JSON.parse(localStorage.my_app_user).profile_id,
    retry
  );*/

  const renderFunction = () => {
    if (props.values.isLoading) {
      return <LoaderElement />;
    } else {
      if (props.values.error) {
        return (
          <RetryError
            retryBool={props.values.retry}
            retryFunc={props.values.setRetry}
          />
        );
      }
      //return "check";
      return <InvestmentsPageView data={props.values.data} />;
    }
  };

  return <div className="my_investments_page_view">{renderFunction()}</div>;
}

export default OngoingInvestments;
