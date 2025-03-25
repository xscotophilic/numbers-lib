const { add, multiply, subtract, divide } = require("../index");

test("add() should return the correct sum", () => {
  expect(add(1, 2, 3)).toBe(6);
  expect(add(-1, -2, -3)).toBe(-6);
  expect(add(0, 0, 0)).toBe(0);
});

test("multiply() should return the correct product", () => {
  expect(multiply(2, 3, 4)).toBe(24);
  expect(multiply(-2, 3, -4)).toBe(24);
  expect(multiply(0, 1, 2)).toBe(0);
});

test("subtract() should return the correct difference", () => {
  expect(subtract(10, 3, 2)).toBe(5);
  expect(subtract(0, 5)).toBe(-5);
  expect(subtract(-10, -5)).toBe(-5);
});

test("divide() should return the correct quotient", () => {
  expect(divide(10, 2, 5)).toBe(1);
  expect(divide(-20, 2, -2)).toBe(5);
  expect(divide(100, 10)).toBe(10);
});

test("divide() should throw error when dividing by zero", () => {
  expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  expect(() => divide(10, 2, 0)).toThrow("Division by zero is not allowed.");
});

test("should throw error for invalid input", () => {
  expect(() => add(1, "a", 3)).toThrow(TypeError);
  expect(() => multiply(true, 3, 4)).toThrow(TypeError);
  expect(() => subtract(10, "b")).toThrow(TypeError);
  expect(() => divide(10, [])).toThrow(TypeError);
});
