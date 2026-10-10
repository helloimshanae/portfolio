function ClickLabPortfolioCard() {
  const name = "Wubzy's Quizzy Whizzy | Click Lab"
  const description = "A fun cat trivia quiz where you test your cat knowledge, get instant right-or-wrong feedback, hear sound effects and build your score."
  const liveUrl = "https://helloimshanae.github.io/click-lab/"
  const repoUrl = "https://github.com/helloimshanae/click-lab"

  return (
    <article className="card-yellow">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl} role="button">See it live</a> {" "}
        <a href={repoUrl} role="button" className="outline">Read the code</a>
      </p>
    </article>
  )
}

export default ClickLabPortfolioCard