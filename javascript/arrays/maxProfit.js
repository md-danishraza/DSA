// find the biggest profit of stock given historical close

const stockPrice = [223,22,32,32,2,34,43,43,23,354,,53,43,4];

function maxProfit(stock){
    let minPrice = 1000;
    let maxPrice = 0;

    for(let i = 0; i < stock.length; i++){
        if(stock[i] < minPrice){
            minPrice = stock[i];
        }
        
        if(stock[i] > maxPrice){
            maxPrice = stock[i];
        }
    }
    return (maxPrice-minPrice);
}

console.log(maxProfit(stockPrice)); // Outputs: 354