import { useState } from 'react'
import {
  AccordionContainer,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
} from './styles'
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from 'react-icons/io'

export function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <AccordionContainer>
      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(0)}>
          {openIndex === 0 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Fui preso em flagrante. O que fazer?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 0}>
          Procure um advogado imediatamente. A atuação nas primeiras horas é
          decisiva para analisar a legalidade da prisão e buscar sua liberdade o
          quanto antes.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(1)}>
          {openIndex === 1 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Estou sendo investigado. Já preciso de advogado?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 1}>
          Sim. A defesa começa na investigação. Uma atuação estratégica desde o
          início pode evitar erros e proteger seus direitos.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(2)}>
          {openIndex === 2 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Posso responder ao processo em liberdade?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 2}>
          Depende do caso. É possível solicitar liberdade provisória ou outras
          medidas, com base em uma análise técnica da situação.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(4)}>
          {openIndex === 4 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          O que faz a diferença em uma defesa criminal?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 4}>
          Estratégia e rapidez. Cada detalhe do processo pode mudar o resultado
          quando analisado de forma técnica e assertiva.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(5)}>
          {openIndex === 5 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Como são determinados os honorários da sua empresa?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 5}>
          Nossos honorários são determinados com base na complexidade do caso,
          recursos necessários e tempo dedicado. Durante a consulta inicial,
          discutimos detalhadamente nossas estruturas de cobrança flexíveis,
          buscando atender às necessidades específicas de cada cliente.
        </AccordionContent>
      </AccordionItem>
    </AccordionContainer>
  )
}
