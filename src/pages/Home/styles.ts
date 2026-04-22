import styled from 'styled-components'

export const Container = styled.main`
  margin: 0 auto;
  padding-top: 90px;
  background-color: ${(props) => props.theme['blue-home']};
  color: ${(props) => props.theme['base-white']};

  h1 {
    font-size: 2.2rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 100;
    line-height: 1.3;
  }

  @media (max-width: 996px) {
    padding-top: 120px;
  }

  @media (max-width: 569px) {
    padding-top: 130px;
  }
`

export const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  min-height: 600px;
  padding: 1rem 1.5rem 3rem;

  @media (max-width: 1200px) {
    max-width: 900px;
    justify-content: center;
    gap: 2rem;
  }

  @media (max-width: 996px) {
    flex-direction: column-reverse;
    text-align: center;
    height: auto;
    min-height: unset;
    padding: 1rem 1.5rem 3rem;
    gap: 2rem;

    img {
      width: 100%;
      max-width: 420px;
      height: auto;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: 996px) {
      align-items: center;
    }

    p {
      width: 80%;

      @media (max-width: 996px) {
        width: 100%;
        max-width: 420px;
      }
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    text-decoration: none;
    border: 1px transparent black;
    border-radius: 0.5rem;
    padding: 1rem 0.5rem;
    width: 250px;
    font-weight: 700;
    background-color: ${(props) => props.theme['base-nav']};
    color: ${(props) => props.theme['base-white']};
    text-align: center;
    transition: 0.3s all ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme['base-white']};
      color: ${(props) => props.theme['base-nav']};
    }
  }
`

export const Div2 = styled.ul`
  display: flex;
  gap: 0.6rem;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;

  li {
    list-style-type: none;
    text-align: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      padding: 0;
      border-radius: 0.5rem;
    }
  }

  @media (max-width: 996px) {
    justify-content: center;
  }
`
