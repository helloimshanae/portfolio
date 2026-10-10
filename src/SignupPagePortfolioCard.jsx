function SignupPagePortfolioCard() {
  let name = "Wubzys Fan Club | Signup Page"
  let description = "A clean and simple signup experience I built while learning the foundations of web development."
  let liveUrl = "https://helloimshanae.github.io/signup-page/"
  let repoUrl = "https://github.com/helloimshanae/signup-page"

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