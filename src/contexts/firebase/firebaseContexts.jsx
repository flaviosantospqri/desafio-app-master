import { createContext, useContext, useEffect, useState } from "react";
import { RenderContext } from "../render/renderContexts";
import { app, db } from "../../services/firebase";

const FireBaseContext = createContext({});

const FireBaseProvider = ({ children }) => {
  const { data } = useContext(RenderContext);

  const auth = app.auth();
  const [user, setUser] = useState({});
  const [fireStoreItens, setFireStoreItens] = useState([]);

  console.log(fireStoreItens.length);

  useEffect(() => {
    async function setBdItems() {
      try {
        const snapshot = await db.collection("games").get();
        if (snapshot.empty) {
          data.map((a) => {
            a.ratingList = [0];
            db.collection("games").doc(`${a.title}`).set(a);
          });
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    async function fetchGamesFromFire() {
      const snapshot = await db.collection("games").orderBy("ratingList").get();
      const gamesData = snapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));
      setFireStoreItens(gamesData);
    }

    async function fetchUserFromFire() {
      const snapshot = await db.collection("users").get();
      const userData = snapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));

      const atualUser = userData.find((a) => auth.currentUser.email == a.email);
      setUser(atualUser);
    }

    setBdItems();
    fetchGamesFromFire();
    fetchUserFromFire();
  }, [data, auth]);

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
