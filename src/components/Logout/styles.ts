import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: absolute;
  width: fit-content !important;
  top: 2rem;
  right: 2rem;
  background: ${({theme}) => theme["red-700"]};
  color: ${({theme}) => theme.white};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 5px;
  padding: 2rem;
`