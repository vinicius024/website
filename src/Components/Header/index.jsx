import react from "react";
import { Wrapper, Tittle } from "./styles";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <Wrapper>
            <Tittle>VF</Tittle>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Projetos">Projetos</Link>
                <Link to="/Contato">Contato</Link>
            </ul>
        </Wrapper>
    )
}