import styled from 'styled-components'

export const Whats = styled.span`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: #2eb838;
  color: white;
  border-radius: 100%;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  a {
    text-decoration: none;
    color: white;
  }

  &:hover {
    padding: 1.2rem;
  }
`
