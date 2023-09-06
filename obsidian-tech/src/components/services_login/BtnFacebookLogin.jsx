import { SignInWithFacebook } from '../../services/firebase-config';

const BtnFacebookLogin = () => {
  return (
    
    <button
      onClick={() => {
        SignInWithFacebook().then((result) => {
          console.log(result)
        }).catch((err) => console.log(err));
      }}
    >
      Iniciar Sesión con Facebook
    </button>
  )
}

export default BtnFacebookLogin