import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
/* const CAT_ENDPOINT_IMAGE = (words) => `https://cataas.com/cat/says/${words}?size=50&color=red&json=true`; */
const CAT_ENDPOINT_IMAGE_PREFIX = 'https://cataas.com';

export const App = () => {
    const [fact, setFact] = useState();
    const [catImage, setCatImage] = useState();

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(response => response.json())
            .then(data => {
                const { fact } = data;
                setFact(fact);
            });
    }, []);

    useEffect(() => {
        if(!fact) return; 
        
        const firstThreeWords = fact.split(' ', 3).join(' ');

        fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
        .then(response => response.json())
        .then((data) => {
            const { url } = data;
            setCatImage(url);
        });
    }, [fact]);

    return (
        <>
            <h1>App</h1>
            {fact && <p>{fact}</p>}
            {catImage && <img src={`${CAT_ENDPOINT_IMAGE_PREFIX}${catImage}`} alt={`Image fetched with first three words of ${fact}`} /> }
        </>
    )
}
