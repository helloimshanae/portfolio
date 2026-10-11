import { useState } from 'react'

function GreetingCardGeneratorPortfolioCard() {
  const project = {
    name: "Wubzys Words of Wonder | Greeting Card Generator",
    description: "A fun little project where users can create puuurrsonalized greeting cards.",
    liveUrl: "https://helloimshanae.github.io/greeting-card-generator/",
    repoUrl: "https://github.com/helloimshanae/greeting-card-generator",
  }

  const [likes, setLikes] = useState(
    Number(localStorage.getItem("greeting-card-likes"))
  )

  const addLike = () => {
    const newLikes = likes + 1
    setLikes(newLikes)
    localStorage.setItem("greeting-card-likes", newLikes)
  }

  const removeLike = () => {
  if (likes > 0) {
    setLikes(likes - 1)
  }
}

  return (
    <article className="card-violet">
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

export default GreetingCardGeneratorPortfolioCard