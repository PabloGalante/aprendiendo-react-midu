import { FiltersContext } from '../contexts/filters';
import { useContext } from 'react';

export function useFilters() {
    const {filters, setFilters} = useContext(FiltersContext);
  
    const filterProducts = (products) => {
        return products.filter(product => {
          return (
            product.price >= filters.price && 
            (
              filters.category === 'all' || product.category === filters.category
            )
          )
        })
    };
  
    return { filterProducts, filters, setFilters };
}