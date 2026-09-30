function GreetingCardGeneratorPortfolioCard() {
  let name = "Greeting Card Generator"
  let description = " Wubzys Words of Wonder - A greeting card generator I built in Level 2."
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