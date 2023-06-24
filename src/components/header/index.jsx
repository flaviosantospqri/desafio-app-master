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
          <button className="btn-home">Home</button>
          <button className="btn-about">About-us</button>
        </div>
      </StyleHeader>
      <SearchFilter />
    </ContainerHeardeSection>
  );
}

export default Header;
