import { Link } from "react-router-dom";
import { Container } from "../formLogin/style";

function FormRegister() {
  return (
    <Container>
      <Link to="/">Back</Link>
      <div className="container">
        <div className="container_form">
          <form className="container_form_items">
            <h1 className="text-title">Register</h1>
            <div className="field-group">
              <label className="label" htmlFor="txt-email">
                Your Name
              </label>
              <input
                className="input"
                type="name"
                id="txt-name"
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
                type="email"
                id="txt-email"
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
                id="txt-password"
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
