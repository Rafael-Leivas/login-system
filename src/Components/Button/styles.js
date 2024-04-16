import styled from "styled-components"

export const ButtonCustomizado = styled.button`
  color: #fff;
  font-size: 20px;
  border: 30px;
  background-color: ${props => props.disabled ? "#ccc" : "#6a6a6a"};
  border-radius: 8px;
  width: 100%;
  height: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  transition: background-color 0.3s, color 0.3s; /* Adiciona transição suave */

  &:hover {
    background-color: ${props => props.disabled ? "#6a6a6a" : "#fff"};
    color: ${props => props.disabled ? "#fff" : "#6a6a6a"};
  }
`;
