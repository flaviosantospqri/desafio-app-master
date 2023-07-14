import { useState } from "react";
import FormLogin from "../../components/formLogin";
import FormRegister from "../../components/formRegister";

function Login() {
  const [viewLog, setViewLog] = useState(false);

  function changeComponent() {
    setViewLog(!viewLog);
  }

  return (
    <>
      {viewLog ? (
        <FormRegister
          viewName={"Sign In"}
          changeComponent={() => changeComponent(!viewLog)}
        />
      ) : (
        <FormLogin
          viewName={"Register"}
          changeComponent={() => changeComponent(!viewLog)}
        />
      )}
    </>
  );
}
export default Login;
