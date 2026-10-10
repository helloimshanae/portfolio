import { useState } from 'react'

function SignupPagePortfolioCard() {
  const name = "Wubzys Fan Club | Signup Page"
  const description = "A clean and simple signup experience I built while learning the foundations of web development."
  const liveUrl = "https://helloimshanae.github.io/signup-page/"
  const repoUrl = "https://github.com/helloimshanae/signup-page"

  const [likes, setLikes] = useState(0)

  const addLike = () => {
    setLikes(likes + 1)
  }

  const removeLike = () => {
  if (likes > 0) {
    setLikes(likes - 1)
  }
}

  return (
    <article className="card-jade">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl} role="button">See it live</a> {" "} 
        <a href={repoUrl} role="button" className="outline">Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
      <button onClick={removeLike}>Unlike</button>
    </article>
  )
}

export default SignupPagePortfolioCard