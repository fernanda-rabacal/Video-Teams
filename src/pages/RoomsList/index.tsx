import { UserPlus, PlusCircle, Trash } from "phosphor-react"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import { LoginButton } from "../../components/LoginBtn"
import { LogOutButton } from "../../components/Logout"
import { auth, db } from "../../services/service"
import { RoomsListContainer, RoomsListTable } from "./styles"

export interface RoomProps {
  id: string
  name: string,
  videolink: string,
  link: string,
  createdAt: string,
  user: {
    displayName: string,
    photoURL: string,
    email: string,
    uid: string
  }
}

export function RoomsList(){
  const[loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const[roomsList, setRoomsList] = useState<RoomProps[]>([])
  const[user] = useAuthState(auth as any)

  async function getRooms() {
    const dbrooms = await db
      .collection("rooms")
      .get()
    let _rooms: any[] = []  

    dbrooms.forEach(room => {
      const newRoom = {
        ...room.data(),
        id: room.id
      }

      _rooms.push(newRoom)
    })

    setRoomsList(_rooms)

    setLoading(false)
  }

  function handleNavigateToHome() {
    navigate("/")
  }

  function handleEnterRoom(roomID: string){
    navigate(`/rooms/${roomID}`)
  }

  function handleDeleteRoom(roomId: string) {
    db.collection("rooms").doc(roomId).delete()
  }

  useEffect(() => {
    getRooms()
  }, [])

  return(
    <RoomsListContainer>
      { user ?
        <LogOutButton /> :
        <LoginButton />
        }
      <h1>Suas salas criadas</h1>
      <div>
        <button onClick={handleNavigateToHome}>
          Criar Sala
          <PlusCircle size={20} weight="bold"/>
        </button>

        {loading ? 
          <ClipLoader
            color="#C4C4CC"
            loading={loading}
            size={32}
            aria-label="Loading Spinner"
            data-testid="loader"
            /> :
        <RoomsListTable>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Criada em</th>
              <th>Usuário</th>
              <th>Link</th>
              <th>Ações</th>
            </tr>
          </thead>
            {roomsList.length > 0 &&
              (<tbody>
                {roomsList.map(room => {
                  return(
                    <tr key={room.id}>
                      <td>{room.name}</td>
                      <td>{room.createdAt}</td>
                      <td>{room.user.displayName}</td>
                      <td>{room.id}</td>
                      <td className="actions">
                        <button onClick={() => handleEnterRoom(room.id)}>
                          Entrar
                          <UserPlus size={20} weight="bold"/>
                        </button>
                      { room.user.uid == user?.uid &&
                        <button onClick={() => handleDeleteRoom(room.id)}>
                          Deletar
                          <Trash size={20} weight="bold"/>
                        </button>
                        }
                      </td>
                    </tr>
                  )
                })}
            </tbody>)}
        </RoomsListTable>
        }
        {roomsList.length <= 0 && !loading &&
          <p className="no-data">Você não possui nenhuma sala criada</p>
        }
      </div>
    </RoomsListContainer>
  )
}