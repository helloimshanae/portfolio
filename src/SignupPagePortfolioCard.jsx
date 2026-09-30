function SignupPagePortfolioCard() {
  let name = "Signup Page"
  let description = "Wubzys Fan Club signup page I built in Level 2."
  let liveUrl = "https://helloimshanae.github.io/signup-page/"
  let repoUrl = "https://github.com/helloimshanae/signup-page"

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

export default SignupPagePortfolioCard