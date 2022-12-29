import styled from "styled-components";

export const Wrapper = styled.div`
    background-image: url(https://images.unsplash.com/photo-1484268234627-2278797bec04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
    background-repeat: no-repeat;
    background-size: 100%;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    ::before {
        content: '';
        background: rgba(0,0,0, .67);
        position: absolute;
        width: 100%;
        height: 100%;
    }

    h2 {
        position: absolute;
        top: 49%;
        left: 50%;
        transform: translate(-50%, -49%);

        color: #2978A0;
        font-weight: 400;
        font-size: 2em;
    }

`;

export const Tittle = styled.h1`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-30%);

    color: #2978A0;
    font-size: 5.3em;
    font-weight: 600;
`;

export const Container = styled.div`
        background: none;
        width: 36%;
        height: 18%;

        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -70%);

        display: flex;
        align-items: center;
        justify-content: center;

        a{
            margin: 6%;
            width: 36%;
            height: 42%;
            
            background: #2978a0;
            color: #FFF;
            border: none;
            border-radius: 6px;
            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 1.5em;
            font-weight: 400;
            text-decoration: none;

            :hover{
                background: #226485;
            }
        }
`;

