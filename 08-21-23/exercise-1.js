/**
 * 1. Elabore um algoritmo para representar o "perímetro" do retângulo
 */

/**
 * 
 * @param {number} horizontalSide 
 * @param {number} verticalSide 
 * @returns {number}
 * 
 * Given one of the horizontal sides and one of the vertical sides returns the perimeter of the rectangle
 */
const calculateRectanglePerimeter = (horizontalSide, verticalSide) => {
  return horizontalSide * 2 + verticalSide * 2
}

console.log(calculateRectanglePerimeter(2, 5)) // returns 14
