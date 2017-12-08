function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

const anagrams = (stringA, stringB) => {
  return cleanString(stringA) === cleanString(stringB);
};

module.exports = anagrams;