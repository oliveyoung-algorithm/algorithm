// 4칸 같은지 확인
function solve(x, y, board) {
    if (board[x][y] === '0') return false;
    
    if (board[x][y] == board[x + 1][y] &&
        board[x + 1][y] == board[x][y + 1] && 
        board[x][y + 1] == board[x + 1][y + 1]) {
        return true;
    }
    return false;
}

// 0이 아닌 부분까지 떨어지기
function drop(m, n, board) {
    // 열 기준
    for(let j = 0; j < n; j++){
        // 행 기준
        let s = [];
        
        // 아래 -> 위
        for(let i = m - 1; i >= 0; i--) {
            if (board[i][j] != '0') {
                s.push(board[i][j])
            }
        }
        // 다시 아래부터 채우기
        let r = m - 1;
        for(const num of s) {
            board[r][j] = num;
            r--;
        }
        // 위에 남은칸들
        for(let i = 0; i < m - s.length; i++) {
            board[i][j] = '0';
        }
    }
}

function solution(m, n, board) {
    var answer = 0;
    
    while(true) {
        let flag = false;
        let temp = board.map(row => [...row]); // 깊은 복사
        
        for(let i = 0; i < m - 1; i++){
            for(let j = 0; j < n - 1; j++){
                // 4칸이 같으면 삭제, 기존 것으로 비교
                if (solve(i, j, board)) { 
                    for(let k = i; k < i + 2; k++){
                        for(let q = j; q < j + 2; q++){
                            if (temp[k][q] !== '0') answer++;
                            temp[k][q] = '0';
                        }
                    }
                    flag = true;
                }
            }
        }
        board = temp;
        drop(m, n, board);
        
        if (!flag) break;
    }
    
    return answer;
}
