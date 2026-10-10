import { useState } from 'react'

function GreetingCardGeneratorPortfolioCard() {
  const name = "Wubzys Words of Wonder | Greeting Card Generator"
  const description = "A fun little project where users can create puuurrsonalized greeting cards."
  const liveUrl = "https://helloimshanae.github.io/greeting-card-generator/"
  const repoUrl = "https://github.com/helloimshanae/greeting-card-generator"

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
    <article className="card-violet">
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

export default GreetingCardGeneratorPortfolioCard