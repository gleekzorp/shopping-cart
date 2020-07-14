import React, { useContext } from 'react';

import ProductsContext from '../contexts/ProductsContext';
import { cartTotal, taxedTotal } from '../helpers/productsHelper';

export default () => {
  const { products, taxRate } = useContext(ProductsContext)

  return (
    <div className="summary-container">
      <div className="total summary-item">
        Total: ${cartTotal(products)}
      </div>
      <div className="tax-rate summary-item">
        Tax Rate: {taxRate}%
      </div>
      <div className="taxed-total summary-item">
        Taxed Total: {taxedTotal(taxRate, cartTotal(products))}
      </div>
    </div>
  )
}