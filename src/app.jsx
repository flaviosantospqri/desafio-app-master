// import { useEffect, useState } from "react";
// import { connect } from "./services/api";
import Home from "./pages/Home";
import ListGallery from "./components/listGallery";
import Header from "./components/header";
import { ContainerAplication } from "./style";

function App() {
  //   const [data, setDatas] = useState([]);
  //   const [err, setErr] = useState([]);

  //   const getConnection = () => {
  //     connect
  //       .get()
  //       .then((response) => {
  //         setDatas(response.data);
  //       })
  //       .catch((err) => {
  //         setErr(err);
  //       });
  //   };

  //   useEffect(() => {
  //     getConnection();
  //   }, []);

  //   const { code, message, status } = err;
  //   if (code == "ECONNABORTED") {
  //     alert("OPS O SERVIDOR ESTÁ DEMORANDO");
  //   } else if (status > 500 && status < 509) {
  //     alert("O servidor fahou em responder, tente recarregar a página");
  //   } else if (message) {
  //     alert("Erro inexperado, tente reiniciar a aplicação " + message);
  //   }

  //   console.log(data);
  return (
    <div className="App">
    <ContainerAplication>
      <Header />
      <Home />
      <ListGallery />
    </ContainerAplication>
    </div>
  );
}

export default App;
