import { Div1, Div2, Wrapper } from './styles'

import card1 from '../../assets/why1.png'
import card2 from '../../assets/why2.png'
import card3 from '../../assets/why3.png'

export function Why() {
  return (
    <Wrapper>
      <Div1>
        <h3>Porque contratar a VLV advogados?</h3>
        <div>
          <p>
            Em um momento conturbado da vida, no qual o mundo inteiro parece
            conspirar contra nossa felicidade, tudo o que buscamos é um lugar
            para encontrar apoio; alguém de confiança que possa estender a mão.
            O VLV Advogados, há muito tempo, deixou de ser apenas um escritório.
            <strong>
              {' '}
              Assim, nos transformamos no sonho VLV: o sonho de revolucionar o
              mercado jurídico e as relações humanas
            </strong>
            .
          </p>
          <p>
            Estamos 100% focados em ajudar nossos clientes a reestruturarem seus
            caminhos, alcançarem objetivos e viverem uma vida de paz. Saiba como
            nossos clientes estão sendo impactados diariamente. Entre em contato
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
              A VLV Advogados se destaca pelo compromisso incansável em oferecer
              soluções jurídicas personalizadas e resultados excepcionais para
              cada cliente.
            </p>
          </div>
        </div>

        <div>
          <img src={card2} alt="" />
          <div>
            <h4>ATENDIMENTO ÚNICO</h4>
            <p>
              Nosso diferencial está na combinação perfeita entre expertise
              jurídica de alto nível, atendimento personalizado e resultados
              consistentes, garantindo tranquilidade e segurança para nossos
              clientes.
            </p>
          </div>
        </div>

        <div>
          <img src={card3} alt="" />
          <div>
            <h4>EQUIPE ESPECIALIZADA</h4>
            <p>
              A VLV Adovogados se destaca pela busca constante pela excelência,
              com uma equipe altamente qualificada e comprometida em oferecer
              soluções jurídicas eficazes e inovadoras para cada cliente.
            </p>
          </div>
        </div>
      </Div2>
    </Wrapper>
  )
}
