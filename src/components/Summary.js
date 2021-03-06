import React, { useContext } from 'react';

import ProductsContext from '../contexts/ProductsContext';

export default () => {
  const { taxRate, cartTotal, taxedTotal, totalWeight } = useContext(ProductsContext)

  return (
    <div className="summary-container">
      <div className="total summary-item">
        Total: ${cartTotal}
      </div>
      <div className="tax-rate summary-item">
        Tax Rate: {taxRate}%
      </div>
      <div className="taxed-total summary-item">
        Taxed Total: ${taxedTotal}
      </div>
      <div className="weight-total summary-item">
        Total Weight: {totalWeight}oz
      </div>
    </div>
  )
}