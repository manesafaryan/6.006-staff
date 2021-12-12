function breadthFirsSearch(s, Adj) {
    const parent = {s: null};
    const level = {s:0}
    const frontier = [s]
    let i = 1;
    while(frontier.length) {
        let next = [];
        for(let u of frontier) {
            for(let v of Adj[v])
            if(!v in parent) {
                parent[v] = u;
                level[v] = i                
                next.push(v)
            }
        }
        frontier = next
        i++
    }
}