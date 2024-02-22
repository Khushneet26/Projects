function square(num) {
    return num * num;
}

function squareRoot(num) {
    return Math.sqrt(num);
}

function distance(x1, y1, x2, y2, callback) {
    const xMinus = square(x2 - x1);
    const yMinus = square(y2 - y1);
    const result = squareRoot(xMinus + yMinus);
    callback(null, result);
}

module.exports = distance;
