
import produce from "immer";
import { createContext, ReactNode, useEffect, useState } from "react"

interface RoomContextProps {
  children: ReactNode
}

interface Room {
  id: string;
  name: string,
  videolink: string,
  link: string,
  visualization: number,
  createdAt: Date,
}

interface RoomContextType {
  rooms: Room[],
  createNewRoom: (name: string, videolink: string) => Room
  updateRoomVisualization: (room: Room) => void
}

const ROOMS_STORAGE_KEY = "VideoTeams:rooms"

export const RoomContext = createContext({} as RoomContextType)

export function RoomContextProvider({children} : RoomContextProps) {
  const [rooms, setRooms] = useState<Room[]>(() => {
    const storedRooms = localStorage.getItem(ROOMS_STORAGE_KEY);
    if (storedRooms) {
      return JSON.parse(storedRooms);
    }
    return [];
  })

  function createNewRoom(name: string, videolink: string) {
    const newRoom: Room = {
      id: new Date().getTime().toString(),
      createdAt: new Date(),
      link: "http://teste",
      visualization: 1,
      name,
      videolink
    }

    setRooms([...rooms, newRoom])

    return newRoom
  }

  function updateRoomVisualization(item: Room) {
    const roomExists = rooms.findIndex(room => room.id === item.id);

    if(roomExists >= 0) {
      const updatedRoom = produce(rooms, draft => {
        draft[roomExists].visualization = item.visualization + 1 
      })

      setRooms(updatedRoom)
    }

  }

  useEffect(() => {
    localStorage.setItem(ROOMS_STORAGE_KEY, JSON.stringify(rooms));
  }, [rooms]);


  return(
    <RoomContext.Provider value={{
      rooms, 
      createNewRoom,
      updateRoomVisualization
      }}>
      {children}
    </RoomContext.Provider>
  )
}