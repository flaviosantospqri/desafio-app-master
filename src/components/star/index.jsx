import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { app, db } from "../../services/firebase";
import { useContext } from "react";
import { FireBaseContext } from "../../contexts/firebase/firebaseContexts";

function Star({ isRat, setRating, indexRating, itemId }) {
  const auth = app.auth().currentUser;
  const { fireStoreItens } = useContext(FireBaseContext);

  const game = fireStoreItens.find((a) => a.id === itemId);

  const navigate = useNavigate();
  function verifyAccess() {
    if (auth) {
      game.ratingList.push(indexRating);
      setRating();
      updateList();
    } else {
      navigate("/auth");
    }
  }

  async function updateList() {
    const games = db.collection("games");
    await games.doc(game.title).update({ ratingList: game.ratingList });
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
