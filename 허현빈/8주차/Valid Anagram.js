/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1);
    } else {
      map.set(ch, 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    if (map.has(ch)) {
      if (map.get(ch) >= 1) {
        map.set(ch, map.get(ch) - 1);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  for (const ch of map) {
    if (ch[1] !== 0) {
      return false;
    }
  }
  return true;
};
