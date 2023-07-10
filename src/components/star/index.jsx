import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Star({ isRat, setRating }) {
  return (
    <button
      onClick={() => setRating()}
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <FontAwesomeIcon
        icon={faStar}
        style={{ color: isRat ? "#FFD600" : "#cccccc" }}
      />
    </button>
  );
}
export default Star;
