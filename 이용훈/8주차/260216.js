/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    const dfs = (x, y) => {
        if (x < 0 || x >= m || y < 0 || y >= n) return 0;
        if (grid[x][y] === 0) return 0;

        grid[x][y] = 0;

        let cnt = 1;
        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            cnt += dfs(nx, ny);
        }

        return cnt;
    }

    let max = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1){
                max = Math.max(max, dfs(i, j));
            }
        }
    }

    return max;
};