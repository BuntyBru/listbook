import React, { useState } from "react";
import {
  KycBannerWrapper,
  LoaderWrapper,
  DetailsList,
} from "../../styled-comps/DashboardPages";
import { useGet } from "../../Hooks/useApiCalls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import KycBannerInnerElement from "./KycBannerInnerElement";

function Kycbanner() {
  const [retry, setRetry] = useState(false);

  const { data, isLoading, error } = useGet(
    "api/v1/user-management/users/kyc/status/" +
      JSON.parse(localStorage.my_app_user).profile_id,
    retry
  );
  const renderData = () => {
    if (isLoading) {
      return (
        <LoaderWrapper>
          <FontAwesomeIcon icon={faSpinner} />
        </LoaderWrapper>
      );
    } else {
      if (error) {
        return (
          <div>
            Error
            <button
              onClick={() => {
                setRetry(!retry);
              }}
            >
              Retry
            </button>
          </div>
        );
      }
      return <ListofDetails data={data} />;
    }
  };

  return (
    <KycBannerWrapper>
      <h5>DATA STATUS</h5>
      {renderData()}
    </KycBannerWrapper>
  );
}

const ListofDetails = (props) => {
  return (
    <DetailsList>
      <KycBannerInnerElement
        filled={props.data.data.details.personal_info.filled}
        name={"Personal Information"}
      />

      <KycBannerInnerElement
        filled={props.data.data.details.address.filled}
        name={"Address Details"}
      />
      <KycBannerInnerElement
        filled={props.data.data.details.pan.filled}
        name={"Pan Details"}
      />
      <KycBannerInnerElement
        filled={props.data.data.details.bank.filled}
        name={" Bank Account Details"}
      />
    </DetailsList>
  );
};

export default Kycbanner;
