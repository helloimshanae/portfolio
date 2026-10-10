import imageUrl from './image-url.js'

const heroPhoto = ({ photo, width, height, sat = 0, blur = 0, description }) => {
  const src = imageUrl({ photo, width, height, sat, blur })
  const alt = description
  const thumb = imageUrl({ photo, width: 250, height: 150, sat, blur })

  return [src, alt, thumb]
}

export default heroPhoto