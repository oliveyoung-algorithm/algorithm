var nearestExit = function(maze, entrance) {
    const rows = maze.length;
    const cols = maze[0].length;
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

    const queue = [[entrance[0], entrance[1], 0]];
    maze[entrance[0]][entrance[1]] = "+"; 

    while (queue.length > 0) {
        const [cx, cy, cnt] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = cx + dx[i];
            const ny = cy + dy[i];

            if (nx < 0 || nx >= rows || ny < 0 || ny >= cols || maze[nx][ny] === "+") continue;
            
            if (nx === 0 || ny === 0 || nx === rows - 1 || ny === cols - 1) {
                return cnt + 1;
            }

            maze[nx][ny] = "+";
            queue.push([nx, ny, cnt + 1]);
        }
    }
    return -1;
};