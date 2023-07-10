import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Heart({ setLiked, like }) {
  return (
    <button
      onClick={() => setLiked()}
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <FontAwesomeIcon
        style={{ color: like ? "red" : "#cccccc" }}
        icon={faHeart}
      />
    </button>
  );
}
export default Heart;
