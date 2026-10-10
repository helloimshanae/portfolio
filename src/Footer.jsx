import heroPhoto from './hero-photo.js'
import './footer.css'

function Footer() {
  const year = new Date().getFullYear()
  const githubUrl = "https://github.com/helloimshanae"
  const [, , thumb] = heroPhoto({
    photo: "premium_photo-1725356401065-b12922e64ee4",
    width: 1200,
    height: 500,
    sat: 0,
    description: "Metallic Skull with Barbwire",
  })
  
  return (
    <footer>
      <p>&copy; {year} helloimshanae</p>
      <p>
        <a href={githubUrl}>Visit my GitHub profile</a>
      </p>
      <img
        src={thumb}
        alt="Small metallic skull with barbwire"
      />
    </footer>
  )
}

export default Footer