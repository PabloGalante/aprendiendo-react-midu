import { useCatImageUrl } from './hooks/useCatImageUrl';
import { useCatFact } from './hooks/useCatFact';

export const App = () => {
    const { fact, refreshFact } = useCatFact();
    const { catImage } = useCatImageUrl({ fact });


    const handleClick = () => {
        refreshFact();
    };

    return (
        <>
            <main style={{display:'flex', placeItems: 'center', flexDirection:'column', gap:'15px'}}>                
                <h1>App</h1>
                {fact && <p>{fact}</p>}
                {catImage && <img src={catImage} alt={`Image fetched with first three words of ${fact}`} /> }
                <button onClick={handleClick}>Generate New Fact</button>
            </main>
        </>
    )
}
