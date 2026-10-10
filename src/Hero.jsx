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

  const [index, setIndex] = useState(0)

  const [sat, setSat] = useState(0)

  const [blur, setBlur] = useState(0)

  const nextPhoto = () => {
    if (index === photos.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const previousPhoto = () => {
    if (index === 0) {
      setIndex(photos.length - 1)
    } else {
      setIndex(index - 1)
    }
  }


  const showColor = () => {
    setSat(0)
  }

  const showBlackAndWhite = () => {
    setSat(-100)
  }

  const moreBlur = () => {
    setBlur(blur + 100)
  }

  const removeBlur = () => {
    setBlur(0)
  }

  const [src, alt, thumb] = heroPhoto(
    photos[index],
    1000,
    600,
    sat,
    descriptions[index]
  )

  return (
    <div>
      <div className="hero">
        <img src={src + "&blur=" + blur} alt={alt} />
      </div>
      <p className="hero-buttons">
        <button onClick={previousPhoto}>Previous Photo</button>
        <button onClick={nextPhoto}>Next Photo</button>
        <button onClick={showColor}>Full Color</button>
        <button onClick={showBlackAndWhite}>Black & White</button>
        <button onClick={moreBlur}>Add Blurr</button>
        <button onClick={removeBlur}>Remove Blur</button>
      </p>
    </div>
  )
}

export default Hero