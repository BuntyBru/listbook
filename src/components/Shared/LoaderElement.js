import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderWrapper } from "../../styled-comps/DashboardPages";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function LoaderElement() {
  return (
    <LoaderWrapper>
      <FontAwesomeIcon icon={faSpinner} />
    </LoaderWrapper>
  );
}

export default LoaderElement;
