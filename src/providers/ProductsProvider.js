import React, { useState, useEffect } from 'react';
import ProductsContext from '../contexts/ProductsContext';
import { generateRandomListOfProducts } from '../helpers/productsHelper';

export default (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(generateRandomListOfProducts(5))
  }, [])

  const stateValues = {
    products
  }

  return (
    <ProductsContext.Provider value={stateValues}>
      {props.children}
    </ProductsContext.Provider>
  )
}