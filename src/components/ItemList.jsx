import React from 'react';
import Item from '../components/Item';

const ItemList = ({ products }) => {
  return (
    <div className="row g-4 justify-content-center">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;