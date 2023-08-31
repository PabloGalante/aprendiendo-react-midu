import './Products.css';
import { AddToCartIcon } from './Icons';

export function Products({ products }) {
    return (
        <main className='products'>
            <ul>
                {
                    products.slice(0,15).map((product) => (
                            <li key={product.id}>
                                <img src={product.thumbnail} alt={product.description} />
                                <div>
                                    {product.title} - <strong>$ {product.price}</strong>
                                </div>
                                <AddToCartIcon />
                            </li>
                    ))
                }
            </ul>
        </main>
    )
}