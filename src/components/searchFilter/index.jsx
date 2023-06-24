import { ContainerSearch } from "./style";
import { SearchContext } from "../../contexts/searchContext";
import { useContext } from "react";

function SearchFilter() {
  const { setValue, data, optionGenre, setOptionGenre } =
    useContext(SearchContext);

  console.log(optionGenre);

  let filteredByGenre = data?.map((a) => a.genre);
  let diffGenre = new Set(filteredByGenre);
  diffGenre = Array.from(diffGenre).sort();

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
          <section className="container-search-filter">
            <label htmlFor="genre-select-option">Select genre</label>
            <select
              id="genre-select-option"
              value={optionGenre}
              onChange={(e) => setOptionGenre(e.target.value)}
            >
              <option>All...</option>
              {diffGenre?.map((a, index) => (
                <option key={index} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </section>
        </div>
      </ContainerSearch>
    </>
  );
}
export default SearchFilter;
