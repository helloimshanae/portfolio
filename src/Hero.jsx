import { useState } from 'react'
import heroPhoto from './hero-photo.js'
import './hero.css'
import PhotoControls from './PhotoControls.jsx'

function Hero() {

  const photos = [
    { id: "premium_photo-1725356401065-b12922e64ee4", description: "Metallic Skull with Barbwire" },
    { id: "photo-1754403360671-897ee7c537f1", description: "Day of the Dead pink sugar skull" },
    { id: "photo-1702116874638-d2996a368a1f", description: "Skull graffiti" },
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

  const { id, description } = photos[index]

  const [src, alt, thumb] = heroPhoto({
    photo: id,
    width: 1000,
    height: 600,
    sat,
    blur,
    description,
  })

  return (
    <div>
      <div className="hero">
        <img src={src} alt={alt} />
      </div>
      <PhotoControls
        onNext={nextPhoto}
        onPrevious={previousPhoto}
        onColor={showColor}
        onBlackAndWhite={showBlackAndWhite}
      />

      <p className="hero-buttons">
        <button onClick={moreBlur}>Add Blurr</button>
        <button onClick={removeBlur}>Remove Blur</button>
      </p>
    </div>
  )
}

export default Hero