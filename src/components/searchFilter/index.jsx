import { ContainerSearch } from "./style";

function SearchFilter() {
  return (
    <>
    <ContainerSearch>
      <div className="search-compress">
        <section className="container-search-text">
          <h1>Search</h1>
          <input type="text" placeholder="search by"></input>
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
