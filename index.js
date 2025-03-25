function validateNumbers(numbers) {
  if (
    !Array.isArray(numbers) ||
    numbers.some((num) => typeof num !== "number")
  ) {
    throw new TypeError("All arguments must be numbers.");
  }
}

/**
 * Adds multiple numbers together.
 * @param {...number} numbers - The numbers to add.
 * @returns {number} The sum of all input numbers.
 * @throws {TypeError} If any argument is not a number.
 */
function add(...numbers) {
  validateNumbers(numbers);
  return numbers.reduce((sum, num) => sum + num, 0);
}

/**
 * Multiplies multiple numbers together.
 * @param {...number} numbers - The numbers to multiply.
 * @returns {number} The product of all input numbers.
 * @throws {TypeError} If any argument is not a number.
 */
function multiply(...numbers) {
  validateNumbers(numbers);
  if (numbers.includes(0)) return 0; // Optimization
  return numbers.reduce((product, num) => product * num, 1);
}

/**
 * Subtracts numbers sequentially.
 * @param {...number} numbers - The numbers to subtract.
 * @returns {number} The result of sequential subtraction.
 * @throws {TypeError} If any argument is not a number.
 */
function subtract(...numbers) {
  validateNumbers(numbers);
  if (numbers.length === 0) throw new Error("At least one number is required.");
  return numbers.reduce((diff, num) => diff - num);
}

/**
 * Divides numbers sequentially.
 * @param {...number} numbers - The numbers to divide.
 * @returns {number} The result of sequential division.
 * @throws {TypeError} If any argument is not a number or if division by zero occurs.
 */
function divide(...numbers) {
  validateNumbers(numbers);
  if (numbers.length === 0) throw new Error("At least one number is required.");
  if (numbers.slice(1).includes(0)) throw new Error("Division by zero is not allowed.");
  return numbers.reduce((quotient, num) => quotient / num);
}

module.exports = { add, multiply, subtract, divide };
