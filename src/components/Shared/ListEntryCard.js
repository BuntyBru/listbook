import React from "react";
import { InvestmentListEntry } from "../../styled-comps/DashboardPages";

function ListEntryCard({ property }) {
  return (
    <InvestmentListEntry>
      <div className="img-holder">
        <img
          alt={property.property_name}
          src={
            property.property_thumbnail == null
              ? "https://strata-frontend.s3.ap-south-1.amazonaws.com/assets/Aquila/Closed+Assets_Grayscale_Phoenix+Aquilla.png"
              : property.property_thumbnail
          }
        />
      </div>
      <div className="other-part">
        <h5>{property.property_name}</h5>
        <div className="location_type">
          <p>{property.location}</p>
          <p>{property.asset_type}</p>
        </div>
        <p className="owner">{property.ownership[0].investor_name}</p>
        <p className="sub">Owner</p>
        <div className="details">
          <div>
            <p className="amount">{property.amount_invested}</p>
            <p className="sub">Investment</p>
          </div>

          <div>
            <p className="amount">{property.market_value}</p>
            <p className="sub">market value</p>
          </div>

          <div>
            <p className="amount">{property.total_earnings}</p>
            <p className="sub">total earnings</p>
          </div>
        </div>
      </div>
    </InvestmentListEntry>
  );
}

export default ListEntryCard;
