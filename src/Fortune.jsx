import { useState } from "react"

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Fortune() {
  const fortunes = [
    "Keep going - you are closer than you think.",
    "Small steps still move you forward.",
    "You can learn anything one step at a time."
  ]

  const [index, setIndex] = useState(0)

  const newFortune = () => {
    setIndex(randomNumber(0, fortunes.length - 1))
  }

  return (
    <div>
      <p>{fortunes[index]}</p>
      <button onClick={newFortune}>New Fortune</button>
    </div>
  )
}

export default Fortune