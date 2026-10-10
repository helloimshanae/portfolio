const imageUrl = (photo, width, height, sat = 0) =>
(photo.startsWith("premium_photo-")
? "https://plus.unsplash.com/"
: "https://images.unsplash.com/") +
photo +
"?w=" +
width +
"&h=" +
height +
"&fit=crop&auto=format&sat=" +
sat

export default imageUrl
