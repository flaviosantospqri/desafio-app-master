import { useEffect, useState } from "react";
import Card from "./components/card";
import { connect } from "./services/api";

function App() {
  const [data, setDatas] = useState([]);
  const [err, setErr] = useState([]);

  const getConnection = () => {
    connect
      .get()
      .then((response) => {
        setDatas(response.data);
      })
      .catch((err) => {
        setErr(err);
      });
  };

  useEffect(() => {
    getConnection();
  }, []);

  const { code, message, status } = err;
  if (code == "ECONNABORTED") {
    alert("OPS O SERVIDOR ESTÁ DEMORANDO");
  } else if (status > 500 && status < 509) {
    alert("O servidor fahou em responder, tente recarregar a página");
  } else if (message) {
    alert("Erro inexperado, tente reiniciar a aplicação " + message);
  }

  console.log(data);
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
