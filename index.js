module.exports.add = (...numbers) => {
    let result = 0;
    numbers.forEach(number => {
        result += number;
    });
    return (result);
};

module.exports.multiply = (...numbers) => {
    let result = 1;
    numbers.forEach(number => {
        result *= number;
    });
    return (result);
};