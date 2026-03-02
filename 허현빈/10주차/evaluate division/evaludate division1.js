var calcEquation = function(equations, values, queries) {
    const graph = new Map()

    const addEdgs = (from, to, w) =>{
        if(!graph.has(from)) graph.set(from, [])
        graph.get(from).push([to,w])
    }
    for(let i = 0; i < equations.length; i++){
        const [from, to] = equations[i]
        const val = values[i]
        addEdgs(from, to, val)
        addEdgs(to, from, 1/val)
    }
    const bfs = (start, end) =>{
        if(!graph.has(start) || !graph.has(end)) return -1
        if(start === end) return 1
        const q = [[start, 1]]

        const visited = new Set([start])

        while(q.length){
            const [cur, prod] = q.shift()
            if(cur === end) return prod
            for(const [next, w] of graph.get(cur)){
                if(visited.has(next)) continue
                visited.add(next)
                q.push([next, prod*w])
            }
        }
        return -1
    }
    
    const ans = new Array(queries.length)
    for(let i = 0 ; i < queries.length; i++){  
        const [s,t] = queries[i]
        ans[i] = bfs(s,t)
    }
    console.log(graph)
    console.log(ans)
    return ans


};
calcEquation([["a","b"],["b","c"]], [2.0,3.0], [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]])
