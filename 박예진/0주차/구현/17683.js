// C, C#, D, D#, E, F, F#, G, G#, A, A#, B

function solve(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i + 1] === "#") {
            res += str[i].toLowerCase();
            i++;
        } else {
            res += str[i];
        }
    }
    return res;
}

function solution(m, musicinfos) {
    var answer = '';
    
    m = solve(m);
    
    // 시작, 끝, 제목, 악보
    let res = []; // 최종 후보들
    for(let i = 0; i < musicinfos.length; i++) {
        const [start, end, title, sheet] = musicinfos[i].split(",");
        
        let s = Number(start.substr(0, 2)) * 60 + Number(start.substr(3, 2));
        let e = Number(end.substr(0, 2)) * 60 + Number(end.substr(3, 2));
        let time = e - s;
        let sheetNorm = solve(sheet);
        
        // 악보 반복
        let str = "";
        for (let t = 0; t < time; t++) {
            str += sheetNorm[t % sheetNorm.length];
        }
        // 포함되면 최종 후보들 추가
        if (str.includes(m)) {
            res.push([time, title, i]);
        }
    }
    
    if (res.length == 0) return "(None)";
    res.sort((a, b) => {
        if (a[0] != b[0]) return b[0] - a[0]; // sum 내림차순
        else return a[2] - b[2]; // idx 오름차순
    })
    
    return res[0][1];
}
