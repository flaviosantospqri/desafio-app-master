import Card from "../card";
import { ContainerGallary } from "./style";

function ListGallery({ games }) {
  return (
    <>
      <ContainerGallary>
        {games?.map((a) => (
          <Card
            key={a.id}
            title={a.title}
            photo={a.thumbnail}
            genre={a.genre}
          />
        ))}
      </ContainerGallary>
    </>
  );
}

export default ListGallery;
