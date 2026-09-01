import { Link } from 'react-router-dom'
import { getImageUrl } from '../api/tmdbAPI'
import './MovieCard.css'

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <div className="movie-poster">
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          onError={(e) => {
            e.currentTarget.src = '/no-image.png'
          }}
        />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">
          {new Date(movie.release_date).getFullYear() || 'N/A'}
        </p>
        <div className="movie-rating">
         {movie.vote_average.toFixed(1)}/10
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
