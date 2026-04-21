import { Container, Div2, Wrapper } from './styles'
import blogueira from '../../assets/blogueira.webp'
import { AiOutlineFacebook } from 'react-icons/ai'
import { RiInstagramLine } from 'react-icons/ri'
import { FaTiktok } from 'react-icons/fa'

export function Home() {
  return (
    <Container>
      <Wrapper>
        <div>
          <h2>Advogado Criminalista</h2>
          <h1>Dr. César Nunes Criminalista</h1>
          <p>
            Atuação em Campinas, Indaiatuba, Valinhos, Vinhedo, Sumaré,
            Hortolândia, Paulínia.
          </p>
          <p>
            O direito criminal é ação, é atitude. O advogado deve estar onde o
            problema acontece, realizando a defesa presencialmente.
          </p>
          <a
            href="https://wa.me/5519994053277"
            target="_blank"
            rel="noreferrer"
          >
            Contato pelo WhatsApp
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
                <FaTiktok size={20} />
              </a>
            </li>
          </Div2>
        </div>
        <img src={blogueira} alt="" />
      </Wrapper>
    </Container>
  )
}
