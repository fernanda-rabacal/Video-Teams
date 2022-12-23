import styled from "styled-components";

export const RoomsListContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  
  > div {
    width: min(100rem, 100%);

    button {
      width: fit-content;
      margin-left: auto;
      background: ${({theme}) => theme["red-500"]};
      color: ${({theme}) => theme.white};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border-radius: 5px;
      padding: 0.5rem;
      margin-bottom: 1rem;
    }
    
  }
`

export const RoomsListTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0 0.5rem;
  color: ${({theme}) => theme.white};
  font-size: 2.5rem;
  width: 100%;
  padding-bottom: 3rem;
  
  
  th {
    border-bottom: 1px solid ${({theme}) => theme["gray-600"]};   
    background: ${({theme}) => theme["gray-900"]};
    padding-block: 2rem;

    &:first-child {
      width: 40%;
      border-top-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
    }
  }

  td {
    padding-block: 1.5rem;
  }

  tbody tr:nth-child(odd) {
    background: ${({theme}) => theme["gray-800"]};
  }

  tbody tr:nth-child(even) {
    background: ${({theme}) => theme["gray-900"]};
  }

  button {
    background: ${({theme}) => theme["red-500"]};
    color: ${({theme}) => theme.white};
    display: flex;
    align-items: center;
    margin-inline: auto;
    gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
  }

  p {
    text-align: center;
    color: ${({theme}) => theme.white};
    font-size: 2.5rem;
  }
`