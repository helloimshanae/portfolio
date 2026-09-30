import Header from './Header.jsx'
import About from './About.jsx'
import Greeting from './Greeting.jsx'
import Skills from './Skills.jsx'
import Fortune from './Fortune.jsx'
import GitHubLink from './GitHubLink.jsx'
import ProjectCount from './ProjectCount.jsx'
import Footer from './Footer.jsx'

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
      <Footer />
    </div>
  )
}

export default App