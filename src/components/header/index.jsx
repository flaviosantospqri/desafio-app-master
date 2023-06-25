import { Link } from "react-router-dom";
import SearchFilter from "../searchFilter";
import { ContainerHeardeSection, StyleHeader } from "./style";
function Header() {
  return (
    <ContainerHeardeSection>
      <StyleHeader>
        <h3 className="aplication-name">
          <span className="bar-log">\</span> Games Gallery
        </h3>
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
