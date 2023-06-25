import PageError from "./components/pageError";
import { useContext } from "react";
import { RoutesApp } from "./components/routes/routes";
import { RenderContext } from "./contexts/render/renderContexts";
import { ContainerAplication } from "./style";
function App() {
  const { err } = useContext(RenderContext);

  return (
    <div className="App">
      {err.code ? <PageError err={err} /> : <RoutesApp />}
    </div>
  );
}

export default App;
