import { useState } from "react"

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Fortune() {
  const fortunes = [
    "Trust yourself. You're capable of more than you think.",
    "Progress over perfection. Keep showing up for yourself.",
    "Your future self will thank you for what you do today."
  ]

  const [index, setIndex] = useState(0)

  const newFortune = () => {
    setIndex(randomNumber(0, fortunes.length - 1))
  }

  return (
    <div>
      <p>{fortunes[index]}</p>
      <button className="new-fortune" onClick={newFortune}>Another Fortune</button>
    </div>
  )
}

export default Fortune