/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const parent = Array.from({ length: n }, (_, i) => i);

    const find = (x) => {
        if(parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    }

    const union = (a, b) => {
        const pa = find(a);
        const pb = find(b);

        if(pa !== pb) parent[pb] = pa;
    }

    for(let i = 0; i < n; i ++) {
        for(let j = i + 1; j < n; j++) {
            if(isConnected[i][j] === 1) {
                union(i, j);
            }
        }
    }

    const sH = new Set();
    for(let i = 0; i < n; i++) {
        sH.add(find(i));
    }

    return sH.size;
};