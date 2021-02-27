import styled from "styled-components";

export const Buttons = styled.button`
  padding: 8px 20px;
  border: none;
  outline: none;
  border-radius: 4px;
  background: white;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 800;
  transition: all 300ms;
  &:hover {
    background: #7fffe994;
    color: white;
    transform: scale(1.2);
    transition: all 400ms;
  }

  background-color: ${(props) => (props.selected ? "#7fffe994" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
`;
