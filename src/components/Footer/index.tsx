import logo from '../../assets/logofooter.png'
import { Container, Div1, Div2, Div3, Div4, Wrapper } from './styles'

import { AiOutlineFacebook } from 'react-icons/ai'
import { RiInstagramLine } from 'react-icons/ri'
import { FiYoutube } from 'react-icons/fi'
import { SlSocialTwitter } from 'react-icons/sl'

import safe from '../../assets/safe-google.png'
import logogoogle from '../../assets/logo-google.png'

export function Footer() {
  return (
    <Container>
      <Wrapper id="footer">
        <img src={logo} alt="" />
        <Div1>
          <div>
            <h5>AGENDE UMA CONVERSA</h5>
            <p>
              Marque seu atendimento on-line ou presencial com um de nossos
              advogados
            </p>
          </div>

          <div>
            <h5>ATENDIMENTO</h5>
            <p>atendimento@advogadosvlv.com</p>
            <p>Telefone: 44 3304 5456</p>
            <p>Segunda - Sexta: 8h às 18h</p>
            <p>Sábado - 8h às 12h</p>
          </div>

          <div>
            <h5>OUVIDORIA E CONTROLE DE QUALIDADE</h5>
            <p>ouvidoria@advogadosvlv.com</p>
          </div>
        </Div1>
        <Div2>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <AiOutlineFacebook size={20} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <RiInstagramLine size={20} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <FiYoutube size={20} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <SlSocialTwitter size={20} />
            </a>
          </li>
        </Div2>

        <Div3>
          <img src={logogoogle} alt="" />
          <img src={safe} alt="" />
        </Div3>
      </Wrapper>
      <Div4>
        <p>
          <span>© 2023 </span>VLV Advogados{' '}
          <span>CNPJ: 31176249/0001-86 -</span> OAB: 3996/BA -{' '}
          <span>Todos os direitos reservados</span>
        </p>
      </Div4>
    </Container>
  )
}
