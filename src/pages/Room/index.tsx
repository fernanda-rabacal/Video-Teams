import { CommentsArea, CommentsSection, RoomContainer } from "./styles";
import { useParams } from "react-router-dom"
import ReactPlayer from 'react-player/youtube'
import { User, CaretLeft, Plus, Eye } from "phosphor-react";
import { useEffect, useState } from "react";
import { auth, db } from "../../services/service";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form"
import { Login } from "../../components/Login";

type CommentData = {
  comment: string
}

export function RoomPage() {
  const { id } = useParams()
  const [ user ] = useAuthState(auth as any);
  const [room, setRoom] = useState<any>({})
  const { register, handleSubmit, reset } = useForm<CommentData>()

  
  async function getRoom() {
    return await db.collection("rooms")
    .doc(id)
    .get()
    .then(doc => {
      const room = doc.data()
      setRoom(room)
    })
  }
  
  function observer() {
    db.collection("rooms").doc(id).onSnapshot(async (docSnap) => {
      getRoom()
  })}

  function handleSendMessage(data: CommentData) {
    if(data.comment === '') {
      return
    }

    db.collection("rooms")
      .doc(id)
      .update({
        comments: [...room.comments, data.comment]
      })

      reset()
    }
    
    useEffect(() => {
      getRoom()
      observer()
    },[room])

  if(!user) return <Login />

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
            <a className="cards" href={"/rooms"}> <CaretLeft weight="bold" />Sair</a>
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
        <CommentsSection>
          {room.comments?.map((comment: string) => {
            const commentClass = room.user.uid === user?.uid
              ? 'outgoing'
              : 'incoming'

            return(
              <div className={commentClass} key={comment}>
                <img src={room.user.photoURL} />
                <span>{comment}</span>
              </div>
            )
          })}
        </CommentsSection>
        <form className="comment-input" onSubmit={handleSubmit(handleSendMessage)}>
          <input placeholder="Digite um comentário..." {...register("comment")}/>
          <button ><Plus weight="bold" /></button>
        </form>
      </CommentsArea>
    </RoomContainer>
  )
}