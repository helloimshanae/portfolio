
function PhotoControls({ onNext, onPrevious, onColor, onBlackAndWhite }) {
  return (
    <p className="hero-buttons">
      <button onClick={onPrevious}>← Previous</button>
      <button onClick={onNext}>Next →</button>
      <button onClick={onColor}>In Color</button>
      <button onClick={onBlackAndWhite}>Black &amp; White</button>
    </p>
  )
}

export default PhotoControls
