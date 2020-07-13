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
