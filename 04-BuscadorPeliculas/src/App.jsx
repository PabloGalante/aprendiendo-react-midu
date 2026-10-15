import './App.css';

function App() {
  return (
    <>
      <div className='appDiv'>
        <header>
          <h1>Buscador de Peliculas</h1>
          <form className='form'>
            <input
              name='query'
              placeholder='Búsqueda desactivada por seguridad'
              aria-describedby='search-notice'
              disabled
            />
            <button type='submit' disabled>Search</button>
          </form>
        </header>

        <main className='movies-main'>
          <p id='search-notice' role='status'>
            La búsqueda está temporalmente desactivada hasta configurar un backend seguro.
          </p>
        </main>
      </div>
    </>
  )
}

export default App
