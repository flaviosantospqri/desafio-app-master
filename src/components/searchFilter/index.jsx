import { ContainerSearch } from "./style";
import { SearchContext } from "../../contexts/searchContext";
import { useContext } from "react";

function SearchFilter() {
  const { value, setValue } = useContext(SearchContext);

  return (
    <>
      <ContainerSearch>
        <div className="search-compress">
          <section className="container-search-text">
            <h1>Search</h1>
            <input
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="search by"
            ></input>
          </section>
          <section className="container-search-filter">
            <label htmlFor="genre-select-option">Select genre</label>
            <select id="genre-select-option">
              <option>Teste</option>
            </select>
          </section>
        </div>
      </ContainerSearch>
    </>
  );
}
export default SearchFilter;
