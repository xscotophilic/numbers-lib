# numbers-lib

> A simple library for basic arithmetic operations: addition, subtraction, multiplication, and division.

[![NPM Version][npm-image]][npm-url]
[![Downloads][npm-image-downloads]][npm-url]

## Installation

### Using npm:
```bash
npm i --save numbers-lib
```

## Usage

### In Node.js:
```javascript
const numbers = require('numbers-lib');

const sum = numbers.add(10, 20, 30);
console.log(sum); // 60

const difference = numbers.subtract(50, 20, 5);
console.log(difference); // 25

const product = numbers.multiply(2, 3, 4);
console.log(product); // 24

const quotient = numbers.divide(100, 5, 2);
console.log(quotient); // 10
```

### Available Functions:

#### 1. `add(...numbers)`
- Adds multiple numbers.
- Example: `add(10, 20, 30) // 60`

#### 2. `subtract(...numbers)`
- Subtracts each number from the previous one.
- Example: `subtract(100, 20, 10) // 70`

#### 3. `multiply(...numbers)`
- Multiplies multiple numbers.
- Example: `multiply(2, 3, 4) // 24`

#### 4. `divide(...numbers)`
- Divides each number sequentially.
- Example: `divide(100, 5, 2) // 10`
- Throws an error if division by zero occurs.

---

[npm-image]: https://img.shields.io/npm/v/numbers-lib  
[npm-url]: https://www.npmjs.com/package/numbers-lib  
[npm-image-downloads]: https://img.shields.io/npm/dw/numbers-lib  
