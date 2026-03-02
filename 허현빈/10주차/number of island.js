/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const map = grid.map((e) => e.map((e2) => Number(e2)))
    const dir =[[1,0], [-1,0], [0,1], [0,-1]]
    const bfs = (row, col) =>{
        map[row][col] = 0
        const q = [[row, col]]
        while(q.length){
            const [curY, curX] = q.shift()
            for(let i = 0; i < 4; i++){
                const ny = curY + dir[i][0]
                const nx = curX  + dir[i][1]
                if(ny >= 0 && ny < map.length && nx >= 0 && nx < map[0].length&& map[ny][nx] === 1){
                    map[ny][nx] = 0
                    q.push([ny,nx])
                }
            }            
        }
    }
    let ans = 0
    for(let i = 0 ; i < map.length; i++){
        for(let j = 0; j< map[0].length; j++){
            if(map[i][j] === 1){
                ans++
                bfs(i,j)
            }
        }
    }
    return ans
};