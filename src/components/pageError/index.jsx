function PageError({ err }) {
  function getCorrectPage() {
    if (err.response?.status >= 500 && err.response?.status < 509) {
      return <p>O servidor fahou em responder, tente recarregar a página</p>;
    } else if (err.code == "ECONNABORTED") {
      return <p>O servidor demorou para responder, tente mais tarde</p>;
    } else {
      <p>
        O servidor não conseguirá responder por agora, tente voltar novamente
        mais tarde
      </p>;
    }
  }

  return (
    <>
      <div>{getCorrectPage()}</div>
    </>
  );
}

export default PageError;
