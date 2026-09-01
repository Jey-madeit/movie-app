const API_KEY = '94f65fd441f472f4129295d06ff19c82' // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

// You can get a free API key from: https://www.themoviedb.org/settings/api

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`
    )
    if (!response.ok) throw new Error('Failed to fetch')
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error searching movies:', error)
    return []
  }
}

export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`
    )
    if (!response.ok) throw new Error('Failed to fetch')
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error fetching popular movies:', error)
    return []
  }
}

export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`
    )
    if (!response.ok) throw new Error('Failed to fetch')
    return await response.json()
  } catch (error) {
    console.error('Error fetching movie details:', error)
    return null
  }
}

export const getImageUrl = (posterPath) => {
  return posterPath ? `${IMAGE_BASE_URL}${posterPath}` : '/no-image.png'
}
