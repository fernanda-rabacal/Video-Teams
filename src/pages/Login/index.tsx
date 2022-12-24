import { auth, githubProvider, googleProvider } from "../../services/service"
import { LoginContainer } from "./styles";

export function Login(){
  function handleGithubSignin() {
    auth.signInWithPopup(githubProvider).catch(alert);
  }

  function handleGoogleSignin() {
    auth.signInWithPopup(googleProvider).catch(alert);
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