/**
 * Elabore o pseudocódigo de um algoritmo que receba um valor inteiro, 
 * acrescente a ele 2 unidades, e por fim, exiba o resultado
 */

const add2ToInt = (num) => {
  if(typeof num !== 'number') throw new Error(`${JSON.stringify(num)} is not a number`)
  if(num.toString().match(/\./)) throw new Error(`${num} is not a integer`)
  return num + 2
}

console.log(add2ToInt([])) // is not a number
console.log(add2ToInt('23')) // is not a number
console.log(add2ToInt(23.5)) // is not an integer
console.log(add2ToInt(23)) // 25