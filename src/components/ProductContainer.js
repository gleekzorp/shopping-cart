import React, { useContext } from 'react';
import Product from './Product';
import ProductsContext from '../contexts/ProductsContext';

export default () => {
  const { products } = useContext(ProductsContext)

  return (
    <div className="product-container">
      {products.map(product => {
        return <Product key={product.index} product={product} />
      })}
    </div>
  )
}