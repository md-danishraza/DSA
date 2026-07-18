export {}



// L - 845
// O n 
function longestMountain(arr: number[]): number {

    const n = arr.length;
    let ans = 0;

    let i = 1;

    while (i < n - 1) {

        // Peak
        if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
            // now check while left and right satisfies same condition
            let left = i;
            let right = i;

            while (left > 0 && arr[left - 1] < arr[left]) {
                left--;
            }

            while (right < n - 1 && arr[right] > arr[right + 1]) {
                right++;
            }

            // update with max length
            ans = Math.max(ans, right - left + 1);

            // Skip processed mountain
            i = right;
        }

        i++;
    }

    return ans;
}