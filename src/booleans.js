const negate = (a) => {
  return !(a);
};

const both = (a, b) => {
  return (a && b);
};

const either = (a, b) => {
  return (a || b);
};

const none = (a, b) => {
  return (!a && !b);
};

const one = (a, b) => {
  return ((a && !b) || (!a && b));
};

const truthiness = (a) => {
  if (a) {
    return true
  } else {
    return false
  }
};

const isEqual = (a, b) => {
  if (a === b) {
    return true
  } else {
    return false
  }
};

const isGreaterThan = (a, b) => {
  return (a > b);
};

const isLessThanOrEqualTo = (a, b) => {
  return ((a < b) || (a === b));
};

const isOdd = (a) => {
  return !(a%2===0);
};

const isEven = (a) => {
  return (a%2===0);
};

const isSquare = (a) => {
  return Math.sqrt(a) % 1 === 0;
};

const startsWith = (char, string) => {
  return string.startsWith(char);
};

const containsVowels = (string) => {
  return string.match('a|e|i|o|u|A|E|I|O|U/i') ? true : false;
};

const isLowerCase = (string) => {
  return string == string.toLowerCase() && string != string.toUpperCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
