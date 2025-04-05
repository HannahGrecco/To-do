import "../assets/public/logo.png";
import "../styles/upSytle.css";
function SignUp() {
  return (
    <>
      <div className="container">
        <br />
        <div className="signIn">
          <h1>Bem vindo ao AppDo!</h1>

          <button id="sign-in">Login</button>
        </div>

        <div className="signUp">
          <h1>Cadastre-se</h1>

          <input id="name" type="text" placeholder="Nome" />
          <br />
          <input id="email" type="email" placeholder="E-mail" />
          <br />
          <input id="password" type="password" placeholder="Senha" />
          <br />

          <br />

          <button type="submit" id="sign-up">
            Cadastrar
          </button>
        </div>
      </div>
    </>
  );
}
export default SignUp;
