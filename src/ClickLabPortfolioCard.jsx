function ClickLabPortfolioCard() {
  let name = "Wubzy's Quizzy Whizzy | Click Lab"
  let description = "A fun cat trivia quiz where you test your cat knowledge, get instant right-or-wrong feedback, hear sound effects and build your score."
  let liveUrl = "https://helloimshanae.github.io/click-lab/"
  let repoUrl = "https://github.com/helloimshanae/click-lab"

  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
    </article>
  )
}

export default ClickLabPortfolioCard