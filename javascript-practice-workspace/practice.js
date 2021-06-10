 const roads = [
     `Alice's House-Bob's House`, `Alice's House-Cabin`,
     `Alice's House-Post Office`, `Bob's House-Town Hall`,
     `Daria's House-Ernie's House`, `Daria's House-Town Hall`,
     `Ernie's House-Grete's House`, `Grete's House-Farm`,
     `Grete's House-Shop`, `Marketplace-Farm`,
     `Marketplace-Post Office`, `Marketplace-Shop`,
        
    ]
 function buildGraph(edges) {
    let graph = Object.create(null)
    function addEdge(from, to){
        if (graph[from] == null){
            graph[from] = [to];
            console.log(graph[from])
        }
        else {
            //graph[from].push(to)
            //console.log(graph)
        }
    }

    for (let [from, to] of edges.map( r => r.split('-'))){
        addEdge(from, to)
        addEdge(to, from)
    }
    return graph
} 



const roadGraph = buildGraph(roads)



