function createChunks(array, n) {
    let chunks = [];
    const divisions = Math.ceil(array.length / n); // Use Math.ceil to include any leftover elements

    for (let i = 0; i < divisions; i++) {
        chunks.push(array.slice(i * n, (i + 1) * n));
    }

    return chunks;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(createChunks(numbers, 2)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

