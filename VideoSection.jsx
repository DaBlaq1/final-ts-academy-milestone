import videoThumb from '../images/Frame 164.png'

function VideoSection() {
  return (
    <section className="video-section" aria-labelledby="video-title">
      <div className="video-thumb-wrap">
        <img src={videoThumb} alt="Planetary data visualization video thumbnail" />
      </div>

      <div className="video-text">
        <h2 id="video-title">How Planetary Data Helps Us Understand Space</h2>
        <p>
          Planetary science goes beyond images. Comparing{' '}
          <span className="highlight">mass</span>,{' '}
          <span className="highlight">diameter</span>,{' '}
          <span className="highlight">gravity</span>, and{' '}
          <span className="highlight">density</span>, we gain insight into
          how planets form, behave, and interact within the solar system.
        </p>
      </div>
    </section>
  )
}

export default VideoSection
