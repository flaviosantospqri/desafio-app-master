import { createContext, useContext, useEffect, useState } from "react";
import { RenderContext } from "../render/renderContexts";
import { app, db } from "../../services/firebase";

const FireBaseContext = createContext({});

const FireBaseProvider = ({ children }) => {
  const { data } = useContext(RenderContext);
  const auth = app.auth();
  const [user, setUser] = useState({});
  const [fireStoreItens, setFireStoreItens] = useState([]);

  async function fetchGamesFromFire() {
    const snapshot = await db.collection("games").get();
    const gamesData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFireStoreItens(gamesData);
  }

  async function fetchUserFromFire() {
    const snapshot = await db.collection("users").get();
    const userData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const atualUser = userData.find((a) => auth.currentUser.uid == a.id);
    setUser(atualUser);
  }

  async function setBdItems() {
    const snapshot = await db.collection("games").get();
    if (snapshot.empty && data.length > 0)
      try {
        data?.map((a) => {
          a.ratingList = [];
          db.collection("games").set(a);
        });
        console.log("Document written");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }

  useEffect(() => {
    fetchGamesFromFire();
    fetchUserFromFire();
    const clear = setTimeout(() => {
      setBdItems();
    }, 5000);
    return () => {
      clearTimeout(clear);
    };
  }, []);

  return (
    <FireBaseContext.Provider
      value={{
        fireStoreItens,
        auth,
        user,
      }}
    >
      {children}
    </FireBaseContext.Provider>
  );
};
export { FireBaseProvider, FireBaseContext };
