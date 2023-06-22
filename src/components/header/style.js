import { styled } from "styled-components";

const StyleHeader = styled.div`
  display: flex;
  margin: 3%;
  margin-top: 2%;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  max-height: 60px;
  font-size: 2rem;
  color: var(--color-font);
  .bar-log {
    color: var(--color-information);
  }
  .btn-sector{
    display: flex;
    justify-content: space-around;
    padding: 5px;
  }
  .aplication-name{
    width: 90%;
    text-align: center;
  }
  button{
    background-color: transparent;
    border: 1px solid var(--color-grey50);
    font-size: 1rem;
    min-width: 100px;
    margin-left: 1%;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover{
    font-weight: bold;
    transition-duration: 1s;
  }

`;
export { StyleHeader };
