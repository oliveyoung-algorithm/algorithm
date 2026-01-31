function solution(rows, columns, queries) {
    var answer = [];
    
    let arr = Array.from({length: rows + 1}, () => []);
    
    // 초기 세팅
    let cnt = 1;
    for(let i = 1; i <= rows; i++) {
        for(let j = 1; j <= columns; j++){
            arr[i][j] = cnt;
            cnt++;
        }
    }
    
    // 시계방향
    for(const query of queries) {
        let x1 = query[0];
        let y1 = query[1];
        let x2 = query[2];
        let y2 = query[3];
        
        let res = 1e9;
        let temp = arr[x1][y1];
        
        // 아래 -> 위
        for(let i = x1; i < x2; i++) {
            arr[i][y1] = arr[i + 1][y1];
            res = Math.min(res, arr[i][y1]);
        }
        // 오 -> 왼
        for(let j = y1; j < y2; j++){
            arr[x2][j] = arr[x2][j + 1];         
            res = Math.min(res, arr[x2][j]);
        }
        // 위 -> 아래
        for(let i = x2; i > x1; i--) {
            arr[i][y2] = arr[i - 1][y2];
            res = Math.min(res, arr[i][y2]);
        }
        // 왼 -> 오
        for(let j = y2; j > y1; j--){
            arr[x1][j] = arr[x1][j - 1];       
            res = Math.min(res, arr[x1][j]);
        }
        arr[x1][y1 + 1] = temp;
        res = Math.min(res, arr[x1][y1 + 1]);
        
        answer.push(res);
    }


    
    
    return answer;
}
