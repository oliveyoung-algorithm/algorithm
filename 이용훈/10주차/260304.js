/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const m = mat.length;
    const n = mat[0].length;

    const row = Array(m).fill(0);
    const col = Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                row[i]++;
                col[j]++;
            }
        }
    }

    let answer = 0;
    for (let i = 0; i < m; i++) {
        if (row[i] !== 1) continue;

        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1 && col[j] === 1) answer++;
        }
    }

  return answer;
};