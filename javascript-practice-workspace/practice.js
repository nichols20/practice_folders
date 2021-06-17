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
        }
        else {
            graph[from].push(to)
        }
    }

    for (let [from, to] of edges.map( r => r.split('-'))){
        addEdge(from, to)
        addEdge(to, from)
    }
    return graph
} 


class VillageState {
    constructor(place, parcels ){
        this.place = place
        this.parcels = parcels 
    }

    move(destination){
        console.log(destination)
        if (!roadGraph[this.place].includes(destination)) {
            return this
        }
        else{
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address)
             return new VillageState(destination, parcels)
        }
    }
}

const roadGraph = buildGraph(roads)

let first = new VillageState(
    'post office',
    [{place: 'post office', address: `Alice's House`}]
)

let next = first.move(`Alice's House`)





