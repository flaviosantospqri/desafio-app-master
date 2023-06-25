import { createContext, useEffect, useState } from "react";
import { connect } from "../../services/api";

const RenderContext = createContext({});

const RenderProvider = ({ children }) => {
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
    <RenderContext.Provider
      value={{
        data,
        err,
        removeLoad,
      }}
    >
      {children}
    </RenderContext.Provider>
  );
};
export { RenderProvider, RenderContext };
