import styled from 'styled-components'

export const Container = styled.main`
  margin: 50px auto 0 auto;
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
`

export const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 600px;
  padding-top: 1rem;

  @media (max-width: 1200px) {
    max-width: 900px;
    justify-content: center;
    gap: 2rem;
  }

  @media (max-width: 996px) {
    flex-direction: column-reverse;
    text-align: center;
    height: 1000px;
    padding-top: 0;

    img {
      height: 60%;
    }

    @media (max-width: 660px) {
      img {
        height: 50%;
      }
    }

    @media (max-width: 569px) {
      img {
        height: 35%;
      }
    }

    @media (max-width: 570px) {
      max-width: 50%;
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
    }
  }

  img {
    max-height: 100%;
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
  gap: 0.3rem;

  li {
    list-style-type: none;
    text-align: center;

    a {
      padding: 1rem 0.8rem 0.9rem;
    }
  }

  @media (max-width: 996px) {
    justify-content: center;
  }
`
