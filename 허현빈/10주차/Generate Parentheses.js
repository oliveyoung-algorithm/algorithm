/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ans = [];

    const bk = (str, open, close) => {
        if (str.length === 2 * n) {
            ans.push(str);
            return;
        }

        if (open < n) {
            dfs(str + "(", open + 1, close);
        }

        if (close < open) {
            dfs(str + ")", open, close + 1);
        }
    };

    bk("", 0, 0);
    return ans;
};