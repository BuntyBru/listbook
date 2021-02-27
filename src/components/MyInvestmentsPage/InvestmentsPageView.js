import React from "react";
import styled from "styled-components";

const ParentView = styled.div``;

export default function InvestmentsPageView({ data }) {
  console.log(data.data.results);
  return (
    <ParentView>
      {data.data.results.map((x) => (
        <div key={x.asset_id}>
          <p>{x.status_name}</p>
          <p>{x.deal_details.asset_display_name}</p>
          <p>{x.amount_interested}</p>
        </div>
      ))}
    </ParentView>
  );
}
