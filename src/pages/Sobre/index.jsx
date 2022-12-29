import { Wrapper, BlocoTexto, BlocoSkill, Ilustration, Card, HtmlIcon, CssIcon, FigmaIcon, JSIcon, ReactIcon } from './styles';
import Head from '../../Components/Header';

function Sobre() {

  return (
    <Wrapper>
      <Head/>
      <BlocoTexto>
        <Ilustration/>
        <div>
          <h1>Olá, me chamo <span>Vinicius</span></h1>
          <p>
          Entrei no mundo da programação em 2018,
          desde lá eu já estudei varios assuntos como desenvolvimento de jogos, 
          UX/UI design entre outros, atualmente eu to cursando Ciência da Computação na universidade 
          e tenho foco em Front-End e UX/UI design.
          </p>
          <p>
            Sou um apaixonado por Tecnologia e sempre a procura de novos desafios!
          </p>
        </div>
      </BlocoTexto>
      <BlocoSkill>
        <Card>
          <HtmlIcon/>
          <div></div>
        </Card>
        <Card>
          <CssIcon/>
          <div></div>
        </Card>
        <Card>
          <FigmaIcon/>
          <div></div>
        </Card>
        <Card>
          <JSIcon/>
          <div></div>
        </Card>
        <Card>  
          <ReactIcon/>
          <div></div>
        </Card>
      </BlocoSkill>
    </Wrapper>
  )
}

export default Sobre