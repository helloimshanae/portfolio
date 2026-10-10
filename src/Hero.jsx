import { useState } from 'react'
import heroPhoto from './hero-photo.js'
import './hero.css'

function Hero() {
  const [sat, setSat] = useState(0)

  const showColor = () => {
    setSat(0)
  }

  const showBlackAndWhite = () => {
    setSat(-100)
  }

  const [src, alt, thumb] = heroPhoto(600, 250, "Metallic Skull with Barbwire", sat)

  return (
    <div>
      <div className="hero">
        <img src={src} alt={alt} />
      </div>
      <p>
        <button onClick={showColor}>Color</button>
        &nbsp;
        <button onClick={showBlackAndWhite}>Black and White</button>
      </p>
    </div>
  )
}

export default Hero