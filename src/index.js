// module.exports = function reverse (n) {
//   return String(Math.abs(n)).split('').reverse().join('');
// }

module.exports = function reverse (n) {
    let str = String(Math.abs(n)).split('');
    let res = [];
    for (let i = str.length; i >= 0; i--) {
        res.push(str[i]);
    }
    return res.join('');
}
