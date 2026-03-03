import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 1100px) {
    align-items: center;
  }
`
export const Div1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    max-width: 600px;
    justify-content: center;
    align-items: center;
  }

  h3 {
    align-self: center;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  strong {
    color: black;
  }
`
export const Div2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  box-sizing: border-box;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    max-width: 600px;
  }

  div {
    @media (max-width: 1100px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
      max-width: 300px;
      height: auto;
      border-radius: 6px;
      margin-bottom: 1rem;

      @media (max-width: 1100px) {
        max-width: 400px;
      }

      @media (max-width: 500px) {
        max-width: 300px;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 1rem 2rem;

      p {
        color: ${(props) => props.theme['base-subtitle']};
        line-height: 1.5;
        font-size: 0.9rem;
      }
    }
  }
`
