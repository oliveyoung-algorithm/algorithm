function solution(k, dungeons) {
    let answer = 0;
    let n = dungeons.length;
    let ch = Array.from({length:n}, () => 0);
    
    const path = [];
    const dfs = (L) => {
        if(L === n) {
            let my = k;
            let cnt = 0;
            for(let i of path) {
                const [min, cost] = dungeons[i];
                
                if(my >= min) {
                    my -= cost;
                    cnt++;
                } else {
                    continue;
                }
            }
            
            answer = Math.max(answer, cnt);
        } else {
            for(let i = 0; i < n; i++) {
                if(ch[i] === 0) {
                    ch[i] = 1;
                    path.push(i);
                    dfs(L + 1);
                    path.pop(i);
                    ch[i] = 0;
                }
            }
        }
    }
    
    dfs(0)
    return answer;
}