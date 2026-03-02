var calcEquation = function(equations, values, queries) {
    const graph = new Map()

    const addNode = (from, to, w)=>{
        if(!graph.has(from)) graph.set(from, [])
        graph.get(from).push(to, w)
    }
    for(let i = 0 ; i < equations.length; i++){
        const [from, to] = equstions[i]
        const val = values[i]
        addNode(from, to, val)
        addNode(to, from, 1/val)
    }
    const bfs = (start, end) =>{
        if(start === end) return 1
        if(!graph.has(start) || !graph.has(end)) return -1
        const q= [[start ,1]]
        const visit = new Set()
        while(q.length){
            const [cur, w] = q.shift()
            if(cur === end) return w

            for(const [next, cw] of graph.get(cur)){
                if(visit.has(next)) continue
                visit.add(next)
                q.push([next, w*cw])
            }
        }
        return -1
    }

    const ans = [];
    for(let i = 0; i <queries.length; i++){
        const [s,t] =queries[i]
        ans.push(bfs(s,t))
    }
    return ans
};