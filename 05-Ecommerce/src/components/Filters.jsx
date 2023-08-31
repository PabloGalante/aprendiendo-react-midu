import './Filters.css';
import { useId } from 'react';
import { useFilters } from '../hooks/useFilters';

export function Filters() {
    const {filters, setFilters} = useFilters();

    const priceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangePrice = (e) => {
        const value = e.target.value;
        setFilters(prevState => ({
            ...prevState,
            price: value
        }));
    };

    return (
        <>
            <section className='filters'>
                <div>
                    <label htmlFor={priceFilterId}>Price </label>
                    <input type='range' id={priceFilterId} min='0' max='2000' onChange={handleChangePrice} value={filters.price} />
                    <span>${filters.price}</span>
                </div>

                <div>
                    <label htmlFor={categoryFilterId}>Category: </label>
                    <select id={categoryFilterId}>
                        <option value='all'>All</option>
                        <option value='home-decoration'>Home Decoration</option>
                        <option value='laptos'>Laptops</option>
                    </select>
                </div>
            </section>
        </>
    )
}