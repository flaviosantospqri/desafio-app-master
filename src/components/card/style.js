import { styled } from "styled-components";

const ContainerGallery = styled.div`
  display: flex;
  max-width: 1100px;
  height: 50vh;
  margin-top: 5%;
  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 250px;
    max-width: 300px;
    width: 100%;
    min-height: 350px;
    border: 1px solid var(--color-grey20);
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 2%;
    border-radius: 8px;
    margin: 10px;
    box-shadow: -4px 19px 23px -6px rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }
  .container-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }
  .container-photo {
    max-width: 290px;
  }
  img {
    width: 100%;
    border-radius: 4px;
  }
`;
export { ContainerGallery };
