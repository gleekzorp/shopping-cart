import React, { useContext } from 'react';

import ProductsContext from '../contexts/ProductsContext';

export default () => {
  const { productsCount } = useContext(ProductsContext)

  return (
    <div className="nav-wrapper">
      <div className="nav-title">
        Shopping Cart
      </div>
      <div className="nav-total-items">
        Total Items: {productsCount}
      </div>
    </div>
  )
}