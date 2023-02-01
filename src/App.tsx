
import './cssvariables/variables.css'
import './styles/App.css'
import Header from './components/Header'
import Main from './components/Main'
import styled from '@emotion/styled'
import Brand from './components/Brand'
import Team from './components/Team'
import AboutCompany from './components/AboutCompany'
import Footer from './components/Footer'

const AppContainer = styled.div`
display: flex;
flex-direction: column;
background: rgb(0,3,4);
background: linear-gradient(90deg, rgba(0,3,4,1) 0%, rgba(2,18,25,1) 40%, rgba(7,18,30,1) 71%);
`   
function App() {
  
  return (    
    <AppContainer>
      <Header/>
      <Main/>
      <Brand/>
      <Team/>
      <AboutCompany/>
      <Footer/>
    </AppContainer>
  )
}

export default App
