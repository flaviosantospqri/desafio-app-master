import { ContainerSearch } from "./style";
import { SearchContext } from "../../contexts/search/searchContext";
import { useContext } from "react";
import { RenderContext } from "../../contexts/render/renderContexts";
import Select from "../select";

function SearchFilter() {
  const { setValue } = useContext(SearchContext);

  return (
    <>
      <ContainerSearch>
        <div className="search-compress">
          <section className="container-search-text">
            <h1>Search</h1>
            <input
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Search by..."
            ></input>
          </section>
          <Select />
        </div>
      </ContainerSearch>
    </>
  );
}
export default SearchFilter;
