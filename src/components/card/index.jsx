import { ContainerGallery } from "./style";

function Card({ games }) {
  return (
    <ContainerGallery>
      <ul className="container-list">
        {games?.map(({ thumbnail, title, genre, id, release_date }) => (
          <li className="card-container" key={id}>
            <div className="container-photo">
              <img src={thumbnail}></img>
            </div>
            <h3>
              Title Game: <strong> {title} </strong>
            </h3>
            <p>
              Genre of this Game: <strong>{genre}</strong>
            </p>
            <p>
              Date of Realease: <strong>{release_date}</strong>
            </p>
          </li>
        ))}
      </ul>
    </ContainerGallery>
  );
}

export default Card;
