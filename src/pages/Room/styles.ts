import styled from "styled-components";

export const RoomContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 35rem;
  background: ${({theme}) => theme["gray-800"]};
  overflow: hidden;

  > div {
    height: 100vh;
    width: 100%;
    background: ${({theme}) => theme["gray-900"]};
  }
`

export const CommentsArea = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1.5rem;
  font-size: 2rem;
  padding-inline: 0.5rem;
  
  header {

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    
    .name-and-link {
      flex-direction: column;
      gap: 1rem;
      border-bottom: 1px solid ${({theme}) => theme["gray-600"]};
      color: ${({theme}) => theme["red-500"]};
      font-size: 2rem;
      font-weight: 700;
    }
  }

  .cards {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({theme}) => theme.white};
    padding: 0.5rem 1rem;
    border-bottom: 1px solid transparent;

    &:hover  {
      border-color: ${({theme}) => theme.white};
    }
  }

  .watching {
    color: ${({theme}) => theme.white};
    background: ${({theme}) => theme["red-500"]};
    justify-content: flex-end;
    width: fit-content;
    gap: 0.5rem;
    margin-left: auto;
    padding: 0.5rem;
    border-radius: 100%;
  }

  .comment-input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-top: 1px solid ${({theme}) => theme["gray-600"]};

    input, button {
      border: none;
      outline: 0;
      background: transparent;
      height: 6rem;
      color: ${({theme}) => theme["gray-300"]};
    }

    input {
      width: 90%;
    }
  }
`