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
    this.totalWorlds = 0;
  }
  insert(word) {
    let node = this.root;
    node.pass++;

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch);
      node.pass++;
    }
    node.end++;
    this.totalWorlds = word.length;
  }

  #walk(s) {
    let node = this.root;
    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      const next = node.children.get(ch);
      if (!next) return null;

      node = next;
    }
    return node;
  }

  search(s) {
    const node = this.#walk(s);
    return !!node && node.end > 0;
  }

  countWordsEqualTo(s) {
    const node = this.#walk(s);
    return node ? node.end : 0;
  }

  startsWith(s) {
    const node = this.#walk(s);
    return node ? node.pass : 0;
  }

  delete(s) {
    if (!this.search(s)) return false;
    let node = this.root;
    node.pass--;
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      stack.push([node, ch]);
      node = node.children.get(ch);
      node.pass--;
    }
    node.end--;
    this.totalWorlds--;
    for (let i = stack.length - 1; i >= 0; i--) {
      const [par, ch] = stack[i];
      const child = par.children.get(ch);
      if (child.pass === 0) par.children.delete(ch);
      else break;
    }
    return true;
  }

  words() {
    const res = [];
    const path = [];

    const dfs = (node) => {
      if (node.end > 0) {
        res.push(path.join(""));
      }
      for (const [ch, next] of node.children) {
        path.push(ch);
        dfs(next);
        path.pop();
      }
    };

    dfs(this.root);
    return res;
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

trie.delete("flow");
console.log(trie.countWordsEqualTo("flow")); // 1
console.log(trie.words()); // unique words: ["flower","flow","flight"] (again order may vary)
