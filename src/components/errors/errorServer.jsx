import { ContainerError } from "./style";

function ErrorServer() {
  return (
    <ContainerError>
      <div className="container-elements">
        <p>O servidor falhou em responder, tente recarregar a página</p>
        <img src="./src/assets/error.gif"></img>
      </div>
    </ContainerError>
  );
}
export default ErrorServer;
