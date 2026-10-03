export {}


function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0;

    // We can take at most k stops, which means k + 1 edges/flights
    for (let i = 0; i <= k; i++) {
        const tmpPrices = [...prices];

        for (const [s, d, c] of flights) {
            if (prices[s] === Infinity) {
                continue;
            }
            
            // Compare against tmpPrices[d] to prevent intra-iteration chaining
            if (prices[s] + c < tmpPrices[d]) {
                tmpPrices[d] = prices[s] + c;
            }
        }

        prices = tmpPrices;
    }

    return prices[dst] === Infinity ? -1 : prices[dst];
}