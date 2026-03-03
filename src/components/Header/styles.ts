import styled from 'styled-components'

export const HeaderContainer = styled.header`
  margin: 0 auto;
  padding: 1.5rem;

  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  color: ${(props) => props.theme['base-nav']};

  background: ${(props) => props.theme['base-white']};
  z-index: 1;
`

export const Div1 = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  img {
    height: 40px;
  }
`

export const NavBar = styled.nav`
  button {
    display: none;
    border: none;
    background-color: transparent;

    @media (max-width: 690px) {
      display: block;
    }
  }

  ul {
    list-style-type: none;
    display: flex;

    li {
      margin-left: 1.5rem;
      font-weight: bold;
      cursor: pointer;

      @media (max-width: 600px) {
        margin-left: 0.6rem;
        font-size: 0.8rem;
      }
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme['base-nav']};
      transition: 0.2s all ease-in-out;

      &:hover {
        color: ${(props) => props.theme['purple-base']};
      }
    }
  }

  ul {
    @media (max-width: 690px) {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    max-width: 900px;
  }
`

export const MenuMobileOpen = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme['base-nav']};
  color: white;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    position: absolute;
    top: 30px;
    right: 30px;
    border: none;
    background-color: transparent;
    color: white;
  }
`

export const Ul = styled.ul`
  list-style-type: none;
  text-align: center;

  li {
    position: relative;
    margin-bottom: 4rem;
    font-size: 2rem;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      bottom: -30px;
      right: 0;
      left: 0;
      width: 100%;
      height: 1px; /* Altura da linha */
      background-color: #000; /* Cor da linha */
    }

    a {
      text-decoration: none;
      color: white;
    }
  }
`
