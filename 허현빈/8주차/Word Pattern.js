/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const arr = s.split(" ");
  const set = new Set();
  const map = new Map();
  if (arr.length !== pattern.length) return false;
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      if (map.get(arr[i]) !== pattern[i]) return false;
    } else {
      if (set.has(pattern[i])) {
        return false;
      }
      map.set(arr[i], pattern[i]);
      set.add(pattern[i]);
    }
  }
  return true;
};
