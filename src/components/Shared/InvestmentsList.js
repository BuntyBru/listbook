import React, { useState } from "react";
import { useGet } from "../../Hooks/useApiCalls";
import LoaderElement from "./LoaderElement";
import RetryError from "./RetryError";
import ListEntryCard from "./ListEntryCard";

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
        <ListEntryCard key={x.property_name} property={x} />
      ));
    }
  };

  return (
    <div>
      <p className="headingSection">Investments List</p>
      <div>{renderFunction()}</div>
    </div>
  );
}

export default InvestmentsList;
