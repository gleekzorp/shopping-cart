export const roll = (min, max, floatFlag) => {
  let r = Math.random() * (max - min) + min
  return floatFlag ? r : Math.floor(r)
}


export const possibleProducts = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🍅", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶", "🥒", "🥬", "🥦"]


export const generateRandomListOfProducts = (numOfProducts, listOfProducts = possibleProducts) => {
  const products = [...Array(numOfProducts)].map((_, i) => {
    return {
      index: i,
      title: listOfProducts[roll(0, listOfProducts.length)],
      price: roll(2, 10, 1).toFixed(2),
      count: roll(1, 6)
    }
  })
  return products
}


export const calculateProductsCount = (products) => {
  if (products.length > 0) {
    const count = products.reduce((accumulator, product) => {
      console.log(typeof product.count)
      return accumulator + product.count
    }, 0)
    return count
  }
  return 0
}


export const calculateCartTotal = (products) => {
  if (products.length > 0) {
    const count = products.reduce((accumulator, product) => {
      console.log(typeof product.count)
      return accumulator + parseFloat(product.price) * product.count
    }, 0).toFixed(2)
    // return parseFloat(count)
    return count
  }
  return 0
}


// export const randomTaxRate = parseFloat(roll(5, 9, 1).toFixed(1))
export const randomTaxRate = roll(5, 9, 1).toFixed(1)


export const calculateTaxedTotal = (taxRate, cartTotal) => {
  // return parseFloat((taxRate / 100 * cartTotal + parseFloat(cartTotal)).toFixed(2))
  return (taxRate / 100 * cartTotal + parseFloat(cartTotal)).toFixed(2)
}