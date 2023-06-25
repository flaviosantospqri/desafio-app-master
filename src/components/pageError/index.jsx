import Error from "../errors";

function PageError({ err }) {
  return (
    <>
      <div>
        {err.response?.status >= 500 && err.response?.status <= 509 ? (
          <Error
            msg={"O servidor falhou em responder, tente recarregar a página"}
          />
        ) : err.code == "ECONNABORTED" ? (
          <Error msg={"O servidor demorou para responder, tente mais tarde"} />
        ) : (
          err.code && (
            <Error
              msg={
                "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
              }
            />
          )
        )}
      </div>
    </>
  );
}

export default PageError;
