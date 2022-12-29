import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BlocoTexto = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    background: none;
    width: 80%;
    height: 60%;
   
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
        background: none;
        
        width: 40%;
        height: 60%;

        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        flex-direction: column;

    }
        
    h1{
        font-weight: 700;
        font-size: 2em;
    }
    span{
        color: #2978a0;
    }
    p{
        width: 90%;
        font-weight: 400;
        font-size: 1.3em;
        text-align: justify;
        text-indent: 1em;
            
    }
`;

export const BlocoSkill = styled.div`
    background: none;
    
    position: absolute;
    width: 80%;
    height: 40%;
    top: 150%;
    left: 50%;
    transform: translate(-50%,-150%);

    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(100px, 5fr));
`;

export const Card = styled.div`
    background: #000;
    width: 65%;
    height: 50%;

    border: none;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    ::after{
        content: "";
        background: #000;
        width: 150px;
        height: 150px;
        border: none;
        border-radius: 6px;
        
        position: absolute;
    }

    ::before {
        content: "";
        background: #DE05FF;
        width: 50%;
        height: 400%;
        animation: gira 5s linear infinite;
        
        @keyframes gira {
            0% { transform: rotate(0deg)} 100%{transform: rotate(360deg)}
        }
    }
`;



export const Ilustration = styled.image`
    content: url('https://api.iconify.design/mdi/robot-happy.svg?color=%232978a0&width=200&height=200');
`;


export const HtmlIcon = styled.image `
    content: url('https://api.iconify.design/vscode-icons/file-type-html.svg?color=%232973a0&width=80&height=80');
    position: absolute;
    z-index: 5;
`;

export const CssIcon = styled.image `
    content: url('https://api.iconify.design/vscode-icons/file-type-css.svg?color=%232973a0&width=80&height=80');
    position: absolute;
    z-index: 5;
`;

export const FigmaIcon = styled.image `
    content: url('https://api.iconify.design/logos/figma.svg?color=%232973a0&width=80&height=80');
    position: absolute;
    z-index: 5;
`;

export const JSIcon = styled.image `
    content: url('https://api.iconify.design/vscode-icons/file-type-js-official.svg?color=%232973a0&width=80&height=80');
    position: absolute;
    z-index: 5;
`;

export const ReactIcon = styled.image `
    content: url('https://api.iconify.design/logos/react.svg?color=%232973a0&width=80&height=80');
    position: absolute;
    z-index: 5;
`;
