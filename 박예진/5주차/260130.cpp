function solution(id_list, report, k) {
    var answer = [];
    
    // A -> B 중복제거
    let s = new Set(report);
    
    let reports = [];
    for(const str of s){
        const [a, b] = str.split(" ")
        reports.push([a, b]);
    }
    
    // 신고 카운트
    let m = new Map();
    for(let i = 0; i < reports.length; i++){
        let key = reports[i][1];
        let value = (m.get(key) || 0);
        m.set(key, value + 1);
    }
    
    // 카운트 >= k 최종 신고당함
    let last = [];
    for(const [key, value] of m) {
        if (value >= k) last.push(key);
      }
    
    // last에 해당되는 reports 메일 카운트
    let m1 = new Map();
    for(let i = 0; i < reports.length; i++){
        if (last.includes(reports[i][1])) {
            m1.set(reports[i][0], (m1.get(reports[i][0]) || 0) + 1);
        } 
    }
    
    // id_list 메일
    for(let i = 0; i < id_list.length; i++){
        let cnt = m1.get(id_list[i]);
        if (cnt != null) answer[i] = m1.get(id_list[i]);
        else answer[i] = 0;
    }
    
    return answer;
}
