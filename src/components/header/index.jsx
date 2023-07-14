import { Link } from "react-router-dom";
import { ContainerHeardeSection, StyleHeader } from "./style";
import { useContext } from "react";
import { FireBaseContext } from "../../contexts/firebase/firebaseContexts";
import { app } from "../../services/firebase";
import { toast } from "react-toastify";
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
  const { auth } = useContext(FireBaseContext);
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
          <Link
            onClick={() => {
              signOut();
            }}
            className="btn btn-register"
          >
            {auth.currentUser ? "Sign-out" : "Sign-in"}
          </Link>
        </div>
      </StyleHeader>
    </ContainerHeardeSection>
  );
}

export default Header;
