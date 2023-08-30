import { useEffect, useState } from 'react';

export function useSearch() {
    const [search, setSearch] = useState('');

    useEffect(() => {
      if(search === '') console.log('Empty')
  
      if(search.match(/^\d+$/)) console.log('No number allowed')
  
      if(search.length > 0 && search.length < 3) console.log('Search should be more than 3 characters')
    }, [search]);
    
    return { search, setSearch }
  }