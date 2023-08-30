import { useState, useRef } from 'react';

const API_KEY = '406137d7';
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

export function useMovies({ search }) {
    const [fetchedMovies, setFetchedMovies] = useState([]);
    const movies = fetchedMovies.Search;
    const previousSearch = useRef(search);
  
    const movieObject = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }));

    const getMovies = () => {
      if(previousSearch.current === search) return;

      if(search) {
        previousSearch.current = search;

        fetch(`${API_URL}${search}`)
          .then(res => res.json())
          .then(json => {
            setFetchedMovies(json);
          })
      }
    }
  
    return { movies: movieObject, getMovies };
  }