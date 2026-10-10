const imageUrl = (photo, width, height, sat = 0) =>
  "https://plus.unsplash.com/" +
  photo +
  "?w=" +
  width +
  "&h=" +
  height +
  "&fit=crop&auto=format&sat=" +
  sat

export default imageUrl