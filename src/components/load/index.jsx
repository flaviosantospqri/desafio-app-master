import { ContainerLoad } from "./style";
import load from "../../assets/img/load.svg";

function Load() {
  return (
    <>
      <ContainerLoad>
        <div>
          <img src={load}></img>
        </div>
      </ContainerLoad>
    </>
  );
}

export default Load;
