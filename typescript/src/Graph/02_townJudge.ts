export {}


function findJudge(n: number, trust: number[][]): number {
    let doesJudgeExist:number = -1

    // use maps to chase trust count 
    let trustIn = new Map<number,number>()
    let trustOut = new Map<number,number>()
    for(let i=1;i<=n;i++){
        trustIn.set(i,0)
        trustOut.set(i,0)
    }

    // now loop and check in trus input arr
    for(let t of trust){
        // [a,b] -> a trusts b
        trustIn.set(t[1],trustIn.get(t[1])!+1)
        trustOut.set(t[0],trustOut.get(t[0])!+1)
    }

    // to be a judge 
    // trustIn req n-1 , and trusOut req 0
    for(let i=1;i<=n;i++){
        if((trustIn.get(i)! == (n-1)) && (trustOut.get(i)! ==0)) (doesJudgeExist = i)
    }
    
    
    return doesJudgeExist
};