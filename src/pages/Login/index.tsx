import { auth, githubProvider, googleProvider } from "../../services/service"
import { useNavigate } from "react-router-dom";
import { LoginContainer } from "./styles";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

export function Login(){
  const[loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleGithubSignin() {
    setLoading(true)
    await auth.signInWithPopup(githubProvider)
    .then(res => navigate('/'))
    .catch(alert);

    setLoading(false)
  }
  
  async function handleGoogleSignin() {
    setLoading(true)
    await auth.signInWithPopup(googleProvider)
    .then(res => navigate('/'))
    .catch(alert);

    
    setLoading(false)
  }

  return(
    <LoginContainer>
      {loading ? <ClipLoader
            color="#C4C4CC"
            loading={loading}
            size={32}
            aria-label="Loading Spinner"
            data-testid="loader"
            /> : 
        <>
          <button onClick={handleGithubSignin}>
          Login com o Github
        </button>
        <button onClick={handleGoogleSignin}>
          Login com o Google
        </button>
        </>
      }
    </LoginContainer>
  )
}