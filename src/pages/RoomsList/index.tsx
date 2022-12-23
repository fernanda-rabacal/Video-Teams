import { format } from "date-fns"
import { UserPlus, PlusCircle } from "phosphor-react"
import { useNavigate } from "react-router-dom"
import { useRoom } from "../../hooks/useRoom"
import { RoomsListContainer, RoomsListTable } from "./styles"

export function RoomsList(){
  const { rooms } = useRoom()
  const navigate = useNavigate()

  function handleGenerateInvite() {

  }

  function handleNavigateToHome(){
    navigate("/")
  }

  return(
    <RoomsListContainer>
      <h1>Suas salas criadas</h1>
      <div>
        <button onClick={handleNavigateToHome}>
          Criar Sala
          <PlusCircle size={20} weight="bold"/>
        </button>

        <RoomsListTable>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Criada em</th>
              <th>Visualizações</th>
              <th>Ações</th>
            </tr>
          </thead>
          {rooms ? 
            (<tbody>
              {rooms.map(room => {
                return(
                  <tr key={room.id}>
                    <td>{room.name}</td>
                    <td>{format(new Date(room.createdAt), 'dd/MM/yyyy')}</td>
                    <td>{room.visualization}</td>
                    <td>
                      <button onClick={handleGenerateInvite}>
                        Gerar convite
                        <UserPlus size={20} weight="bold"/>
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>) :
            <p>Você não possui nenhuma sala criada</p>}
        </RoomsListTable>
      </div>
    </RoomsListContainer>
  )
}