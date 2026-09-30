function ClickLabPortfolioCard() {
  let name = "Click Lab"
  let description = "Wubzy's Quizzy Whizzy - A click-based project I built in Level 2."
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