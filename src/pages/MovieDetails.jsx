import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getMovieDetails, getImageUrl } from '../api/tmdbAPI'
import './pages.css'

function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMovieDetails = async () => {
      setLoading(true)
      const data = await getMovieDetails(id)
      setMovie(data)
      setLoading(false)
    }
    loadMovieDetails()
  }, [id])

  if (loading) {
    return <div className="loading-page">Loading...</div>
  }

  if (!movie) {
    return (
      <div className="error-page">
        <p>Movie not found</p>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="movie-details-page">
      <Link to="/" className="back-btn">← Back to Movies</Link>
      
      <div className="details-container">
        <div className="poster-section">
          <img
            src={getImageUrl(movie.poster_path)}
            alt={movie.title}
            className="detail-poster"
          />
        </div>

        <div className="info-section">
          <h1>{movie.title}</h1>
          
          <div className="meta-info">
            <span className="rating">⭐ {movie.vote_average.toFixed(1)}/10</span>
            <span className="release-date">
              📅 {new Date(movie.release_date).toLocaleDateString()}
            </span>
            <span className="runtime">⏱️ {movie.runtime} min</span>
          </div>

          {movie.genres && movie.genres.length > 0 && (
            <div className="genres">
              <strong>Genres:</strong>
              {movie.genres.map((g) => (
                <span key={g.id} className="genre-tag">
                  {g.name}
                </span>
              ))}
            </div>
          )}

          <div className="overview">
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>

          {movie.budget > 0 && (
            <div className="budget">
              <strong>Budget:</strong> ${movie.budget.toLocaleString()}
            </div>
          )}

          {movie.revenue > 0 && (
            <div className="revenue">
              <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
            </div>
          )}

          {movie.credits?.cast && movie.credits.cast.length > 0 && (
            <div className="cast-section">
              <h2>Cast</h2>
              <div className="cast-list">
                {movie.credits.cast.slice(0, 5).map((actor) => (
                  <div key={actor.id} className="cast-member">
                    <img
                      src={
                        actor.profile_path
                          ? getImageUrl(actor.profile_path)
                          : '/no-image.png'
                      }
                      alt={actor.name}
                    />
                    <p className="actor-name">{actor.name}</p>
                    <p className="character-name">{actor.character}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {movie.backdrop_path && (
        <div className="backdrop">
          <img src={getImageUrl(movie.backdrop_path)} alt={movie.title} />
        </div>
      )}
    </div>
  )
}

export default MovieDetails
