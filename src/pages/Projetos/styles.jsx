import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    background: none;


    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 80%;

    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 4fr));
    grid-gap: 30px;
`;

export const Card = styled.div`
    background: none;
    border: 1px solid #DE05FF;

    width: 250px;
    height: 300px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    div{
        background: none;

        width: 100%;
        height: 18%;

        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    h2{
        position: relative;
        top: 60px;
        color: #2978A0;
        font-size: 2em;
    }
    a{
        color: #fff;
        background: #2978A0;

        border: none;
        border-radius: 6px;
        width: 40%;
        height: 72%;

        display: flex;
        align-items: center;
        justify-content: center;

        font-weight: 300;
        font-size: 1.2em;

        cursor: pointer;
        :hover {
            background: #1e5875;
        }
    }
    
`;