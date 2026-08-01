export {}

// L - 921


function minAddToMakeValid(s: string): number {
    let open = 0
    let close = 0

    for(let i=0;i<s.length;i++){
        if(s[i]=="("){
            open += 1
        }else{
            if(open){
                open -= 1
            }else{
                close += 1
            }
        }
    }

    return open + close
    
};