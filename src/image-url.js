const imageUrl = (photo, width, height, sat = 0) => {
const baseUrl = photo.startsWith("premium_photo-")
? "https://plus.unsplash.com/"
: "https://images.unsplash.com/"

return (
baseUrl +
photo +
"?w=" +
width +
"&h=" +
height +
"&fit=crop&auto=format&sat=" +
sat
)
}

export default imageUrl
