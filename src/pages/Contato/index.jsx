import { useState } from 'react';
import Head from '../../Components/Header';
import { Wrapper, Container } from "./styles";


function Contato() {

  return (
    <Wrapper>
      <Head/>
      <h2>Venha conhecer um pouco mais dos meus trabalhos!</h2>
      <Container>
        <a href='https://github.com/vinicius024' target='_blank'>GitHub</a>
        <a href='https://www.behance.net/viniciusfreitas8' target='_blank'>Behance</a>
        <a href='https://www.linkedin.com/in/vinicius-freitas-674677233/' target='_blank'>LinkedIn</a>
      </Container>
    </Wrapper>
  )
}

export default Contato