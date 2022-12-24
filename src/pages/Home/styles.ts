import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .rooms, .enter-room-id {
    margin-top: 2rem;
    width: fit-content;
    background: ${({theme}) => theme["red-500"]};
    color: ${({theme}) => theme.white};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 5px;
    padding: 0.8rem;
    margin-bottom: 1rem;
  }
  
  .label {
    display: flex;
    flex-direction: column;
    text-align: left;
    color: ${({theme}) => theme.white};
  }

  .room-link {
    width: 50%;
    display: flex;
    justify-content: space-between;
    
    > div {
      display: flex;
      align-items: center;
      gap: 1rem;

      input {
      color: ${({theme}) => theme["gray-900"]};
      border: 2px solid transparent;
      border-radius: 3px;
      height: 4rem;
      margin-bottom: 1.4rem;

      &:focus {
        outline: 0;
        border-color: ${({theme}) => theme["red-500"]};
      }
    }
  }
}
`

export const CreateRoomForm = styled.form`
  padding: 2.5rem;
  border-radius: 10px;
  width: 50%;
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