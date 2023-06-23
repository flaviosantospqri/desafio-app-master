import { useEffect, useState } from "react";
import { connect } from "./services/api";
import Home from "./pages/Home";
import Header from "./components/header";
import { ContainerAplication } from "./style";
import Load from "./components/load";
import { SearchProvider } from "./contexts/searchContext";
import PageError from "./components/pageError";

function App() {
  const [data, setDatas] = useState([]);
  const [err, setErr] = useState([]);
  const [removeLoad, setRemoveLoader] = useState(false);

  const getConnection = async () => {
    await connect
      .get("/data")
      .then((response) => {
        setDatas(response.data);
        setRemoveLoader(true);
      })
      .catch((err) => {
        setErr(err);
        setRemoveLoader(true);
      });
  };

  useEffect(() => {
    getConnection();
  }, []);

  return (
    <div className="App">
      <ContainerAplication>
        <SearchProvider>
          <Header />
          {data.length > 0 ? <Home data={data} /> : <PageError err={err} />}
          {!removeLoad && <Load />}
        </SearchProvider>
      </ContainerAplication>
    </div>
  );
}

export default App;
