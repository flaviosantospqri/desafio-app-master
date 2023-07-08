import { useContext, useState } from "react";
import Heart from "../heart";
import Star from "../star";
import { ContainerGallery } from "./style";
import { RenderContext } from "../../contexts/render/renderContexts";

function Card({ games }) {
  const valueRating = [1, 2, 3, 4, 5];
  const { setRating, rating, setLiked, like } = useContext(RenderContext);
  const setRatingStar = (index) => {
    setRating(index);
  };

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
            <section>
              <div className="container_starred">
                {valueRating.map((index) => (
                  <Star
                    key={`${index}_star`}
                    isRat={index <= rating}
                    setRating={() => setRatingStar(index)}
                  />
                ))}
              </div>
              <div className="container_like">
                <Heart like={like} setLiked={() => setLiked(!like)} />
              </div>
            </section>
          </li>
        ))}
      </ul>
    </ContainerGallery>
  );
}

export default Card;
