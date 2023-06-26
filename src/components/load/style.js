import { styled } from "styled-components";

const ContainerLoad = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loader {
    width: 50px;
  }
`;

export { ContainerLoad };
