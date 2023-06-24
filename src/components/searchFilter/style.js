import { styled } from "styled-components";

const ContainerSearch = styled.div`
  display: flex;
  width: 85%;
  justify-content: center;
  height: 10%;
  align-items: center;
  color: var(--color-font);
  .search-compress {
    display: flex;
    height: 5%;
    margin: 50px 0;
    align-items: flex-start;
    width: 100%;
    flex-direction: column;
  }
  .container-search-text {
    display: flex;
    flex-direction: column;
    margin: 5% 0;
    width: 100%;
  }
  .container-search-filter {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 150px;
    font-size: 0.8rem;
  }
  select {
    width: 100%;
    border-radius: 4px;
    border-color: transparent;
    border: 1px solid var(--color-information);
    height: 30px;
    color: var(--color-font);
  }
  option {
    color: var(--color-font);
    font-weight: bold;
  }
  input {
    height: 30px;
    border-radius: 4px;
    border: 1px solid var(--color-information);
    padding: 10px;
  }
`;

export { ContainerSearch };
