import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  .container_form {
    display: flex;
    flex-direction: column;
    height: 50vh;
    align-items: center;
    justify-content: center;
    min-width: 260px;
    max-width: 600px;
  }
  .field-group {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .container_form_items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    flex-direction: column;
    width: 100%;
  }
  .input {
    width: 100%;
    height: 40px;
    border: none;
    margin: 10px 0;
    border-radius: 4px;
    padding: 10px;
  }
  .label {
    font-size: 16px;
    font-weight: lighter;
    color: var(--color-font);
  }
  .link-forgot {
    align-self: flex-end;
    text-decoration: none;
    color: var(--color-information);
  }
  .btn-submit {
    margin: 10px 0;
    height: 40px;
    background-color: var(--color-secondary);
    border: none;
    border-radius: 4px;
  }
  .text-title {
    margin: 20px 0;
    color: var(--color-font);
  }
`;

export { Container };
