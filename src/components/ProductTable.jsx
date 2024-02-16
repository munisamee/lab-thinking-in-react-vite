import React, { useState } from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleFilterChange = event => {
    setFilterText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterChange}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;


