import React from 'react';

function FilteredProducts({ filteredProducts }) {
  return (
    <div className="mt-8">
      <h2 className="text-center text-white text-xl font-bold mb-4">Filtered Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((product, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg text-white">
            <h3 className="text-xl font-bold">{product.title}</h3>
            <p className="text-gray-300">Price: {product.price}</p>
            <p className="text-gray-300">Category: {product.category}</p>
            <p className="text-gray-300">Description: {product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilteredProducts;
