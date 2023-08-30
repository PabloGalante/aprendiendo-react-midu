function ListOfMovies({ movies }) {
    return (        
        <ul className='movies-ul'>
            {
                movies.map(movie => (
                    <li key={movie.imdbID}>
                    <img src={movie.poster} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    </li>
                ))
            }
        </ul>
    )
}

function NoMovies() {
    return (
        <p>noResult</p>
    )
}

export default function Movies({ movies, noResult }) {
    const hasMovies = movies?.length > 0;

    return (
        hasMovies ? 
            <ListOfMovies movies={movies} /> 
            : <NoMovies noResult={noResult} />
    )
}