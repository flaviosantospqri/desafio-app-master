import { useContext } from "react";
import { FireBaseContext } from "../../contexts/firebase/firebaseContexts";
import { RenderContext } from "../../contexts/render/renderContexts";
import Card from "../card";
import { Link } from "react-router-dom";
import SearchFilter from "../searchFilter";
import { SearchContext } from "../../contexts/search/searchContext";

function Favorites() {
  const { user } = useContext(FireBaseContext);
  const { data } = useContext(RenderContext);
  const { value, optionGenre } = useContext(SearchContext);
  const listLikeObject = [];

  const filterBySelect = listLikeObject.filter((a) =>
    a.title.toUpperCase().includes(value.toUpperCase())
  );

  const filterByOption = listLikeObject.filter(
    (a) => optionGenre.toUpperCase() == a.genre.toUpperCase()
  );

  for (let i = 0; i < user.likeList?.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j].id === user.likeList[i]) {
        listLikeObject.push(data[j]);
      }
    }
  }
  return (
    <>
      <Link to={"/"}>Back</Link>
      <SearchFilter />
      {filterByOption?.length > 0 ? (
        <Card games={filterByOption} />
      ) : filterBySelect?.length > 0 ? (
        <Card games={filterBySelect} />
      ) : (
        listLikeObject.length > 0 && <Card games={listLikeObject} />
      )}
    </>
  );
}

export default Favorites;
