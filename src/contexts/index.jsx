import { RenderProvider } from "./render/renderContexts";
import { SearchProvider } from "./search/searchContext";

const Providers = ({ children }) => {
  return (
    <>
      <RenderProvider>
        <SearchProvider>{children}</SearchProvider>
      </RenderProvider>
    </>
  );
};
export default Providers;
