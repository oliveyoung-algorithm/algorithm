/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Array(rooms.length).fill(false);
    visited[0] = true;
    const queue = [0];
    
    let cnt = 0;

    while(queue.length >0){
        const current = queue.pop();
        cnt++;
        const keys = rooms[current];
        
        for(const key of keys){
            if(visited[key]) continue;
            queue.push(key);
            visited[key]=true;
        }
    }

    if(cnt===rooms.length) return true;
    return false;






    
};