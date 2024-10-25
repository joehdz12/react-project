
import React from 'react';
import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1 className='display-4'>{greeting}</h1>
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;