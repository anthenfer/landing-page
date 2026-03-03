import { Whats } from './styles'
import { FaWhatsapp } from 'react-icons/fa'

export function WhatsApp() {
  return (
    <Whats>
      <a href="https://wa.me/5544998505620" target="_blank" rel="noreferrer">
        <FaWhatsapp size={40} />
      </a>
    </Whats>
  )
}
