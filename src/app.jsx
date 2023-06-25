import PageError from "./components/pageError";
import { useContext } from "react";
import { RenderContext } from "./contexts/render/renderContexts";
import { RoutesApp } from "./routes/routes";

function App() {
  const { err } = useContext(RenderContext);

  return (
    <div className="App">
      {err.code ? <PageError err={err} /> : <RoutesApp />}
    </div>
  );
}

export default App;
