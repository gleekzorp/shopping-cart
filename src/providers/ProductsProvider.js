import React, { useState, useEffect } from 'react';
import ProductsContext from '../contexts/ProductsContext';
import {
  generateRandomListOfProducts,
  randomTaxRate,
  calculateProductsCount,
  calculateCartTotal,
  calculateTaxedTotal,
  calculateTotalWeight
} from '../helpers/productsHelper';

export default (props) => {
  const [products, setProducts] = useState([]);
  const [productsCount, setProductsCount] = useState(0)
  const [taxRate, setTaxRate] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const [taxedTotal, setTaxedTotal] = useState(0)
  const [totalWeight, setTotalWeight] = useState(0)

  useEffect(() => {
    setProducts(generateRandomListOfProducts(5))
  }, [])

  useEffect(() => {
    setProductsCount(calculateProductsCount(products))
    setTaxRate(randomTaxRate)
    setCartTotal(calculateCartTotal(products))
    setTotalWeight(calculateTotalWeight(products))
  }, [products])

  useEffect(() => {
    setTaxedTotal(calculateTaxedTotal(taxRate, cartTotal))
  }, [cartTotal, taxRate])

  const stateValues = {
    products,
    productsCount,
    cartTotal,
    taxRate,
    taxedTotal,
    totalWeight
  }

  return (
    <ProductsContext.Provider value={stateValues}>
      {props.children}
    </ProductsContext.Provider>
  )
}