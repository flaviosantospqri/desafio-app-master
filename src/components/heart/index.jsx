import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Heart({ setLiked, like, itemId }) {
  const auth = getAuth();

  const navigate = useNavigate();
  function verifyAccess() {
    if (auth.currentUser) {
      setLiked();
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
        style={{ color: like ? "red" : "#cccccc" }}
        icon={faHeart}
      />
    </button>
  );
}
export default Heart;
