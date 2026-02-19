function solution(bridge_length, weight, truck_weights) {
    let sum = 0;
    let answer = 0;
    
    const bridge = Array(bridge_length).fill(0);
    while(truck_weights.length || sum > 0) {
        answer++;
        
        const cur = bridge.shift();
        sum -= cur;
        
        if(truck_weights.length) {
            const next = truck_weights[0]
            if(sum + next <= weight) {
                bridge.push(next);
                sum += next;
                truck_weights.shift();
            } else {
                bridge.push(0);
            }
        } else {
            bridge.push(0);
        }
    }
    
    return answer;
}