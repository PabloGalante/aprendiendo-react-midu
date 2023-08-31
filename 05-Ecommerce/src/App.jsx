import './App.css';
import { Header } from './components/Headers';
import { Products } from './components/Products';
import { products as initialProducts } from './mocks/products.json';
import { useState } from 'react';
import { useFilters } from './hooks/useFilters';

function App() {
  const [products, setProducts] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <Products products={ filteredProducts } />
    </>
  )
}

export default App
