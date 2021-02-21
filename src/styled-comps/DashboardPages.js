import styled from "styled-components";

export const DashboardPages = styled.div`
  height: 100vh;

  & .sidenav {
    width: 300px;
    background: #222222;
    height: 100%;
    position: fixed;
  }

  .mainBody {
    height: 100%;
    overflow: auto;
  }
`;
