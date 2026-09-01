# Movie Search App

A simple React movie search application with routing and integration with The Movie Database (TMDB) API.

## Features

- 🔍 Search movies by title
- 🎬 View popular movies on the home page
- 📺 Detailed movie information including cast, budget, revenue
- 🎥 Movie backdrop and poster images
- 🔗 Client-side routing with React Router
- 📱 Responsive design

## Setup Instructions

### 1. Get a TMDB API Key

1. Visit [The Movie Database (TMDB)](https://www.themoviedb.org/)
2. Sign up for a free account
3. Go to Settings > API
4. Copy your API Key

### 2. Add API Key to the Project

1. Open `src/api/tmdbAPI.js`
2. Replace `'YOUR_TMDB_API_KEY_HERE'` with your actual API key:

```javascript
const API_KEY = 'your_actual_api_key_here'
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Application

```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Project Structure

```
src/
├── api/
│   └── tmdbAPI.js           # API calls and utility functions
├── components/
│   ├── Header.jsx           # Navigation header
│   ├── Header.css
│   ├── SearchBar.jsx        # Search input form
│   ├── SearchBar.css
│   ├── MovieCard.jsx        # Individual movie card
│   ├── MovieCard.css
│   ├── MovieList.jsx        # Grid of movies
│   └── MovieList.css
├── pages/
│   ├── Home.jsx             # Home/search page
│   ├── MovieDetails.jsx     # Movie details page
│   ├── NotFound.jsx         # 404 page
│   └── pages.css
├── App.jsx                  # Main app with routing
├── App.css
├── main.jsx
└── index.css
```

## Tech Stack

- React 19
- React Router v6
- Vite
- The Movie Database API

## Available Routes

- `/` - Home page with search and popular movies
- `/movie/:id` - Detailed view of a specific movie
- `*` - 404 Not Found page

## Usage

1. **Search for movies**: Use the search bar on the home page
2. **View popular movies**: Browse the grid of popular movies on initial load
3. **View details**: Click on any movie card to see detailed information
4. **Browse cast**: See the first 5 cast members on the details page

## Build for Production

```bash
npm run build
```

## Notes

- The app uses the free TMDB API tier
- Some movies might not have poster images or cast information
- All data is fetched directly from the TMDB API in real-time
