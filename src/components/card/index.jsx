import { ContainerGallery } from "./style";
import ItemCard from "../itemCard";

function Card({ games }) {
  return (
    <ContainerGallery>
      <ul className="container-list">
        {games?.map(({ thumbnail, title, genre, id, release_date }) => (
          <ItemCard
            key={id}
            thumbnail={thumbnail}
            title={title}
            id={id}
            genre={genre}
            release_date={release_date}
          ></ItemCard>
        ))}
      </ul>
    </ContainerGallery>
  );
}

export default Card;
