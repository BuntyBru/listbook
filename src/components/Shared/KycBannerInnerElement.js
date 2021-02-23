import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ElementKyc } from "../../styled-comps/DashboardPages";

function KycBannerInnerElement(props) {
  let { filled, name } = props;
  return (
    <ElementKyc props={props}>
      {filled ? (
        <FontAwesomeIcon icon={faCheckSquare} />
      ) : (
        <FontAwesomeIcon icon={faTimesCircle} />
      )}{" "}
      {name}
    </ElementKyc>
  );
}

export default KycBannerInnerElement;
