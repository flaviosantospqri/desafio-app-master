import { Link } from "react-router-dom";
import { ContainerHeardeSection, StyleHeader } from "./style";
import { useContext, useState } from "react";
import { FireBaseContext } from "../../contexts/firebase/firebaseContexts";
import { app } from "../../services/firebase";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { RenderContext } from "../../contexts/render/renderContexts";
function Header() {
  const { order, setOrder } = useContext(RenderContext);
  function changeOrder() {
    setOrder(!order);
  }
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
          <Link to={"/favorites"}>
            {user.likeList?.length > 0 ? (
              <span className="link_favorites">
                <FontAwesomeIcon icon={faHeart} />{" "}
                <span className="text_favorite">favorites</span>
              </span>
            ) : (
              <span className="link_favorites">
                <FontAwesomeIcon
                  className="link_favorites"
                  icon={faHeart}
                  style={{ color: "#b0b7c4" }}
                />{" "}
                <span className="text_favorite">No favorites</span>
              </span>
            )}
          </Link>
          <button className="button_orderByBest" onClick={() => changeOrder()}>
            {order ? (
              <span>
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFA500" }} />
                Best
              </span>
            ) : (
              <span>
                {" "}
                <FontAwesomeIcon icon={faStar} style={{ color: "#b0b7c4" }} />
                Worst
              </span>
            )}
          </button>
        </div>
      </StyleHeader>
    </ContainerHeardeSection>
  );
}

export default Header;
