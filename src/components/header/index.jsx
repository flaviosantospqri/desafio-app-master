import { Link } from "react-router-dom";
import { ContainerHeardeSection, StyleHeader } from "./style";
function Header() {
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
        </div>
      </StyleHeader>
    </ContainerHeardeSection>
  );
}

export default Header;
