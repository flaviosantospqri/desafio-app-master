import { useContext } from "react";
import ListGallery from "../../components/listGallery";
import { SearchContext } from "../../contexts/searchContext";

function Home({ data }) {
  const { value, optionGenre } = useContext(SearchContext);

  const filteredList = data.filter((a) =>
    a.title.toUpperCase().includes(value.toUpperCase())
  );

  const filteredByGenre = data.filter(
    (a) => optionGenre.toUpperCase() == a.genre.toUpperCase()
  );

  return (
    <>
      {filteredByGenre.length > 0 ? (
        <ListGallery games={filteredByGenre} />
      ) : filteredList.length > 0 ? (
        <ListGallery games={filteredList} />
      ) : (
        <ListGallery games={data} />
      )}
    </>
    
  );
}

export default Home;
