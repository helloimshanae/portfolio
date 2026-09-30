import Header from './Header.jsx'
import About from './About.jsx'
import Greeting from './Greeting.jsx'
import Skills from './Skills.jsx'
import Fortune from './Fortune.jsx'
import GitHubLink from './GitHubLink.jsx'
import ProjectCount from './ProjectCount.jsx'
import Footer from './Footer.jsx'
import SignupPagePortfolioCard from './SignupPagePortfolioCard.jsx'

function App() {
  return (
    <div className="container">
      <Header />
      <Greeting />
      <p>Software developer in training</p>
      <About />
      <Skills />
      <ProjectCount />
      <GitHubLink />
      <Fortune />
      <SignupPagePortfolioCard />
      <Footer />
    </div>
  )
}

export default App