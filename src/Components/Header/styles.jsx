import styled from "styled-components";

export const Wrapper = styled.div`
    background: rgba(0,0,0, .3);
    backdrop-filter: blur(12px);

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    ul {
        background: none;

        padding: 0;
        width: 30%;
        height: 50%;

        display: flex;
        align-items: center;
        justify-content: space-around;

    }

    a {
        color: #2978A0;
        font-size: 1.6em;
        font-weight: 400;

        text-decoration: none;
    }

`;

export const Tittle = styled.h1`
    color: #2978A0;

    font-weight: 300;
    font-size: 3em;
`;