import styled from "styled-components";

const ButtonContainer = styled.button`
  background: ${props => (props.variant == "outlined" ? "none" : props.color)};
  border: ${props =>
    props.variant == "outlined" ? "solid 2px" + props.color : "none"};
  outline: none;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.variant == "outlined" ? props.color : "white")};
  cursor: pointer;
`;

export default ButtonContainer;
