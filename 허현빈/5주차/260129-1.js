/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const bkArr = [];
  const visit = Array.from({ length: wordList.length }).fill(false);
  let ans = Infinity;
  const bk = (k, word) => {
    if (word === endWord) {
      ans = Math.min(ans, k);
      return;
    }
    for (let i = 0; i < wordList.length; i++) {
      let count = 0;
      let flag = true;
      for (let j = 0; j < wordList[i].length; j++) {
        if (word[j] !== wordList[i][j]) {
          count++;
          if (count === 2) {
            flag = false;
            break;
          }
        }
      }
      if (visit[i] === false && flag) {
        visit[i] = true;
        bk(k + 1, wordList[i]);
        visit[i] = false;
      }
    }
  };
  bk(1, beginWord);
  if (ans === Infinity) return 0;
  return ans;
};
//시간복잡도 터짐 실패
