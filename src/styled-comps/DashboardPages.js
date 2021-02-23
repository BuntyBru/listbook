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
    height: 100%;
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
