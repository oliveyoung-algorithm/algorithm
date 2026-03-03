/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const from = new Map()
    const to = new Map()
    const ans =[]
    for(let i = 0 ; i < numCourses; i++){
        from.set(i, 0)
    }
    for(let i = 0 ; i < prerequisites.length; i++){
        const [a,b] = prerequisites[i]
        if(!to.get(b)) to.set(b, []) 
        to.get(b).push(a)
        from.set(a, from.get(a) + 1)
    }
    const q= []
    
    for(const val of from){
        if(val[1] === 0){
            q.push(val[0])
            from.delete(val[0])
        }
    }

    while(q.length){
        const val = q.shift()
        ans.push(val)
        const arr = to.get(val)
        if(arr) {
             for(let i = 0 ; i < arr.length; i++){
            const value = arr[i]
            from.set(value, from.get(value)-1)
            if(from.get(value) === 0){
                q.push(value)
                from.delete(value)
            }
        }
        }
       
    }
    return from.size === 0 ? ans : []
};