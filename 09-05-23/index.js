/**
 * Organize um fluxograma que apresente o ano de nascimento de uma pessoa fornecendo os dados:
 * @param {number} age -> Idade da pessoa
 * @param {number} currentYear -> Ano atual
 * @param {boolean} birthdayPassed -> Fez aniversário esse ano
 */

const calculateAge = (age, currentYear, birthdayPassed) => {
  let result = currentYear - age;
  if(!birthdayPassed) result--
  return result
}

console.log(calculateAge(18, 2023, true)) // returns 2005
console.log(calculateAge(18, 2023, false)) // returns 2004