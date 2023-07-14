import { useContext } from "react";
import { RenderContext } from "../../contexts/render/renderContexts";
import { SearchContext } from "../../contexts/search/searchContext";
import { ContainerAplication } from "../../style";
import Header from "../../components/header";
import Card from "../../components/card";
import Load from "../../components/load";
import SearchFilter from "../../components/searchFilter";
import { FireBaseContext } from "../../contexts/firebase/firebaseContexts";

function Home() {
  const { removeLoad, data } = useContext(RenderContext);
  const { value, optionGenre } = useContext(SearchContext);
  const { fireStoreItens } = useContext(FireBaseContext);

  const filterBySelect = fireStoreItens.filter((a) =>
    a.title.toUpperCase().includes(value.toUpperCase())
  );

  const filterByOption = fireStoreItens.filter(
    (a) => optionGenre.toUpperCase() == a.genre.toUpperCase()
  );

  return (
    <>
      <ContainerAplication>
        <Header />
        <SearchFilter />
        {filterByOption?.length > 0 ? (
          <Card games={filterByOption} />
        ) : filterBySelect?.length > 0 ? (
          <Card games={filterBySelect} />
        ) : fireStoreItens.length > 0 ? (
          <Card games={fireStoreItens} />
        ) : (
          <Card games={data} />
        )}
        {!removeLoad && <Load />}
      </ContainerAplication>
    </>
  );
}

export default Home;
