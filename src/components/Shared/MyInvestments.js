import React, { useState } from "react";
import { Buttons } from "../../styled-comps/Buttons";
import ActiveInvestments from "../MyInvestmentsPage/ActiveInvestments";
import OngoingInvestments from "../MyInvestmentsPage/OngoingInvestments";
import SoldInvestments from "../MyInvestmentsPage/SoldInvestments";

function MyInvestments() {
  const [investmentName, setInvestmentName] = useState("ongoing");

  const [obj, setObj] = useState({
    ongoingBool: true,
    activeBool: false,
    soldBool: false,
  });

  const renderFunction = () => {
    switch (investmentName) {
      case "ongoing":
        return <OngoingInvestments />;

      case "active":
        return <ActiveInvestments />;

      case "sold":
        return <SoldInvestments />;

      default:
        return <OngoingInvestments />;
    }
  };

  console.log(obj);

  return (
    <div>
      <div className="button__series">
        <Buttons
          selected={obj.ongoingBool}
          onClick={() => {
            setObj({
              ongoingBool: true,
              activeBool: false,
              soldBool: false,
            });

            setInvestmentName("ongoing");
          }}
        >
          Ongoing Investments
        </Buttons>

        <Buttons
          selected={obj.activeBool}
          onClick={() => {
            setObj({
              ongoingBool: false,
              activeBool: true,
              soldBool: false,
            });

            setInvestmentName("active");
          }}
        >
          Active Investments
        </Buttons>

        <Buttons
          selected={obj.soldBool}
          onClick={() => {
            setObj({
              ongoingBool: false,
              activeBool: false,
              soldBool: true,
            });

            setInvestmentName("sold");
          }}
        >
          Sold Investments
        </Buttons>
      </div>

      {renderFunction()}
    </div>
  );
}

export default MyInvestments;
