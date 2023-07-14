import { Link } from "react-router-dom";
import { ContainerHeardeSection, StyleHeader } from "./style";
import { useContext } from "react";
import { FireBaseContext } from "../../contexts/firebase/firebaseContexts";
import { app } from "../../services/firebase";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function Header() {
  function signOut() {
    app
      .auth()
      .signOut()
      .then(function () {
        toast.info("You out");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const { user } = useContext(FireBaseContext);
  return (
    <ContainerHeardeSection>
      <StyleHeader>
        <div className="container-name-app">
          <h3 className="aplication-name">
            <span className="bar-log">\</span> Games Gallery
          </h3>
        </div>
        <div className="btn-sector">
          <Link to={"/"} className=" btn btn-home">
            Home
          </Link>
          <Link to={"/about"} className="btn btn-about">
            About-us
          </Link>
          <Link to={"/favorites"}>
            {user.likeList ? (
              <span className="link_favorites">
                <FontAwesomeIcon icon={faHeart} />{" "}
                <span className="text_favorite">favorites</span>
              </span>
            ) : (
              <span>
                <FontAwesomeIcon
                  className="link_favorites"
                  icon={faHeart}
                  style={{ color: "#b0b7c4" }}
                />{" "}
                <span className="text_favorite">No favorites</span>
              </span>
            )}
          </Link>
        </div>
      </StyleHeader>
    </ContainerHeardeSection>
  );
}

export default Header;
