import { Div1, HeaderContainer, MenuMobileOpen, NavBar, Ul } from './styles'
import logo from '../../assets/logo.svg'
import { IoMenu, IoClose } from 'react-icons/io5'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const openMenuMobile = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <HeaderContainer>
        <Div1>
          <img src={logo} alt="" />

          <NavBar>
            <ul>
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#servico">Serviços</a>
              </li>

              <li>
                <a href="#perguntas">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#footer">Fale Conosco</a>
              </li>
            </ul>
            <button onClick={openMenuMobile}>
              <IoMenu size={45} />
            </button>
          </NavBar>
        </Div1>
      </HeaderContainer>
      {isOpen && (
        <MenuMobileOpen>
          <button onClick={openMenuMobile}>
            <IoClose size={50} />
          </button>

          <Ul>
            <li>
              <a href="#" onClick={openMenuMobile}>
                Início
              </a>
            </li>
            <li>
              <a href="#servico" onClick={openMenuMobile}>
                Serviços
              </a>
            </li>

            <li>
              <a href="#perguntas" onClick={openMenuMobile}>
                Perguntas Frequentes
              </a>
            </li>
            <li>
              <a href="#footer" onClick={openMenuMobile}>
                Fale Conosco
              </a>
            </li>
          </Ul>
        </MenuMobileOpen>
      )}
    </>
  )
}
