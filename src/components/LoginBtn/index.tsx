import { useNavigate } from "react-router-dom";
import { auth } from "../../services/service";
import { ButtonContainer } from "./styles";

export function LoginButton() {
 const navigate = useNavigate()
  return(
    <ButtonContainer onClick={() =>navigate("/login")}>
      Logar
    </ButtonContainer>
  )
}