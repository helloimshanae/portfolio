import { useState } from 'react'

function ProjectCard({ project}) {

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

  let text = project.description
  if (open) {
    text = project.description + " " + project.details
  }

  let label = "Show More"
  if (open) {
    label = "Show Less"
  }

  return (
    <article className="card-yellow">
      <h2>{project.name}</h2>
      <p>Status: {project.status}</p>
      <p>{text}</p>
      <button className="outline" onClick={toggleOpen}>{label}</button> 
      <p>
        <a href={project.liveUrl} role="button">See it live</a>
        <a href={project.repoUrl} role="button" className="outline">Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
      <button onClick={removeLike}>Unlike</button>
    </article>
  )
}

export default ProjectCard