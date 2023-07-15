import { useContext, useState } from "react";
import { RenderContext } from "../../contexts/render/renderContexts";
import { SearchContext } from "../../contexts/search/searchContext";
import { ContainerAplication } from "../../style";
import Header from "../../components/header";
import Card from "../../components/card";
import Load from "../../components/load";
import SearchFilter from "../../components/searchFilter";
import { FireBaseContext } from "../../contexts/firebase/firebaseContexts";

function Home() {
  const { removeLoad, data, order } = useContext(RenderContext);
  const { value, optionGenre } = useContext(SearchContext);
  const { fireStoreItens } = useContext(FireBaseContext);

  let render = [];
  const itensSum = fireStoreItens.map((a) => {
    a.sum = a.ratingList.reduce((acc, value) => acc + value);
    return a;
  });

  function orderSum(a, b) {
    return order ? b.sum - a.sum : a.sum - b.sum;
  }
  const orderedItens = itensSum?.sort(orderSum);

  const filterBySelect = orderedItens.filter((a) =>
    a.title.toUpperCase().includes(value.toUpperCase())
  );

  const filterByOption = orderedItens.filter(
    (a) => optionGenre.toUpperCase() == a.genre.toUpperCase()
  );

  if (filterByOption.length > 0) {
    render = filterByOption;
  } else {
    render = filterBySelect;
  }

  return (
    <>
      <ContainerAplication>
        <Header />
        <SearchFilter />
        {render.length > 0 ? (
          <Card games={render} />
        ) : (
          <Card games={orderedItens} />
        )}

        {!removeLoad && <Load />}
      </ContainerAplication>
    </>
  );
}

export default Home;
