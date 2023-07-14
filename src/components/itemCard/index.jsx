import { useState } from "react";
import Heart from "../heart";
import Star from "../star";

function ItemCard({ thumbnail, title, genre, id, release_date }) {
  const valueRating = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [like, setLiked] = useState(false);
  return (
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
              indexRating={index}
              setRating={() => setRating(index)}
              itemId={id}
            />
          ))}
        </div>
        <div className="container_like">
          <Heart like={like} itemId={id} setLiked={() => setLiked(!like)} />
        </div>
      </section>
    </li>
  );
}
export default ItemCard;
