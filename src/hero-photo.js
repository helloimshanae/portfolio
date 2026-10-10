import imageUrl from './image-url.js'

const heroPhoto = (photo, width, height, sat, description) => {
  const src = imageUrl(photo, width, height, sat)
  const alt = description
  const thumb = imageUrl(photo, 200, 125, sat)

  return [src, alt, thumb]
}

export default heroPhoto