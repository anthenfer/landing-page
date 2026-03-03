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
          <h3>Nossos Serviços</h3>
          <ul>
            <li>
              <ServicesLink
                selected={selectedTopic === 1}
                onClick={() => handleTopicClick(1)}
              >
                <span>
                  <FaLongArrowAltRight size={20} />
                </span>
                Direito Criminal
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
                Direito da Saúde
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
                Residentes no Exterior
              </ServicesLink>
            </li>
          </ul>
          <a
            href="https://wa.me/5544998505620"
            target="_blank"
            rel="noreferrer"
          >
            Fale com a nossa equipe
          </a>
        </ServicesBloc>

        <DetailsBloc>
          {selectedTopic === 1 && (
            <DivDetails transition={detailsTransition}>
              <div>
                <h3>Defesa Criminal</h3>
                <p>
                  Representação legal para indivíduos acusados em processos
                  judiciais.
                </p>
              </div>

              <div>
                <h3>Consultoria Jurídica</h3>
                <p>
                  Orientação legal estratégica para questões criminais
                  específicas.
                </p>
              </div>

              <div>
                <h3>Negociação de Acordos</h3>
                <p>
                  Mediação para alcançar acordos favoráveis em processos
                  criminais.
                </p>
              </div>
            </DivDetails>
          )}

          {selectedTopic === 2 && (
            <DivDetails transition={detailsTransition}>
              <div>
                <h3>Defesa em Casos de Má Prática Médica</h3>
                <p>Representação legal em alegações de negligência médica.</p>
              </div>

              <div>
                <h3>Assessoria em Compliance</h3>
                <p>
                  Orientação para conformidade legal em instituições de saúde.
                </p>
              </div>

              <div>
                <h3>Litígio de Direitos do Paciente</h3>
                <p>
                  Resolução legal de disputas sobre direitos e cuidados médicos.
                </p>
              </div>
            </DivDetails>
          )}

          {selectedTopic === 3 && (
            <DivDetails transition={detailsTransition}>
              <div>
                <h3>Imigração e Vistos</h3>
                <p>
                  Orientação legal para residência e vistos em países
                  estrangeiros.
                </p>
              </div>

              <div>
                <h3>Planejamento Sucessório Internacional</h3>
                <p>
                  Assessoria legal para herança e sucessão em jurisdições
                  diferentes.
                </p>
              </div>

              <div>
                <h3>Resolução de Disputas Transnacionais</h3>
                <p>
                  Representação legal em questões legais envolvendo residentes
                  no exterior.
                </p>
              </div>
            </DivDetails>
          )}
        </DetailsBloc>
      </Wrapper>
    </Container>
  )
}
