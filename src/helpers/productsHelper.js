export const roll = (min, max, floatFlag) => {
  let r = Math.random() * (max - min) + min
  return floatFlag ? r : Math.floor(r)
}

export const possibleProducts = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🍅", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶", "🥒", "🥬", "🥦"]

export const generateRandomListOfProducts = (numOfProducts) => {
  const products = [...Array(numOfProducts)].map((_, i) => {
    return {
      index: i,
      title: possibleProducts[roll(0, possibleProducts.length)],
      price: roll(2, 10, 1).toFixed(2),
      count: roll(1, 6)
    }
  })
  return products
}

export const totalProductsCount = (products) => {
  if (products.length > 0) {
    const count = products.reduce((accumulator, product) => {
      console.log(typeof product.count)
      return accumulator + product.count
    }, 0)
    return count
  }
  return 0
}

export const cartTotal = (products) => {
  if (products.length > 0) {
    const count = products.reduce((accumulator, product) => {
      console.log(typeof product.count)
      return accumulator + parseFloat(product.price) * product.count
    }, 0).toFixed(2)
    return count
  }
  return 0
}

export const taxRate = roll(5, 9, 1).toFixed(1)

export const taxedTotal = (taxRate, cartTotal) => {
  return (taxRate / 100 * cartTotal + parseFloat(cartTotal)).toFixed(2)
}