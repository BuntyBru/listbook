import React from "react";
import { RetryErrorStyle } from "../../styled-comps/RetryErrorStyle";

function RetryError({ retryBool, retryFunc }) {
  return (
    <RetryErrorStyle>
      <p>Error, please retry</p>
      <button
        onClick={() => {
          retryFunc(!retryBool);
        }}
      >
        Retry
      </button>
    </RetryErrorStyle>
  );
}

export default RetryError;
