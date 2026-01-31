function solution(genres, plays) {
    var answer = [];
    
    // 장르 내에서 노래 재생수 카운트
    let m = new Map();
    for(let i = 0; i < genres.length; i++){
        let key = genres[i];
        let value = m.get(key);
        m.set(key, (value || 0) + plays[i]);
    }
    
    // 장르 내에서 카운트 내림차순
    let arr = []; // genre, cnt
    for(const [key, value] of m) {
        arr.push([key, value]);
    }
    arr.sort((a, b) => (b[1] - a[1])); 
    
    // 가장 많이 재생된 순서대로 장르
    for(let i = 0; i < arr.length; i++){
        let temp = []; // play, idx
        for(let j = 0; j < genres.length; j++){
            if (arr[i][0] == genres[j]) {
                temp.push([plays[j], j]);
            }
        }
        temp.sort((a, b) => {
            if (a[0] != b[0]) return b[0] - a[0]; // 내림차순
            else return a[1] - b[1]; // 오름차순
        })
        
        // 상위 2개
        answer.push(temp[0][1]);
        if (temp.length > 1) answer.push(temp[1][1]);
    }
    
    return answer;
}
