import styled from "styled-components";

export const HomeContainer = styled.div`
  
`

export const CreateRoomForm = styled.form`
  padding: 2.5rem;
  border-radius: 10px;
  width: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${({theme}) => theme["gray-900"]};
  border: 1px solid ${({theme}) => theme["gray-600"]};
  color: ${({theme}) => theme.white};
  
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    gap: 0.5rem;

    label {
      font-size: 2rem;
    }

    input {
      color: ${({theme}) => theme["gray-900"]};
      border: 2px solid transparent;
      border-radius: 3px;
      width: 75%;
      height: 4rem;

      &:focus {
        outline: 0;
        border-color: ${({theme}) => theme["red-500"]};
      }
    }

  } 
  
  button {
    width: 30%;
    border-radius: 3px;
    padding: 1rem;
    color: ${({theme}) => theme.white};
    background: ${({theme}) => theme["red-500"]};
    border: 1px solid transparent;
    transition: 0.4s;

    &:hover {
      color: ${({theme}) => theme["red-500"]};
      border-color: ${({theme}) => theme["red-500"]};
      background: transparent;
    }
  }
`