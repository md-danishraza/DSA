class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    
    // add vertex
    addVertex(vertex){
        // there is no vertext
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
            return true;
        }else{
            return false;
        }
    }

    // connection
    addEdge(vertex1, vertex2){
        // if both vertices exist then connect them
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }else{
            return false;
        }

    }

    // remove edge
    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v!==vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v!==vertex1);
            return true;
        }else{
            return false;
        }
    }

    // remove vertex
    removeVertex(vertex){
        if (this.adjacencyList[vertex]){
            const edges = this.adjacencyList[vertex];
            edges.forEach(edge => {
                this.removeEdge(vertex, edge);
            });

            delete this.adjacencyList[vertex];
            
            return true;
        }else{
            return false;
        }


    }
}

const graph = new Graph();

graph.addVertex('A');

graph.addVertex('B');

graph.addVertex('C');

graph.addVertex('D');

console.log(graph);

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

console.log(graph);

graph.removeEdge('A','B');

console.log(graph);


graph.removeVertex('A');

console.log(graph);