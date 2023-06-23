import { styled } from "styled-components";

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  min-width: 250px;
  max-width: 300px;
  width: 100%;
  border: 1px solid var(--color-grey20);
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 2%;
  border-radius: 8px;
  margin: 10px;

  .container-photo {
    max-width: 290px;
  }
  img {
    width: 100%;
    border-radius: 4px;
  }
`;

export { ContainerCard };
