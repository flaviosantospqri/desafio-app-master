import { useContext } from "react";
import { RenderContext } from "../../contexts/render/renderContexts";
import { SearchContext } from "../../contexts/search/searchContext";
import { ContainerAplication } from "../../style";
import Header from "../../components/header";
import Card from "../../components/card";
import Load from "../../components/load";
import SearchFilter from "../../components/searchFilter";

function Home() {
  const { data, removeLoad } = useContext(RenderContext);
  const { value, optionGenre } = useContext(SearchContext);

  const filterBySelect = data.filter((a) =>
    a.title.toUpperCase().includes(value.toUpperCase())
  );

  const filterByOption = data.filter(
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
        ) : (
          <Card games={data} />
        )}
        {!removeLoad && <Load />}
      </ContainerAplication>
    </>
  );
}

export default Home;
