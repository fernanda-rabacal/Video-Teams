import { auth, provider } from "../../services/service"
import { LoginContainer } from "./styles";

export function Login(){
  function handleSignin() {
    auth.signInWithPopup(provider).catch(alert);
  }

  return(
    <LoginContainer>
      <button onClick={handleSignin}>
        Login com o Github
      </button>
    </LoginContainer>
  )
}