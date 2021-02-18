import styled from "styled-components";

export const Navbar = styled.div`
  background-color: #222222;
  padding: 14px;

  position: sticky;
  top: 0px;
  color: white;
  display: flex;

  & div {
    flex: 1;
  }
  p {
    color: white;
    font-weight: 500;
    margin: 0px;
    text-align: right;
    padding-top: 10px;
  }

  .navbar_identity {
    display: flex;
    justify-content: flex-end;
  }
  .prof_image {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
  button {
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 1.76px;
    text-transform: uppercase;
    border: 2px solid transparent;
    border-radius: 500px;
    color: #fff;
    will-change: transform;
    white-space: nowrap;
    padding: 8px 34px;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    color: black;
    outline: none;
  }
`;
