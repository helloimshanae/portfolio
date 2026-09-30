function GreetingCardGeneratorPortfolioCard() {
  let name = "Wubzys Words of Wonder | Greeting Card Generator"
  let description = "A fun little project where users can create puuurrsonalized greeting cards."
  let liveUrl = "https://helloimshanae.github.io/greeting-card-generator/"
  let repoUrl = "https://github.com/helloimshanae/greeting-card-generator"

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

export default GreetingCardGeneratorPortfolioCard