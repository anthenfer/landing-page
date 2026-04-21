import logo from '../../assets/logofooter.png'
import { Container, Div1, Div2, Div3, Div4, Wrapper } from './styles'

import { AiOutlineFacebook } from 'react-icons/ai'
import { RiInstagramLine } from 'react-icons/ri'
import { FaTiktok } from 'react-icons/fa'
import safe from '../../assets/safe-google.png'
import logogoogle from '../../assets/logo-google.png'

export function Footer() {
  return (
    <Container>
      <Wrapper id="footer">
        <img src={logo} alt="logo do escritório" style={{ width: '120px' }} />
        <Div1>
          <div>
            <h5>AGENDE UMA CONVERSA</h5>
            <p>
              Marque seu atendimento on-line ou presencial com um de nossos
              advogados especialistas.
            </p>
          </div>

          <div>
            <h5>ATENDIMENTO</h5>
            <p>cesarnunes@adv.oabsp.or.br</p>
            <p>Telefone: 19 9 9405 3277</p>
            <p>Endereço: R. Zacarias Costa Camargo, 355</p>
            <p>Lot. Remanso Campineiro</p>
            <p>Hortolândia - SP, 13184-280</p>
          </div>

          <div>
            <h5>OUVIDORIA E CONTROLE DE QUALIDADE</h5>
            <p>cesarnunes@adv.oabsp.or.br</p>
            <p>24 horas por dia</p>
          </div>
        </Div1>
        <Div2>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61586853991132&ref=NONE_ig_profile_ac"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFacebook size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/advcesarnunes/"
              target="_blank"
              rel="noreferrer"
            >
              <RiInstagramLine size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@advogado.cesar.nunes?_r=1&_t=ZS-95UFUGtaAuD&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnpdfJ_j4stkuYiVzaJ5vNljCL8vSO-dcaRSfQu11dXgtUM2GXYkOhzVN_lwU_aem_ceetPSTRqqfyhXAwzbteRg"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok size={20} />
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
          <span>© 2026 </span>César Nunes Advogado{' '}
          <span>CNPJ: 00000000/0001-00 -</span> OAB: 542.889/SP -{' '}
          <span>Todos os direitos reservados</span>
        </p>
      </Div4>
    </Container>
  )
}
