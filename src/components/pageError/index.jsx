import ErrorServer from "../errors/errorServer";
import ErrorTimer from "../errors/errorTimer";
import OtherError from "../errors/otherError";

function PageError({ err }) {
  return (
    <>
      <div>
        {err.response?.status >= 500 && err.response?.status < 509 ? (
          <ErrorServer />
        ) : err.code == "ECONNABORTED" ? (
          <ErrorTimer />
        ) : (
          err.code && <OtherError />
        )}
      </div>
    </>
  );
}

export default PageError;
