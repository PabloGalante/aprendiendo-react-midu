import './App.css';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import Movies from './components/Movies';

function App() {

  const { search, setSearch } = useSearch();
  const { movies: movieObject, getMovies } = useMovies({ search });

  const handleChange = (event) => {
    const searchQuery = event.target.value;
    setSearch(searchQuery);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
  }

  return (
    <>
      <div className='appDiv'>
        <header>
          <h1>Buscador de Peliculas</h1>
          <form className='form' onSubmit={handleSubmit}>
            <input name={'query'} onChange={handleChange} placeholder='Harry Potter, Shine, ...' />
            <button type='submit'>Search</button>
          </form>
        </header>

        <main className='movies-main'>
          <Movies movies={movieObject} search={search} />
        </main>
      </div>
    </>
  )
}

export default App
