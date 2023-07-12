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
  .custom-loader {
    width: 48px;
    height: 48px;
    background: #766df4;
    --c: radial-gradient(farthest-side, #000 92%, #0000);
    --s: 20px 20px;
    -webkit-mask: var(--c) top -8px left 50%, var(--c) right -8px top 50%,
      var(--c) bottom -8px left 50%, var(--c) left -8px top 50%,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    -webkit-mask-repeat: no-repeat;
    animation: cu8 1.5s infinite;
  }

  @keyframes cu8 {
    0% {
      -webkit-mask-size: 0 0, 0 0, 0 0, 0 0, auto;
    }
    12.5% {
      -webkit-mask-size: var(--s), 0 0, 0 0, 0 0, auto;
    }
    25% {
      -webkit-mask-size: var(--s), var(--s), 0 0, 0 0, auto;
    }
    37.5% {
      -webkit-mask-size: var(--s), var(--s), var(--s), 0 0, auto;
    }
    45%,
    55% {
      -webkit-mask-size: var(--s), var(--s), var(--s), var(--s), auto;
    }
    62.5% {
      -webkit-mask-size: 0 0, var(--s), var(--s), var(--s), auto;
    }
    75% {
      -webkit-mask-size: 0 0, 0 0, var(--s), var(--s), auto;
    }
    87.5% {
      -webkit-mask-size: 0 0, 0 0, 0 0, var(--s), auto;
    }
    100% {
      -webkit-mask-size: 0 0, 0 0, 0 0, 0 0, auto;
    }
  }
`;

export { ContainerLoad };
