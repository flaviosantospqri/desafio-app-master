import { Link } from "react-router-dom";
import { Container } from "./style";

function FormLogin() {
  return (
    <Container>
      <Link to="/">Back</Link>
      <div className="container">
        <div className="container_form">
          <form className="container_form_items">
            <h1 className="text-title">Login</h1>
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
            </div>
            <div className="field-group">
              <input className="btn-submit" type="submit" value="Log In" />
            </div>
            <Link to="/register" className="link-forgot">
              Forgot?
            </Link>
          </form>
        </div>
      </div>
    </Container>
  );
}
export default FormLogin;
