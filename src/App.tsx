import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './global'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { WhatsApp } from './components/whats'
import { Servicos } from './pages/Serviços'
import { Why } from './pages/Why'
import { Perguntas } from './pages/Perguntas'
import { Footer } from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <WhatsApp />
      <Servicos />
      <Why />
      <Perguntas />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
