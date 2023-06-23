import { ContainerCard } from "./style";

function Card(props) {
  const { genre, title, photo } = props;
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
        <button className="btn-details">Detalhes</button>
      </ContainerCard>
    </>
  );
}

export default Card;
