import { useState } from 'react'

function SignupPagePortfolioCard() {
  const project = {
    name: "Wubzys Fan Club | Signup Page",
    description: "A clean and simple signup experience I built while learning the foundations of web development.",
    liveUrl: "https://helloimshanae.github.io/signup-page/",
    repoUrl: "https://github.com/helloimshanae/signup-page",
  }

  const [likes, setLikes] = useState(
    Number(localStorage.getItem("signup-page-likes"))
  )

  const addLike = () => {
    const newLikes = likes + 1
    setLikes(newLikes)
    localStorage.setItem("signup-page-likes", newLikes)
  }

  const removeLike = () => {
  if (likes > 0) {
    setLikes(likes - 1)
  }
}

  return (
    <article className="card-jade">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>
        <a href={project.liveUrl} role="button">See it live</a>
        <a href={project.repoUrl} role="button" className="outline">Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
      <button onClick={removeLike}>Unlike</button>
    </article>
  )
}

export default SignupPagePortfolioCard