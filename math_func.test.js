const {
  add,
  subtract,
  multiply,
  divide,
} = require('./math_func');

test('Adds 1 + 2 to equal 3', () => expect(add(1, 2)).toBe(3));

test('Adds 10 + 45 to equal 55', () => expect(add(10, 45)).toBe(55));


test('Subtract 2 - 1 to equal 1', () => expect(subtract(2, 1)).toBe(1));


test('Multiply 10 * 10 to equal 100', () => expect(multiply(10, 10)).toBe(100));


test('Divide 100 by 10 to equal 10', () => expect(divide(100, 10)).toBe(10));
