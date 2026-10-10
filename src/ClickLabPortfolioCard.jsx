import { useState } from 'react'

function ClickLabPortfolioCard() {
  const name = "Wubzy's Quizzy Whizzy | Click Lab"
  const description = "A fun cat trivia quiz where you test your cat knowledge, get instant right-or-wrong feedback, hear sound effects and build your score."
  const details = "I built this project to practice JavaScript click events, track quiz scores and give players instant feedback while making learning about cats fun."
  const liveUrl = "https://helloimshanae.github.io/click-lab/"
  const repoUrl = "https://github.com/helloimshanae/click-lab"

  const [likes, setLikes] = useState(
    Number(localStorage.getItem("click-lab-likes"))
  )

  const [open, setOpen] = useState(false)

  const addLike = () => {
    const newLikes = likes + 1
    setLikes(likes + 1)
    localStorage.setItem("click-lab-likes", newLikes)
  }

  const removeLike = () => {
  if (likes > 0) {
    setLikes(likes - 1)
  }
}

  const toggleOpen = () => {
    setOpen(!open)
  }

  let text = description
  if (open) {
    text = description + " " + details
  }

  let label = "Show More"
  if (open) {
    label = "Show Less"
  }

  return (
    <article className="card-yellow">
      <h2>{name}</h2>
      <p>{text}</p>
      <button className="outline" onClick={toggleOpen}>{label}</button> 
      <p>
        <a href={liveUrl} role="button">See it live</a> {" "}
        <a href={repoUrl} role="button" className="outline">Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
      <button onClick={removeLike}>Unlike</button>
    </article>
  )
}

export default ClickLabPortfolioCard