// IMPORT PAGE COMPONENTS
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Greeting from './Greeting.jsx'
import Skills from './Skills.jsx'
import Fortune from './Fortune.jsx'
import GitHubLink from './GitHubLink.jsx'
import ProjectCount from './ProjectCount.jsx'
import Footer from './Footer.jsx'
import Links from './Links.jsx'
import SignupPagePortfolioCard from './SignupPagePortfolioCard.jsx'
import GreetingCardGeneratorPortfolioCard from './GreetingCardGeneratorPortfolioCard.jsx'
import ClickLabPortfolioCard from './ClickLabPortfolioCard.jsx'

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Greeting />
      <p>Software developer in training - building one project at a time.</p>
      <Links />
      <About />
      <Skills />
      <ProjectCount />
      <GitHubLink />
      <Fortune />

      <div className="grid">
        <SignupPagePortfolioCard />
        <GreetingCardGeneratorPortfolioCard />
        <ClickLabPortfolioCard />
      </div>

      <Footer />
    </div>
  )
}

export default App