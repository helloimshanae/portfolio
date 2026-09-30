import Header from './Header.jsx'
import About from './About.jsx'

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Fortune() {
  let fortunes = [
    "Keep going - you are closer than you think.",
    "Small steps still move you forward.",
    "You can learn anything one step at a time."
  ]

  let index = randomNumber(0, fortunes.length - 1)

  return <p>{fortunes[index]}</p>
}

function GitHubLink() {
  let url = "https://github.com/helloimshanae"
  let label = "GitHub Profile @helloimshanae"

  return <a href={url}>{label}</a>
}

function Footer() {
  let year = new Date().getFullYear()
  return <p>&copy; {year} helloimshanae</p>
}

function App() {
  return (
    <div>
      <Header />
      <p>Software developer in training</p>
      <About />
      <GitHubLink />
      <Fortune />
      <Footer />
    </div>
  )
}

export default App