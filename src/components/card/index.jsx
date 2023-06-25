import { ContainerCard } from "./style";

function Card({ genre, title, photo }) {
  return (
    <>
      <ContainerCard>
        <div className="container-photo">
          <img src={photo} alt="Image this game" />
        </div>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{genre}</p>
        </div>
      </ContainerCard>
    </>
  );
}

export default Card;
