import { createContext, useEffect, useState } from "react";
import { connect } from "../services/api";

const SearchContext = createContext({});

const SearchProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [optionGenre, setOptionGenre] = useState("");
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
    <SearchContext.Provider
      value={{
        value,
        setValue,
        optionGenre,
        setOptionGenre,
        data,
        err,
        removeLoad
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
