import Home from "./pages/Home";
import Header from "./components/header";
import { ContainerAplication } from "./style";
import Load from "./components/load";
import PageError from "./components/pageError";
import { useContext } from "react";
import { SearchContext } from "./contexts/searchContext";

function App() {
  const { data, removeLoad, err } = useContext(SearchContext);
  return (
    <div className="App">
      <ContainerAplication>
        <Header />
        {data.length > 0 ? <Home data={data} /> : <PageError err={err} />}
        {!removeLoad && <Load />}
      </ContainerAplication>
    </div>
  );
}

export default App;
