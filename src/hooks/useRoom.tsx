import { RoomContext } from "../contexts/RoomContext";
import { useContext } from 'react'

export function useRoom(){
  return useContext(RoomContext)
}