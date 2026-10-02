export {}

// L - 797
function allPathsSourceTarget(graph: number[][]): number[][] {
    let ans:number[][] = []
    let target = graph.length - 1
    function dfs(temp:number[],node:number=0){
       if(node==target){
         ans.push([...temp])
       }

     //    get edges
        let edges = graph[node]
        for(let edge of edges){
            temp.push(edge)
            dfs(temp,edge)
            temp.pop()
        }
    }
    dfs([0])
    return ans
};