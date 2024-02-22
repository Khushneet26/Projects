const squareRoot = (n) => Math.sqrt(n);
const square = ( n) => n*n;
//Math.pow
//** 
const distance = (x1,y1,x2,y2) => {
    return squareRoot (square(x2 - x1) + square(y2 - y1))
};
module.exports = { distance, square };
