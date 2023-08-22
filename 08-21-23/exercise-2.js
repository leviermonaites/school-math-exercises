/**
 * Será construído um galpão na metade de um terreno que tem o formato de trapézio e 
 * bases que mdem 18m e 22m e altura de de 12 metros.
 * Determine a área em que será construído o galpão?
 */

const calculateTrapeziumArea = (base1, base2, height) => {
  return (base1 + base2) / 2 * height
}

console.log(calculateTrapeziumArea(18, 22, 12)) // returns 240