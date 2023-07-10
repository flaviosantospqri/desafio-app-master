import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Star({ isRat, setRating }) {
  const auth = getAuth();
  console.log(auth.currentUser);
  const navigate = useNavigate();
  function verifyAccess() {
    if (auth.currentUser) {
      setRating();
    } else {
      navigate("/login");
    }
  }
  return (
    <button
      onClick={() => verifyAccess()}
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
