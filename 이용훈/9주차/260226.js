/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const answer = [];

    const dfs = (s, e, p) => {
        if(s === n && e === n) {
            answer.push(p);
            return;
        }

        if(s < n) dfs(s + 1, e, p + "(");
        
        if(e < s) dfs(s, e + 1, p + ")");
    }

    dfs(0, 0, "");
    return answer;
};