import styled from 'styled-components'

interface ServicesLinkProps {
  $selected: boolean
}

interface DivDetailsProps {
  $transition: boolean
}

export const Container = styled.main`
  margin: 0 auto;
  background-color: ${(props) => props.theme['base-background']};
  color: ${(props) => props.theme['base-title']};
`

export const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 auto;
  gap: 2rem;
  padding: 5rem;

  @media (max-width: 660px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const ServicesBloc = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 996px) {
    align-self: baseline;
  }

  @media (max-width: 660px) {
    align-self: center;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    padding: 1rem 0.5rem;
    width: 100%;
    font-size: 0.8rem;
    font-weight: 700;
    background-color: ${(props) => props.theme['base-nav']};
    color: ${(props) => props.theme['base-white']};
    text-align: center;
    transition: 0.3s all ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme['base-nav']};
      color: ${(props) => props.theme['base-white']};
    }
  }
`

export const DetailsBloc = styled.div`
  max-width: 50%;

  @media (max-width: 660px) {
    max-width: 100%;
  }
`

export const ServicesLink = styled.button<ServicesLinkProps>`
  font-weight: ${({ $selected }) => ($selected ? 'bold' : 'normal')};
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  text-align: left;
  color: ${(props) => props.theme['base-title']};

  span {
    display: ${({ $selected }) => ($selected ? 'initial' : 'none')};
    position: absolute;
    left: -2rem;
    color: ${(props) => props.theme['blue-home']};
  }
`

export const DivDetails = styled.div<DivDetailsProps>`
  transition: opacity 1s linear;
  opacity: ${({ $transition }) => ($transition ? 1 : 0.5)};
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  @media (max-width: 996px) {
    width: 300px;
  }

  @media (max-width: 660px) {
    width: 400px;
    align-self: center;
  }

  @media (max-width: 569px) {
    width: 220px;
    align-self: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    padding: 2rem;
    min-height: 180px;
    background-color: ${(props) => props.theme['purple-base']};
    gap: 0.8rem;

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${(props) => props.theme['base-white']};
    }

    p {
      font-size: 0.95rem;
      line-height: 1.5;
      color: ${(props) => props.theme['base-white']};
    }
  }
`
