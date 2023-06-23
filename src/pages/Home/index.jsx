import { useContext } from "react";
import ListGallery from "../../components/listGallery";
import { SearchContext } from "../../contexts/searchContext";

function Home({ data }) {
  const { value } = useContext(SearchContext);

  const filteredList = data.filter((a) =>
    a.title.toUpperCase().includes(value.toUpperCase())
  );

  return (
    <>
      {filteredList.length > 0 ? (
        <ListGallery games={filteredList} />
      ) : (
        <ListGallery games={data} />
      )}
    </>
  );
}

export default Home;
