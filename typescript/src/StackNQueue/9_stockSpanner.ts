// LeetCode 901 - Stock Span

class StockSpanner {
    // [stock,span]
     stack:number[][]
    constructor() {
        this.stack = []
    }

    next(price: number): number {
        let span = 1
        // check in stack
        let n = this.stack.length-1
        while(this.stack.length && this.stack[this.stack.length-1][0]<=price){
            span += this.stack.pop()![1]
        }
       
        this.stack.push([price,span])
        // console.log(span)
        return span
        
    }
}

let stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85)