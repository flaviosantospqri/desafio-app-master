import { ContainerError } from "./style";
import error from "../../assets/img/error.gif";

function Error({ msg }) {
  return (
    <ContainerError>
      <div className="container-elements">
        <p>{msg}</p>
        <img src={error} />
      </div>
    </ContainerError>
  );
}
export default Error;
