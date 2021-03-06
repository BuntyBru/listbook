import styled, { keyframes } from "styled-components";

export const DashboardPages = styled.div`
  height: 100vh;

  & .sidenav {
    width: 300px;
    background: #222222;
    height: 100%;
    position: fixed;
    padding-top: 30px;
  }

  ul {
    list-style: none;
    text-align: center;
    padding-left: 0;
    font-size: 15px;
    font-weight: 700;
  }

  ul li a {
    color: white;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    padding: 20px;
  }

  ul li a:hover {
    background: #323739;
    text-decoration: none;
  }

  ul li .active {
    background: #323739;
    font-weight: bold;
  }

  .mainBody {
    overflow: auto;
    margin-left: 300px;
    padding: 30px;
  }
`;

const downTop = keyframes`
    0% {
      transform: scale(0.1);
      transform:translateY(200px);
      opacity: 0;
    }
    60% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
`;

export const InnerComponents = styled.div`
  animation: ${downTop} 1s;
`;

export const KycBannerWrapper = styled.div`
  background-image: linear-gradient(270deg, #4b000000, #222222 52%);
  padding: 22px 32px 32px;
  border-radius: 8px;
  font-family: "Mulish", sans-serif;
  margin-bottom: 2.5rem;
  & h5 {
    font-size: 18px;
    font-weight: 900;
  }
`;

const spin = keyframes`

  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  `;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  & svg {
    animation: ${spin} infinite 1s linear;
  }
`;

export const DetailsList = styled.div`
  display: flex;

  & p {
    margin-right: 20px;
    font-size: 16px;
    font-weight: bolder;
  }
`;

export const ElementKyc = styled.div`
  margin-right: 20px;
  font-size: 16px;
  font-weight: bolder;

  & svg {
    color: ${(props) => {
      if (props.props.filled) {
        return "green";
      } else {
        return "red";
      }
    }};
  }
`;

export const InvestmentList = styled.div`
  background-image: linear-gradient(270deg, #4b000000, #222222 52%);
  padding: 22px 32px 32px;
  border-radius: 8px;
  font-family: "Mulish", sans-serif;
  margin-bottom: 2.5rem;
  & h5 {
    font-size: 18px;
    font-weight: 900;
  }
`;

export const InvestmentListEntry = styled.div`
  background-image: linear-gradient(270deg, #4b000000, #222222 52%);
  border-radius: 8px;
  font-family: "Mulish", sans-serif;
  margin-bottom: 2.5rem;
  display: flex;

  & div {
    flex: 1;
    text-align: left;
  }

  img {
    width: 100%;
    min-height: 100%;
    height: 100%;
  }

  .other-part {
    flex: 4;

    padding: 20px 20px;
  }

  .location_type {
    display: flex;
  }

  .location_type p {
    flex: 1;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 600;
    margin: 0px;
  }

  .owner {
    margin: 0px;
    margin-top: 20px;
  }

  .details {
    margin-top: 2rem;
    display: flex;
  }
  .details div {
    width: 200px;
    background: white;
    color: #222222;
    margin-right: 100px;
    padding: 10px 20px;
  }

  .details div .amount {
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 0px;
  }
  .details div .sub {
    color: black;
  }
`;
