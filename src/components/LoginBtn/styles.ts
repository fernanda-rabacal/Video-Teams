import styled from "styled-components";

export const ButtonContainer = styled.button`
  position: absolute;
  width: fit-content;
  top: 2rem;
  right: 2rem;
  background: ${({theme}) => theme["red-500"]};
  color: ${({theme}) => theme.white};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 5px;
  padding: 1rem;
  transition: 0.2s;

  &:hover {
    background: ${({theme}) => theme["red-700"]};
  }
`