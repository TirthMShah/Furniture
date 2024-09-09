import React, { useState } from 'react';

const FilterComponent = ({ products, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    const filteredProducts = products.filter(product => {
      const price = parseInt(product.price.replace('Rs. ', '').replace(',', ''));
      const matchesName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = (!minPrice || price >= parseInt(minPrice)) && (!maxPrice || price <= parseInt(maxPrice));

      return matchesName && matchesPrice;
    });
    onFilter(filteredProducts);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search by name" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Min price" 
        value={minPrice} 
        onChange={e => setMinPrice(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Max price" 
        value={maxPrice} 
        onChange={e => setMaxPrice(e.target.value)} 
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default FilterComponent;
