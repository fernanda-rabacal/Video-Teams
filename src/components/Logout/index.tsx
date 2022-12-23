import { useNavigate } from "react-router-dom";
import { auth } from "../../services/service";
import { ButtonContainer } from "./styles";

export function LogOutButton() {
 const navigate = useNavigate()

  function handleLogout() {
    auth.signOut()

    navigate("/")
  }
  

  return(
    <ButtonContainer onClick={() => auth.signOut()}>
      Deslogar
    </ButtonContainer>
  )
}