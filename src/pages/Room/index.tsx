import { CommentsArea, RoomContainer } from "./styles";
import { useNavigate, useParams } from "react-router-dom"
import { useRoom } from "../../hooks/useRoom";
import ReactPlayer from 'react-player/youtube'
import { User, CaretLeft, Plus, Eye } from "phosphor-react";
import { useEffect } from "react";

export function RoomPage() {
  const { id } = useParams()
  const { rooms, updateRoomVisualization } = useRoom()

  const room = rooms.find(room => {
    return room.id === id
  })

  const navigate = useNavigate()

  useEffect(() => {
    if(!room) {
      navigate('/')
    }

    updateRoomVisualization(room!)
  },[])

  if(!room) return <></>;

  return(
    <RoomContainer>
      <div>
        <ReactPlayer
          url={room.videolink}
          playing={true}
          muted={true}
          controls={true}
          width='100%'
          height='100vh'
          />
      </div>
      <CommentsArea>
        <header>
          <div>
            <a className="cards" href={"/rooms"}> <CaretLeft weight="bold" />  Sair</a>
            <a className="cards" href={"/"}>Nova sala <Plus weight="bold" /></a>
            <p className="cards"><Eye weight="bold" /> {room.visualization}</p>
          </div>
          <div className="name-and-link">
            <p>{room.name}</p>
            <p>Link da sala: {room.link}</p>
          </div>
          <div className="watching">
            <User weight="bold" />
            1
          </div>
        </header>
        <div className="comment-input">
          <input placeholder="Digite um comentário..."/>
          <button><Plus weight="bold" /></button>
        </div>
      </CommentsArea>
    </RoomContainer>
  )
}