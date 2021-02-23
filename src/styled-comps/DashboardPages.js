import styled from "styled-components";

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

  .mainBody {
    height: 100%;
    overflow: auto;
    margin-left: 300px;
    padding: 30px;
  }
`;
