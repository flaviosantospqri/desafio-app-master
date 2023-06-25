import { ContainerGallery } from "./style";

function ListGallery({ games }) {
  return (
    <>
      <>
        <ContainerGallery>
          <ul className="container-list">
            {games?.map((a) => (
              <li className="card-container" key={a.id}>
                <div className="container-photo">
                  <img src={a.thumbnail}></img>
                </div>
                <p>
                  Title Game: <strong> {a.title} </strong>
                </p>
                <p>
                  Genre of this Game: <strong>{a.genre}</strong>
                </p>
                <p>
                  Title Game: <strong> {a.title} </strong>
                </p>
              </li>
            ))}
          </ul>
        </ContainerGallery>
      </>
    </>
  );
}

export default ListGallery;
