import React, { useContext } from 'react';

import ProductsContext from '../contexts/ProductsContext';
import { totalProductsCount } from '../helpers/productsHelper';

export default () => {
  const { products } = useContext(ProductsContext)

  return (
    <div className="nav-wrapper">
      <div className="nav-title">
        Shopping Cart
      </div>
      <div className="nav-total-items">
        {/* TODO: Inject Number of items through props or context */}
        Total Items: {totalProductsCount(products)}
      </div>
    </div>
  )
}