import { ContainerError } from "./style";

function ErrorTimer() {
  return (
    <ContainerError>
      <div className="container-elements">
        <p>O servidor demorou para responder, tente mais tarde</p>
        <img src="./src/assets/timerError.svg"></img>
      </div>
    </ContainerError>
  );
}
export default ErrorTimer;
