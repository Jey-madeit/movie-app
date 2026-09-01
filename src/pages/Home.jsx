import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import { searchMovies, getPopularMovies } from '../api/tmdbAPI'
import './pages.css'

function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoading(true)
      const data = await getPopularMovies()
      setMovies(data)
      setLoading(false)
    }
    loadPopularMovies()
  }, [])

  const handleSearch = async (query) => {
    setLoading(true)
    const results = await searchMovies(query)
    setMovies(results)
    setLoading(false)
  }

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to MovieDB</h1>
        <p>Search for your favorite movies</p>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="content">
        <h2>{movies.length > 0 ? 'Movies' : 'Popular Movies'}</h2>
        <MovieList movies={movies} loading={loading} />
      </div>
    </div>
  )
}

export default Home
