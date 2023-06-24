import { ContainerError } from "./style";

function OtherError() {
  return (
    <ContainerError>
      <div className="container-elements">
        <p>
          O servidor não conseguirá responder por agora, tente voltar novamente
          mais tarde
        </p>
        <img src="./src/assets/error.gif"></img>
      </div>
    </ContainerError>
  );
}
export default OtherError;
