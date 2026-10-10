function SignupPagePortfolioCard() {
  const name = "Wubzys Fan Club | Signup Page"
  const description = "A clean and simple signup experience I built while learning the foundations of web development."
  const liveUrl = "https://helloimshanae.github.io/signup-page/"
  const repoUrl = "https://github.com/helloimshanae/signup-page"

  return (
    <article className="card-jade">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl} role="button">See it live</a> {" "} 
        <a href={repoUrl} role="button" className="outline">Read the code</a>
      </p>
    </article>
  )
}

export default SignupPagePortfolioCard