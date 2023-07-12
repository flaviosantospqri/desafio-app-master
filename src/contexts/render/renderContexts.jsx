import { createContext, useEffect, useState } from "react";
import { connect } from "../../services/api";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { getAuth } from "firebase/auth";

const RenderContext = createContext({});

const RenderProvider = ({ children }) => {
  const [data, setDatas] = useState([]);
  const [err, setErr] = useState([]);
  const [removeLoad, setRemoveLoader] = useState(false);
  const [fireStoreItens, setFireStoreItens] = useState([]);
  const auth = getAuth();

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

  async function fetchGamesFromFire() {
    const snapshot = await getDocs(collection(db, "games"));
    const gamesData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFireStoreItens(gamesData);
  }

  async function setBdItems() {
    const snapshot = await getDocs(collection(db, "games"));
    if (snapshot.empty && data.length > 0)
      try {
        data?.map((a) => {
          addDoc(collection(db, "games"), a);
        });
        console.log("Document written");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }
  useEffect(() => {
    getConnection();
    fetchGamesFromFire();
    setTimeout(() => {
      setBdItems();
    }, 5000);
  }, []);

  return (
    <RenderContext.Provider
      value={{
        data,
        err,
        removeLoad,
        fireStoreItens,
        auth,
      }}
    >
      {children}
    </RenderContext.Provider>
  );
};
export { RenderProvider, RenderContext };
