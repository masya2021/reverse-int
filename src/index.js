module.exports = function reverse(n) {
    return Math.abs(Array.from(String(n), Number).reverse().join(""));
};
