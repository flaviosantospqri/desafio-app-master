import PageError from "./components/pageError";
import { useContext } from "react";
import { RenderContext } from "./contexts/render/renderContexts";
import { RoutesApp } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { err } = useContext(RenderContext);
  const { fireStoreItens } = useContext(RenderContext);

  return (
    <div className="App">
      {err.code && fireStoreItens == 0 ? (
        <PageError err={err} />
      ) : (
        <RoutesApp />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
