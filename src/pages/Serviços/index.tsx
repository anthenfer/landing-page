import { useState } from 'react'
import {
  Container,
  DetailsBloc,
  DivDetails,
  ServicesBloc,
  ServicesLink,
  Wrapper,
} from './styles'

import { FaLongArrowAltRight } from 'react-icons/fa'

export function Servicos() {
  const [selectedTopic, setSelectedTopic] = useState<number>(1)
  const [detailsTransition, setDetailsTransition] = useState<boolean>(true)

  const handleTopicClick = (topicNumber: number) => {
    setSelectedTopic(topicNumber)
    setDetailsTransition(false)

    setTimeout(() => {
      setDetailsTransition(true)
    }, 10)
  }

  return (
    <Container>
      <Wrapper id="servico">
        <ServicesBloc>
          <h3>Áreas de Atuação</h3>
          <ul>
            <li>
              <ServicesLink
                selected={selectedTopic === 1}
                onClick={() => handleTopicClick(1)}
              >
                <span>
                  <FaLongArrowAltRight size={20} />
                </span>
                Acompanhamento na Delegacia
              </ServicesLink>
            </li>

            <li>
              <ServicesLink
                selected={selectedTopic === 2}
                onClick={() => handleTopicClick(2)}
              >
                <span>
                  <FaLongArrowAltRight size={20} />
                </span>
                Consultoria e Assessoria Jurídica
              </ServicesLink>
            </li>

            <li>
              <ServicesLink
                selected={selectedTopic === 3}
                onClick={() => handleTopicClick(3)}
              >
                <span>
                  <FaLongArrowAltRight size={20} />
                </span>
                Defesa em Processos Criminais
              </ServicesLink>
            </li>
            <li>
              <ServicesLink
                selected={selectedTopic === 4}
                onClick={() => handleTopicClick(4)}
              >
                <span>
                  <FaLongArrowAltRight size={20} />
                </span>
                Execução Penal
              </ServicesLink>
            </li>

            <li>
              <ServicesLink
                selected={selectedTopic === 5}
                onClick={() => handleTopicClick(5)}
              >
                <span>
                  <FaLongArrowAltRight size={20} />
                </span>
                Direito Penal e Processual Penal
              </ServicesLink>
            </li>
          </ul>
          <a
            href="https://wa.me/5519994053277"
            target="_blank"
            rel="noreferrer"
          >
            Fale com o especialista
          </a>
        </ServicesBloc>

        <DetailsBloc>
          {selectedTopic === 1 && (
            <DivDetails transition={detailsTransition}>
              <div>
                <h3>
                  {''}
                  Assistência durante os procedimentos criminais iniciais. Com
                  responsabilidade técnica e malícia jurídica.{' '}
                </h3>
              </div>
            </DivDetails>
          )}

          {selectedTopic === 2 && (
            <DivDetails transition={detailsTransition}>
              <div>
                <h3>
                  Orientações focadas no Direito Penal, oferecendo análise de
                  casos, estratégias de defesa e suporte contínuo em questões
                  criminais.
                </h3>
              </div>
            </DivDetails>
          )}

          {selectedTopic === 3 && (
            <DivDetails transition={detailsTransition}>
              <div>
                <h3>
                  Atuação estratégica na construção de defesas técnicas sólidas,
                  acompanhando o processo com foco na proteção dos seus
                  direitos.
                </h3>
              </div>
            </DivDetails>
          )}

          {selectedTopic === 4 && (
            <DivDetails transition={detailsTransition}>
              <div>
                <h3>
                  Acompanhamento e defesa em etapas pós-condenação, garantindo
                  que os direitos do condenado sejam respeitados.
                </h3>
              </div>
            </DivDetails>
          )}

          {selectedTopic === 5 && (
            <DivDetails transition={detailsTransition}>
              <div>
                <h3>
                  Atuação rigorosa em defesa dos direitos individuais,
                  enfrentando acusações e garantindo um processo justo.
                </h3>
              </div>
            </DivDetails>
          )}
        </DetailsBloc>
      </Wrapper>
    </Container>
  )
}
