import Head from '../../Components/Header';
import Typed from "react-typed";
import { Wrapper, Tittle, Container } from "./styles";

function Home() {

  return (
    <Wrapper>
      <Head/>
      <Tittle>Vinicius D. Freitas</Tittle>
      <h2>
        <Typed
        strings={['Desenvolvedor Front-end','UX/UI Design']} typeSpeed={100} backSpeed={100} loop/>
      </h2>
      <Container>
        <a href='https://www.linkedin.com/in/vinicius-freitas-674677233/' target='_blank'>LinkedIn</a>
        <a href='https://github.com/vinicius024' target='_blank'>Github</a>
      </Container>
    </Wrapper>
  )
}

export default Home