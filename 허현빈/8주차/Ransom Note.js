/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();
  for (let i = 0; i < magazine.length; i++) {
    const ch = magazine[i];
    if (!map.has(ch)) {
      map.set(ch, 1);
    } else {
      map.set(ch, map.get(ch) + 1);
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const ch = ransomNote[i];
    if (map.has(ch) && map.get(ch) >= 1) {
      map.set(ch, map.get(ch) - 1);
    } else {
      return false;
    }
  }
  return true;
};
