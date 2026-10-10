function GreetingCardGeneratorPortfolioCard() {
  const name = "Wubzys Words of Wonder | Greeting Card Generator"
  const description = "A fun little project where users can create puuurrsonalized greeting cards."
  const liveUrl = "https://helloimshanae.github.io/greeting-card-generator/"
  const repoUrl = "https://github.com/helloimshanae/greeting-card-generator"

  return (
    <article className="card-violet">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl} role="button">See it live</a> {" "}
        <a href={repoUrl} role="button" className="outline">Read the code</a>
      </p>
    </article>
  )
}

export default GreetingCardGeneratorPortfolioCard