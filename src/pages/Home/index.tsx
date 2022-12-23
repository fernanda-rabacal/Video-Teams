import { useForm } from "react-hook-form"
import { useRoom } from "../../hooks/useRoom"
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod"
import { CreateRoomForm, HomeContainer } from "./styles";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RoomSchema = zod.object({
  roomName: zod.string().min(1, "O nome é obrigatório"),
  videolink: zod.string().min(1, "Link inválido")
})

type RoomValidationData = zod.infer<typeof RoomSchema>

export function Home(){
  const { register, handleSubmit } = useForm<RoomValidationData>({
    resolver: zodResolver(RoomSchema)
  })
  const { createNewRoom } = useRoom()
  const navigate = useNavigate()

  const toastProps = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
    };

  function isYoutubeVideo(url: string) {
    const validationRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return (url.match(validationRegex)) ? true : false;
  }

  function createRoom(data: RoomValidationData) {
    if(!isYoutubeVideo(data.videolink)) {
      toast.error("Link inválido", toastProps);
      console.log("bad choice")
      return;
    }

    const newRoom = createNewRoom(data.roomName, data.videolink)
    
    navigate(`/rooms/${newRoom.id}`)
  }

  return(
    <HomeContainer>
      <ToastContainer />
      <h1>Crie a sua sala virtual e veja vídeos junto com seus amigos!</h1>

      <CreateRoomForm onSubmit={handleSubmit(createRoom)}>
        <div className="input-container">
          <label htmlFor="room-name">Digite o nome da sua sala</label>
          <input 
            type="text" 
            id='room-name' 
            placeholder="Digite o nome..."
            {...register("roomName")}
            />
        </div>
        <div className="input-container">
          <label htmlFor="videolink">Digite o link do vídeo do Youtube</label>
          <input 
            type='text' 
            id="videolink" 
            placeholder="Digite o link..." 
            {...register("videolink")}
            />
        </div>
        <button>Criar sala</button>
      </CreateRoomForm>
    </HomeContainer>
  )
}