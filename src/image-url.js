const imageUrl = (width, height, sat = 0) =>
  "https://plus.unsplash.com/premium_photo-1725356401065-b12922e64ee4?w=" +
  width +
  "&h=" +
  height +
  "&fit=crop&auto=format&sat=" +
  sat

export default imageUrl