
import heroPhoto from './hero-photo.js'
import './hero.css'

function Hero() {
  const [src, alt, thumb] = heroPhoto(600, 250, "Metallic Skull with Barbwire")

  return (
    <div className="hero">
      <img src={src} alt={alt} />
    </div>
  )
}

export default Hero