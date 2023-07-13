import { FireBaseProvider } from "./firebase/firebaseContexts";
import { RenderProvider } from "./render/renderContexts";
import { SearchProvider } from "./search/searchContext";

const Providers = ({ children }) => {
  return (
    <>
      <RenderProvider>
        <SearchProvider>
          <FireBaseProvider>{children}</FireBaseProvider>
        </SearchProvider>
      </RenderProvider>
    </>
  );
};
export default Providers;
