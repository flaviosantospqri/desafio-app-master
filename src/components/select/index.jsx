import { SearchContext } from "../../contexts/search/searchContext";
import { useContext } from "react";
import { RenderContext } from "../../contexts/render/renderContexts";

function Select() {
  const { data } = useContext(RenderContext);
  const { optionGenre, setOptionGenre } = useContext(SearchContext);

  let filteredByGenre = data?.map(({ genre }) => genre);
  let diffGenre = new Set(filteredByGenre);
  diffGenre = Array.from(diffGenre).sort();

  return (
    <div className="search-compress">
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
  );
}
export default Select;
