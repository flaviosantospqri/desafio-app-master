import { styled } from "styled-components";

const StyleHeader = styled.div`
  display: flex;
  margin: 0 5%;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 60px;
  font-size: 2rem;
  color: var(--color-font);
  .bar-log {
    color: var(--color-information);
  }
  .btn-sector {
    display: flex;
    justify-content: space-around;
    padding: 5px;
    transition-property: 0.5s;
  }
  .aplication-name {
    width: 90%;
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
  @media screen and (max-width: 450px) {
    flex-wrap: wrap-reverse;
  }
`;

const ContainerHeardeSection = styled.div`
  margin-bottom: 5%;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export { StyleHeader, ContainerHeardeSection };
