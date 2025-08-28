export {}


function countSort(arr: number[]) {
    const n = arr.length
    const max = Math.max(...arr)
    const countArr: number[] = new Array(max + 1).fill(0)

    // Count frequency
    for (let value of arr) {
        countArr[value] += 1
    }

    console.log("Frequency array:", countArr)

    // Reconstruct sorted array
    const sortedArr: number[] = []
    for (let i = 0; i <= max; i++) {
        for (let j = 0; j < countArr[i]; j++) {
            sortedArr.push(i)
        }
    }

    console.log("Sorted array:", sortedArr)
}

const nums = [3, 3, 3, 2, 2, 1]
countSort(nums)


function countSort2(arr: number[]): number[] {
    const n = arr.length
    const max = Math.max(...arr)
    const countArr: number[] = new Array(max + 1).fill(0)

    // Step 1: Count frequency
    for (let value of arr) {
        countArr[value] += 1
    }

    // Step 2: Build cumulative count
    // converts frequencies into positions
    for (let i = 1; i <= max; i++) {
        countArr[i] += countArr[i - 1]
    }

    // Step 3: Build output array (stable sort)
    const output: number[] = new Array(n)
    // backward looping cause of cumulative sum we will get the last index 
    // this way it will be stable
    for (let i = n - 1; i >= 0; i--) {
        const value = arr[i]
        const position = countArr[value] - 1
        output[position] = value
        // decreasing the count
        countArr[value] -= 1
    }


    return output
   
}

const nums2 = [3, 3, 2, 1, 2, 3]
console.log("Sorted:", countSort2(nums2))
