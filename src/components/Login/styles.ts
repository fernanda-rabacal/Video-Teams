import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  button {
    background: ${({theme}) => theme["red-500"]};
    color: ${({theme}) => theme.white};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 5px;
    padding: 2rem;
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }
`