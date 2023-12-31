import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { app, db } from "../../services/firebase";
import { FireBaseContext } from "../../contexts/firebase/firebaseContexts";

function Heart({ setLiked, like, itemId }) {
  const { user } = useContext(FireBaseContext);
  const auth = app.auth().currentUser;
  const navigate = useNavigate();

  async function verifyAccess() {
    if (auth) {
      setLiked();
      user.likeList.push(itemId);
      updateList();
    } else {
      navigate("/auth");
    }
  }

  async function updateList() {
    const users = db.collection("users");
    await users.doc(user.uid).update({ likeList: user.likeList });
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
