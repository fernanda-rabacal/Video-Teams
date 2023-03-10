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
import { format } from "date-fns";
import { FilmStrip } from "phosphor-react";
import { LogOutButton } from "../../components/Logout";
import { LoginButton } from "../../components/LoginBtn";
import { isYoutubeVideo } from "../../utils/isYoutubeVideo";
import { toastProps } from "../../utils/toastProps";

const RoomSchema = zod.object({
  roomName: zod.string().min(1, "O nome é obrigatório"),
  videolink: zod.string().min(1, "Link inválido")
})

type RoomValidationData = zod.infer<typeof RoomSchema>

export function Home() {
  const [user] = useAuthState(auth as any);
  const [roomId, setRoomId] = useState('')

  const { register, handleSubmit } = useForm<RoomValidationData>({
    resolver: zodResolver(RoomSchema)
  })
  const navigate = useNavigate()

  async function createRoom(data: RoomValidationData) {
    if(!isYoutubeVideo(data.videolink)) {
      toast.error("Link inválido", toastProps);
      return;
    }

    if(!user) {
      await db.collection("rooms").add({
        user: {},
        name: data.roomName,
        videolink: data.videolink,
        comments: [],
        createdAt: format(new Date(), "dd/MM/yyyy"),
      }).then(doc => {
        
        navigate(`/rooms/${doc.id}`)
      })
      toast.error("Você precisa fazer login", toastProps)
      return;
    }

    await db.collection("rooms").add({
      user: {
        uid: user?.uid,
        email: user?.email,
        photoURL: user?.photoURL,
        displayName: user?.displayName
      },
      name: data.roomName,
      videolink: data.videolink,
      comments: [],
      createdAt: format(new Date(), "dd/MM/yyyy"),
    }).then(doc => {
      
      navigate(`/rooms/${doc.id}`)
    })

  }

  async function handleEnterRoom() {
    let room;
    await db
      .collection("rooms")
      .doc(roomId)
      .get()
      .then(doc => {
        room = doc.id
      })


      if(!room) {
        toast.error("Sala não encontrada.", toastProps)
        return
      }

      
    navigate(`/rooms/${room}`)
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

  return(
    <HomeContainer>
      <ToastContainer />
      { user ?
        <LogOutButton /> :
        <LoginButton />
        }
      <h1>Crie a sua sala virtual e veja vídeos junto com seus amigos!</h1>

      <div className="room-link">
        <div>
          <div className="label">
            <label htmlFor="room_id">Possui o id da sala? digite aqui
              </label> 
            <input id="room_id"
            onChange={(e) => setRoomId(e.target.value)}
              placeholder="Link id da sala..."/>
          </div>
          <button className="enter-room-id"
          onClick={handleEnterRoom}>
            Entrar
          </button>
        </div>

        <button className="rooms" onClick={handleNavigateToRoomsList}>
            Salas Disponíveis
            <FilmStrip size={20} weight="bold"/>
          </button>
      </div>


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