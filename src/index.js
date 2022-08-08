module.exports = function reverse(n) {
    return Array.from(String(Math.abs(n)), Number).reverse().join("");
};
