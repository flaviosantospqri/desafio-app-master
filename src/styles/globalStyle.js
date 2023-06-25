import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #FFB800;
    --color-primary-variable-1:  #FFD600;
    --color-secondary: #1A8E88;
    --color-secondary-variable-1: #31847F;
    --color-danger: #C63A3A;
    --color-grey100: #111111;
    --color-grey50: #878787;
    --color-grey20: #E0E0E0;
    --color-grey0: #FAFAFA;
    --color-negative: #E60000;
    --color-warning: #FFCD07;
    --color-success: #168821;
    --color-information: #155BCB;
    --color-font: #434D57
}
body{
    font-family: 'Roboto', sans-serif;
    background: var(--color-grey0);
    margin: 0 auto;
}
`;
export default GlobalStyle;
