// @ts-nocheck
class TrieNode {
  constructor(val = "") {
    this.val = val;
    this.children = new Map();
    this.pass = 0;
    this.isEnd = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode("");
    this.totalWords = 0;
  }

  insert(s) {
    let node = this.root;
    node.pass++;
    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      if (!node.children.get(ch)) {
        node.children.set(ch, new TrieNode(ch));
      }
      node = node.children.get(ch);
      node.pass++;
    }
    node.isEnd = true;
    this.totalWords = s.length;
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
    return !!node && node.isEnd === true;
  }
  startWith(s) {
    const node = this.#walk(s);
    return node ? node.pass : 0;
  }

  delete(s) {
    if (!this.search(s)) return false;
    let node = this.root;
    const stack = [];

    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      stack.push([node, ch]);
      node = node.children.get(ch);
      node.pass--;
    }

    node.isEnd = false;
    this.totalWords--;

    for (let i = stack.length - 1; i >= 0; i--) {
      const [par, ch] = stack[i];
      const child = par.children.get(cj);
      if (child.pass === 0) par.children.delete(child);
      else break;
    }

    return true;
  }

  words() {
    const res = [];
    const path = [];
    const dfs = (node) => {
      if (node.isEnd) {
        res.push(path.join(""));
      }
      const entries = Array.from(node.children.entries());
      for (let i = 0; i < entries.length; i++) {
        const ch = entries[i][0];
        const next = entries[i][1];
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
console.log(trie.startWith("fl")); // 4 (flower, flow, flight, flow)

console.log(trie.words()); // ["flight","flow","flower"] (순서는 Map 순서에 따라 달라질 수 있음)
