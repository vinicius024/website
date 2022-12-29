import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h2{
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%,-30%);

        font-weight: 600;
        font-size: 2em;
    }
`;

export const Container = styled.div`
    background: none;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 42%;
    height: 12%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    a{
        background: #2978a0;
        color: #fff;
        border: none;
        border-radius: 6px;
        width: 30%;
        height: 48%;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.3em;
        font-weight: 400;
        text-decoration-line: none;
        cursor: pointer;

        :hover{
            background: #226485;
        }
    }
`;