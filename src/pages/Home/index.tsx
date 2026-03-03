import { Container, Div2, Wrapper } from './styles'
import blogueira from '../../assets/blogueira.webp'
import { AiOutlineFacebook } from 'react-icons/ai'
import { RiInstagramLine } from 'react-icons/ri'
import { FiYoutube } from 'react-icons/fi'
import { SlSocialTwitter } from 'react-icons/sl'

export function Home() {
  return (
    <Container>
      <Wrapper>
        <div>
          <h1>Advogados Especializados</h1>
          <p>
            Nós da VLV Advogados, estamos prontos para oferecer a você os
            melhores serviços jurídicos e a representação legal que você merece.
          </p>
          <a
            href="https://wa.me/5544998505620"
            target="_blank"
            rel="noreferrer"
          >
            Fale com a nossa equipe
          </a>
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
        </div>
        <img src={blogueira} alt="" />
      </Wrapper>
    </Container>
  )
}
