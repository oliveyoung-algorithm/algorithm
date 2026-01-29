/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const matches = (word1, word2) => {
    let count = 0;
    for (let j = 0; j < word1.length; j++) {
      if (word1[j] !== word2[j]) {
        count++;
        if (count >= 2) return false;
      }
    }
    return count === 1;
  };

  let finalAns = Infinity;

  const bfs = (startWord, startIdx) => {
    const q = [[startWord, 2]];
    const visit = Array.from({ length: wordList.length }).fill(false);
    visit[startIdx] = true;

    while (q.length > 0) {
      const [cur, ladderCount] = q.shift();

      if (cur === endWord) {
        finalAns = Math.min(finalAns, ladderCount);
      }

      for (let i = 0; i < wordList.length; i++) {
        if (!visit[i] && matches(cur, wordList[i])) {
          visit[i] = true;
          q.push([wordList[i], ladderCount + 1]);
        }
      }
    }
  };

  for (let i = 0; i < wordList.length; i++) {
    if (matches(beginWord, wordList[i])) {
      bfs(wordList[i], i);
    }
  }

  return finalAns === Infinity ? 0 : finalAns;
};
// bfs로 다시품 정답
// 10분젇도 더 쓴듯
