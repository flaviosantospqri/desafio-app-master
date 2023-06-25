import { styled } from "styled-components";

const StyleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 5% 5%;
  height: 10%;
  width: 90%;
  max-height: 60px;
  font-size: 2rem;
  color: var(--color-font);
  .bar-log {
    color: var(--color-information);
  }
  .btn-sector {
    display: flex;
    justify-content: space-between;
    margin-right: 5%;
    width: 25%;
  }

  .btn {
    font-size: 1rem;
    width: 80%;
    margin: 5px;
    color: var(--color-font);
    background-color: transparent;
    border: 1px solid var(--color-grey20);
    padding: 3px 5px;
    font-weight: lighter;
    border-radius: 8px;
    text-align: center;
  }
  .btn:link {
    text-decoration: none;
  }
  .btn:hover {
    font-weight: bold;
  }
  .aplication-name {
    text-align: center;
  }
  button {
    background-color: transparent;
    border: 1px solid var(--color-grey50);
    font-size: 0.8rem;
    min-width: 80px;
    margin-left: 1%;
    border-radius: 8px;
    padding: 3px;
    cursor: pointer;
  }
  button:hover {
    font-weight: bold;
    transition-duration: 1s;
  }
  @media screen and (max-width: 500px) {
    flex-wrap: wrap-reverse;
    .btn-sector {
      width: 100%;
      margin: 0 20px;
    }
  }
`;

const ContainerHeardeSection = styled.div`
  width: 100%;
  max-width: 1100px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export { StyleHeader, ContainerHeardeSection };
