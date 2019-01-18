module.exports = color;

let codeMap = {
  red: 31,
  green: 32,
  yellow: 33,
  cyan: 36
};

function color(str, n = 32) {
  if ("string" === typeof n)
    if (Object.hasOwnProperty.call(codeMap, n)) {
      n = codeMap[n];
    } else {
      throw "PKG: psychedelic. input string not supported";
    }
  return `\x1b[${n}m${str}\x1b[0m`;
}
