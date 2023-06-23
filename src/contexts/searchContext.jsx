import { createContext, useState } from "react";

const SearchContext = createContext({});

const SearchProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [optionGenre, setOptionGenre] = useState({});

  return (
    <SearchContext.Provider
      value={{ value, setValue, optionGenre, setOptionGenre }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
