
function PhotoControls({ onNext, onPrevious, onColor, onBlackAndWhite }) {
  return (
    <p className="hero-buttons">
      <button onClick={onPrevious}>Previous Photo</button>
      <button onClick={onNext}>Next Photo</button>
      <button onClick={onColor}>Full Color</button>
      <button onClick={onBlackAndWhite}>Black &amp; White</button>
    </p>
  )
}

export default PhotoControls
