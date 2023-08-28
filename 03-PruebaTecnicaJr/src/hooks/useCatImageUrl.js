import { useState, useEffect  } from "react";

const CAT_ENDPOINT_IMAGE_PREFIX = 'https://cataas.com';

export function useCatImageUrl({ fact }) {
    const [catImage, setCatImage] = useState();

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

    return { catImage: `${CAT_ENDPOINT_IMAGE_PREFIX}${catImage}` };
};