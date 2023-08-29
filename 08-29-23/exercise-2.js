/**
 * Elabore um pseudocódigo que receba um produto e seja capaz de
 * fornecer 25% de desconto sobre ele.
 */

const apply25PercentDiscount = (price) => {
  if(typeof num !== 'number') throw new Error(`${JSON.stringify(num)} is not a number`)
  return price - (price * 25 / 100)
}

console.log(apply25PercentDiscount(100)) // 75
console.log(apply25PercentDiscount(200)) // 150