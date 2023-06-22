import { styled } from "styled-components";

const ContainerSearch = styled.div`
    display: flex;
    width: 60%;
    justify-content: center;
    height: 10%;
    align-items: center;
    color: var(--color-font);
    .search-compress{
        display: flex;
        height: 5%;
        justify-content: s;
        width: 100%;
        flex-direction: column;
    }
    .container-search-text{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .container-search-filter{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 25%;
        font-size: 0.8rem;
    }
    select{
        margin-top: 5% ;
        border-radius: 4px;
        border-color: transparent;
        height: 20px;
        color: var(--color-font);
    }
    input{
        height: 35px;
        margin-top: 2%;
        margin-bottom: 2%;
        border-radius: 4px;
        border-color: transparent;
    }
`

export {ContainerSearch}