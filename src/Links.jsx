function Links() {
  let githubUrl = "https://github.com/helloimshanae"
  let signupUrl = "https://helloimshanae.github.io/signup-page/"
  let greetingCardUrl = "https://helloimshanae.github.io/greeting-card-generator/"
  let quizUrl = "https://helloimshanae.github.io/click-lab/"

  return (
    <p>
      <a href={githubUrl}>GitHub</a> ·{" "}
      <a href={signupUrl}>Wubzys Fan Club</a> ·{" "}
      <a href={greetingCardUrl}>Wubzys Words of Wonder</a> ·{" "}
      <a href={quizUrl}>Wubzy's Quizzy Wizzy</a>
    </p>
  )
}

export default Links