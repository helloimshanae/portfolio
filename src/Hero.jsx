import { useState } from 'react'
import heroPhoto from './hero-photo.js'
import './hero.css'

function Hero() {
  const photos = [
    "premium_photo-1725356401065-b12922e64ee4",
    "photo-1754403360671-897ee7c537f1",
    "photo-1702116874638-d2996a368a1f",
  ]

  const descriptions = [
    "Metallic Skull with Barbwire",
    "Day of the Dead pink sugar skull",
    "Skull graffiti",
  ]

  const [sat, setSat] = useState(0)

  const showColor = () => {
    setSat(0)
  }

  const showBlackAndWhite = () => {
    setSat(-100)
  }

  const [src, alt, thumb] = heroPhoto(
    photos[0],
    1200,
    500,
    sat,
    descriptions[0]
  )

  return (
    <div>
      <div className="hero">
        <img src={src} alt={alt} />
      </div>
      <p className="hero-buttons">
        <button onClick={showColor}>Color</button>
        <button onClick={showBlackAndWhite}>Black and White</button>
      </p>
    </div>
  )
}

export default Hero