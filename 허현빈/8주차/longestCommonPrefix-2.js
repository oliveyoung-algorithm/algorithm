/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  class TrieNode {
    constructor() {
      this.children = new Map(); 
      this.isEnd = false;
      this.passCount = 0; 
    }
  }

  const root = new TrieNode();

  for (const word of strs) {
    let node = root;
    for (const ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch);
      node.passCount += 1;
    }
    node.isEnd = true;
  }

  let node = root;
  let prefix = "";

  while (node.children.size === 1) {
    const [[ch, next]] = node.children.entries();

    if (next.passCount !== strs.length) break;

    prefix += ch;
    node = next;
    if (node.isEnd) break;
  }

  return prefix;
};
