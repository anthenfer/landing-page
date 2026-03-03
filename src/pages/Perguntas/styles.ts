import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 4rem;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  background: ${(props) => props.theme['base-background-accordion']};

  h2 {
    margin-top: 3rem;
  }
`
