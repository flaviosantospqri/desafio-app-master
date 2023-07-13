import { Link, useNavigate } from "react-router-dom";
import { Container } from "../formLogin/style";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { app, db } from "../../services/firebase";
import { FireBaseContext } from "../../contexts/firebase/firebaseContexts";

function FormRegister() {
  const { auth } = useContext(FireBaseContext);
  const [dataUser, setDataUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = dataUser;

  const navigate = useNavigate();

  function onChange(e) {
    setDataUser((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const userCredential = await app
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (userCredential.user) {
        navigate("/");
        toast.success("Login was successful");
      }
    } catch (error) {
      toast.error("Error on login certify your informations is correct");
    }
  }
  return (
    <Container>
      <Link to="/">Back</Link>
      <div className="container">
        <div className="container_form">
          <form className="container_form_items" onSubmit={onSubmit}>
            <h1 className="text-title">Login</h1>

            <div className="field-group">
              <label className="label" htmlFor="txt-email">
                Email address
              </label>
              <input
                className="input"
                value={email}
                onChange={onChange}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="field-group">
              <label className="label" htmlFor="txt-password">
                Password
              </label>
              <input
                className="input"
                type="password"
                value={password}
                onChange={onChange}
                id="password"
                name="password"
                placeholder="*********"
              />
              <Link to="/register" className="Enter">
                Enter
              </Link>
            </div>
            <div className="field-group">
              <input className="btn-submit" type="submit" value="Log In" />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
export default FormRegister;
