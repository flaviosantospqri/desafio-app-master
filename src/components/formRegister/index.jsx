import { Link, useNavigate } from "react-router-dom";
import { Container } from "../formLogin/style";
import { useContext, useState } from "react";
import { app, db } from "../../services/firebase";
import { toast } from "react-toastify";
import { FireBaseContext } from "../../contexts/firebase/firebaseContexts";

function FormRegister() {
  const { auth } = useContext(FireBaseContext);
  const [dataUser, setDataUser] = useState({
    name: "",
    email: "",
    password: "",
    likeList: [],
  });

  const { name, email, password, likeList } = dataUser;

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
      const userCredential = await app.createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      currentUser = auth.currentUser;
      currentUser.updateProfile(currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const dataInfo = { ...dataUser };
      delete dataInfo.password;
      dataInfo.timesTamp = serverTimestamp();
      await db.collection("users" + user.uid).set(dataInfo);
      toast.success("Register was successful");
      navigate("/");
    } catch (error) {
      toast.error("Error on registration certify your informations is correct");
    }
  }
  return (
    <Container>
      <Link to="/">Back</Link>
      <div className="container">
        <div className="container_form">
          <form className="container_form_items" onSubmit={onSubmit}>
            <h1 className="text-title">Register</h1>
            <div className="field-group">
              <label className="label" htmlFor="txt-email">
                Your Name
              </label>
              <input
                className="input"
                type="text"
                id="name"
                value={name}
                onChange={onChange}
                name="name"
                placeholder="Name"
              />
            </div>
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
              <Link to="/login" className="link-forgot">
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
