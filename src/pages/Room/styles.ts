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
      align-items: flex-start;
      gap: 1rem;
      border-bottom: 1px solid ${({theme}) => theme["gray-600"]};
      color: ${({theme}) => theme["red-500"]};
      font-size: 2rem;
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

  .login {
    margin-bottom: 2rem;
    color: ${({theme}) => theme["gray-300"]};
    
    &:hover {
      text-decoration: underline;
    }
  }
`
export const CommentsSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 1rem;
  padding-inline: 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    animation: pop .25s ease;
    
    span {
      text-align: left;
      padding: 1rem;
      border-radius: 5px;
      background-color: ${({theme}) => theme["gray-500"]};
      box-shadow: 0 3px 6px rgba(0,0,0,.10);
      color: ${({theme}) => theme.white};
    }

    @keyframes pop {
      from {
        transform: scale(0)
      }

      to {
        transform: scale(1);
      }
    }

    &.outgoing {
      flex-direction: row-reverse;
      span {
        text-align: right;
      }
    }
    
    img {
      width: 32px;
      height: 32px;
      border-radius: 16px;
    }
  }
`