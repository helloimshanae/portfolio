function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Fortune() {
  const fortunes = [
    "Keep going - you are closer than you think.",
    "Small steps still move you forward.",
    "You can learn anything one step at a time."
  ]

  const index = randomNumber(0, fortunes.length - 1)

  return <p>{fortunes[index]}</p>
}

export default Fortune