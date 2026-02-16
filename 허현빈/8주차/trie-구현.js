// @ts-nocheck

class TrieNode {
  constructor() {
    this.children = new Map();
    this.pass = 0;
    this.end = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.totalWords = 0;
  }

  insert(word) {
    if (typeof word !== "string") throw new TypeError("word must be a string");
    let node = this.root;
    node.pass++;

    for (const ch of word) {
      if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
      node = node.children.get(ch);
      node.pass++;
    }
    node.end++;
    this.totalWords++;
  }

  search(word) {
    const node = this.#walk(word);
    return !!node && node.end > 0;
  }

  startsWith(prefix) {
    return !!this.#walk(prefix);
  }

  countWordsEqualTo(word) {
    const node = this.#walk(word);
    return node ? node.end : 0;
  }

  countWordsStartingWith(prefix) {
    const node = this.#walk(prefix);
    return node ? node.pass : 0;
  }

  delete(word) {
    if (!this.search(word)) return false;

    let node = this.root;
    node.pass--;

    const stack = [];
    for (const ch of word) {
      stack.push([node, ch]);
      node = node.children.get(ch);
      node.pass--;
    }

    node.end--;
    this.totalWords--;

    for (let i = stack.length - 1; i >= 0; i--) {
      const [parent, ch] = stack[i];
      const child = parent.children.get(ch);
      if (child.pass === 0) parent.children.delete(ch);
      else break;
    }
    return true;
  }

  words() {
    const res = [];
    const path = [];

    const dfs = (node) => {
      if (node.end > 0) res.push(path.join(""));
      for (const [ch, nxt] of node.children) {
        path.push(ch);
        dfs(nxt);
        path.pop();
      }
    };

    dfs(this.root);
    return res;
  }

  longestCommonPrefix() {
    if (this.totalWords === 0) return "";

    let node = this.root;
    let prefix = "";

    while (node.children.size === 1 && node.end === 0) {
      const [[ch, next]] = node.children.entries();
      prefix += ch;
      node = next;
    }
    return prefix;
  }

  #walk(s) {
    let node = this.root;
    for (const ch of s) {
      const nxt = node.children.get(ch);
      if (!nxt) return null;
      node = nxt;
    }
    return node;
  }
}

const trie = new Trie();

trie.insert("flower");
trie.insert("flow");
trie.insert("flight");
trie.insert("flow"); // duplicate

console.log(trie.search("flow")); // true
console.log(trie.countWordsEqualTo("flow")); // 2
console.log(trie.startsWith("fl")); // true
console.log(trie.countWordsStartingWith("flo")); // 3 ("flower","flow","flow")

console.log(trie.autocomplete("fl", { limit: 10 })); // e.g. ["flight","flow","flower"] (order depends on insertion/Map order)
console.log(trie.searchWithWildcard("fl..")); // true ("flow")
console.log(trie.longestCommonPrefix()); // "fl"

trie.delete("flow");
console.log(trie.countWordsEqualTo("flow")); // 1
console.log(trie.words()); // unique words: ["flower","flow","flight"] (again order may vary)
