import MovieCard from './MovieCard'
import './MovieList.css'

function MovieList({ movies, loading }) {
  if (loading) {
    return <div className="loading">Loading movies...</div>
  }

  if (!movies || movies.length === 0) {
    return <div className="no-results">No movies found. Try searching for something!</div>
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
