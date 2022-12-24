import { auth, githubProvider, googleProvider } from "../../services/service"
import { useNavigate } from "react-router-dom";
import { LoginContainer } from "./styles";

export function Login(){
  const navigate = useNavigate()

  function handleGithubSignin() {
    auth.signInWithPopup(githubProvider).catch(alert);
    navigate('/')
  }
  
  function handleGoogleSignin() {
    auth.signInWithPopup(googleProvider).catch(alert);
    navigate('/')
  }

  return(
    <LoginContainer>
      <button onClick={handleGithubSignin}>
        Login com o Github
      </button>
      <button onClick={handleGoogleSignin}>
        Login com o Google
      </button>
    </LoginContainer>
  )
}