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
          Qual é o foco principal da sua empresa de advocacia?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 0}>
          Nossa empresa de advocacia concentra-se principalmente em direito
          empresarial, civil, trabalhista e tributário. Oferecemos uma abordagem
          abrangente para atender às necessidades legais de nossos clientes,
          tanto individuais quanto corporativos.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(1)}>
          {openIndex === 1 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Como posso agendar uma consulta jurídica?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 1}>
          Para agendar uma consulta, entre em contato conosco por telefone ou
          através das nossas redes sociais. Estamos comprometidos em oferecer
          atendimento personalizado e responder prontamente às suas
          solicitações.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(2)}>
          {openIndex === 2 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Quais áreas a empresa atende clientes corporativos?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 2}>
          Para nossos clientes corporativos, oferecemos serviços especializados
          em contratos comerciais, resolução de litígios, consultoria
          trabalhista e orientação jurídica para garantir a conformidade legal e
          o sucesso contínuo de seus negócios.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(3)}>
          {openIndex === 3 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Como sua empresa aborda a resolução de conflitos?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 3}>
          Nossa abordagem busca soluções eficazes e eficientes para resolver
          conflitos, utilizando métodos como negociação, mediação e, quando
          necessário, litígios judiciais. Nosso objetivo é alcançar resultados
          favoráveis que atendam aos interesses e às expectativas de nossos
          clientes.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(4)}>
          {openIndex === 4 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Como posso acompanhar o progresso do meu processo legal?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 4}>
          Oferecemos uma abordagem transparente ao fornecer atualizações
          regulares sobre o andamento do seu caso. Além disso, disponibilizamos
          uma plataforma online segura, permitindo que você acesse documentos
          relacionados ao seu processo a qualquer momento, garantindo total
          visibilidade.
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
