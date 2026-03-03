/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const from = new Map()
    const to = new Map()
    for(let i = 0 ; i < numCourses; i++){
        from.set(i,0)
    }

    for(let i = 0 ; i < prerequisites.length; i++){
        const [a,b] = prerequisites[i]
        if(!to.get(b)) to.set(b, [])
        to.get(b).push(a)
        from.set(a, from.get(a)+1)
    }

    const q = []
    for(let val of from){   
        if(val[1] === 0){
            q.push(val[0])
            from.delete(val[0])
        }
    }
    while(q.length){
        const cur = q.shift()
        const arr = to.get(cur)
        if(arr){
for(let i = 0 ; i < arr.length; i++ ){
            const val  = to.get(cur)[i]
            from.set(val, from.get(val) -1)
            if(from.get(val) === 0){
                q.push(val)
                from.delete(val)
            }
        }
        }
        
    }

   return from.size ===0
};