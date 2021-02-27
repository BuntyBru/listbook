import React, { useReducer } from "react";
import Reducer from "../../Hooks/Reducer";
import { Buttons } from "../../styled-comps/Buttons";

function MyInvestments() {
  let data = [];
  const [state, dispatch] = useReducer(Reducer, data);
  console.log("State", state);
  return (
    <div>
      <div className="button__series">
        <Buttons
          onClick={() => {
            dispatch("ongoing");
          }}
        >
          Ongoing Investments
        </Buttons>
        <Buttons
          onClick={() => {
            dispatch("active");
          }}
        >
          Active Investments
        </Buttons>
        <Buttons
          onClick={() => {
            dispatch("sold");
          }}
        >
          Sold Investments
        </Buttons>
      </div>

      {state.map((x) => (
        <p key={x}>{x}</p>
      ))}
    </div>
  );
}

export default MyInvestments;
