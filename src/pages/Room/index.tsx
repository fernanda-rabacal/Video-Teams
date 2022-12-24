import { CommentsArea, CommentsSection, RoomContainer } from "./styles";
import { useParams, NavLink } from "react-router-dom"
import ReactPlayer from 'react-player/youtube'
import { User, CaretLeft, Plus, Eye } from "phosphor-react";
import { useEffect, useState } from "react";
import { auth, db } from "../../services/service";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form"

type CommentData = {
  commentMessage: string
}
interface CommentProps {
  user: string,
  photo: string,
  content: string
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
      const room = {
        ...doc.data(),
        id: doc.id
      }
      setRoom(room)
    })
  }
  
  function observer() {
    db.collection("rooms").doc(id).onSnapshot(async (docSnap) => {
      getRoom()
  })}

  function handleSendMessage(data: CommentData) {
    if(data.commentMessage === '') {
      return
    }

    const newComment = {
      user: user?.uid,
      photo: user?.photoURL,
      content: data.commentMessage
    }

    db.collection("rooms")
      .doc(id)
      .update({
        comments: [...room.comments, newComment]
      })

      reset()
    }
    
    useEffect(() => {
      getRoom()
      observer()
    },[room])

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
            <NavLink className="cards" to="/rooms"> <CaretLeft weight="bold" />Sair</NavLink>
            <NavLink className="cards" to="/">Nova sala <Plus weight="bold" /></NavLink>
            <p className="cards"><Eye weight="bold" /> {room.visualization}</p>
          </div>
          <div className="name-and-link">
            <p><strong>{room.name}</strong></p>
            <p><strong>Link id da sala: </strong>{room.id}</p>
          </div>
          <div className="watching">
            <User weight="bold" />
            1
          </div>
        </header>
        <CommentsSection>
          {room.comments?.map((comment: CommentProps) => {
            const commentClass = comment.user === user?.uid
              ? 'outgoing'
              : 'incoming'

            return(
              <div className={commentClass} key={comment.content}>
                <img src={comment.photo} />
                <span>{comment.content}</span>
              </div>
            )
          })}
        </CommentsSection>
        { user ?
          <form className="comment-input" onSubmit={handleSubmit(handleSendMessage)}>
            <input placeholder="Digite um comentário..." {...register("commentMessage")}/>
            <button><Plus weight="bold" /></button>
          </form>
        :
        <NavLink className="login" to="/login">
          Entre para comentar
        </NavLink>
        }
      </CommentsArea>
    </RoomContainer>
  )
}