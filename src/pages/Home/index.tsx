import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod"
import { CreateRoomForm, HomeContainer } from "./styles";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useAuthState} from "react-firebase-hooks/auth"
import { auth, db } from "../../services/service";
import { useEffect, useState } from "react";
import { Login } from "../../components/Login";
import { format } from "date-fns";
import { FilmStrip } from "phosphor-react";
import { LogOutButton } from "../../components/Logout";

const RoomSchema = zod.object({
  roomName: zod.string().min(1, "O nome é obrigatório"),
  videolink: zod.string().min(1, "Link inválido")
})

type RoomValidationData = zod.infer<typeof RoomSchema>

export function Home(){
  const [ user, loading ] = useAuthState(auth as any);
  const [id, setId] = useState('')

  const { register, handleSubmit } = useForm<RoomValidationData>({
    resolver: zodResolver(RoomSchema)
  })
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
      return;
    }

    db.collection("rooms").add({
      user: {
        uid: user?.uid,
        email: user?.email,
        photoURL: user?.photoURL,
        displayName: user?.displayName
      },
      name: data.roomName,
      link: "http://127.0.0.1/5173",
      videolink: data.videolink,
      comments: [],
      createdAt: format(new Date(), "dd/MM/yyyy"),
    }).then(doc => {
      
      setId(doc.id)
    })
    
    navigate(`/rooms/${id}`)
  }

  function handleNavigateToRoomsList() {
    navigate("/rooms")
  }

  useEffect(() => {
    if(user) {
      db.collection("users").doc(user!.uid).set({
        email: user?.email,
        photoURL: user?.photoURL,
        displayName: user?.displayName
      })
    }
  }, [user])

  if(!user) return <Login />

  return(
    <HomeContainer>
      <ToastContainer />
      <LogOutButton />
      <h1>Crie a sua sala virtual e veja vídeos junto com seus amigos!</h1>

      <button onClick={handleNavigateToRoomsList}>
          Salas Disponíveis
          <FilmStrip size={20} weight="bold"/>
        </button>

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