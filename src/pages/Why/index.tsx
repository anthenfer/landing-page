import { Div1, Div2, Wrapper } from './styles'

import card1 from '../../assets/why1.png'
import card2 from '../../assets/why2.png'
import card3 from '../../assets/why3.png'

export function Why() {
  return (
    <Wrapper>
      <Div1>
        <h3>Porque contratar nossos serviços?</h3>
        <div>
          <p>
            Em um momento conturbado da vida, no qual o mundo inteiro parece
            conspirar contra nossa felicidade, tudo o que buscamos é um lugar
            para encontrar apoio; alguém de confiança que possa estender a mão.
            Os nossos serviços, há muito tempo, deixou de ser apenas um escritório.
            <strong>
              {' '}
              Assim, nos transformamos vidas: protegendo direitos e garantindo que o devido processo legal seja respeitado. 
            </strong>
            .
          </p>
          <p>
            Estamos focados em contribuir através de nossa atuação que os direitos humanos e o processo justo se torne prioridade. Entre em contato
            agora através do nosso WhatsApp, telefone ou e-mail.
          </p>
        </div>
      </Div1>

      <Div2>
        <div>
          <img src={card1} alt="" />
          <div>
            <h4>NOSSO OBJETIVO</h4>
            <p>
              Atuação na defesa de pessoas investigadas ou acusadas, com foco na proteção de direitos e na garantia de um processo justo.
            </p>
          </div>
        </div>

        <div>
          <img src={card2} alt="" />
          <div>
            <h4>ATENDIMENTO ÚNICO</h4>
            <p>
              Atendimento objetivo, direto e claro. No Direito Criminal a assertividade e a estratégia correta fazem a diferença nos resultados.
            </p>
          </div>
        </div>

        <div>
          <img src={card3} alt="" />
          <div>
            <h4>EQUIPE ESPECIALIZADA</h4>
            <p>
              Responsabilidade e estratégia no Direito Criminal. 
              Cada detalhe é analisado pela equipe para definir a melhor linha de defesa.
            </p>
          </div>
        </div>
      </Div2>
    </Wrapper>
  )
}
