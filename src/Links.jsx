function Links() {
  const githubUrl = "https://github.com/helloimshanae"
  const signupUrl = "https://helloimshanae.github.io/signup-page/"
  const greetingCardUrl = "https://helloimshanae.github.io/greeting-card-generator/"
  const quizUrl = "https://helloimshanae.github.io/click-lab/"

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