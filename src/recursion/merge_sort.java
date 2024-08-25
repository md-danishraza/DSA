package recursion;

import java.util.Arrays;

public class merge_sort {
    // creating new array
    static int[] fn(int arr[]) {
        if (arr.length == 1) {
            return arr;
        }

        int mid = arr.length / 2;

        int[] left = fn(Arrays.copyOfRange(arr, 0, mid));
        int[] right = fn(Arrays.copyOfRange(arr, mid, arr.length));

        return merge(left, right);

    }

    private static int[] merge(int[] left, int[] right) {
        int leftidx = 0;
        int rightidx = 0;
        int idx = 0;
        int[] sorted = new int[left.length + right.length];

        while (leftidx < left.length && rightidx < right.length) {
            if (left[leftidx] < right[rightidx]) {
                sorted[idx] = left[leftidx];
                leftidx++;
                idx++;
            } else {
                sorted[idx] = right[rightidx];
                rightidx++;
                idx++;
            }
        }

        while (leftidx < left.length) {
            sorted[idx] = left[leftidx];
            leftidx++;
            idx++;
        }
        while ((rightidx < right.length)) {
            sorted[idx] = right[rightidx];
            rightidx++;
            idx++;
        }

        return sorted;
    }

    // inplace merge sort
    static void inplaceMergeSort(int arr[], int s, int e) {
        if (e - s <= 1) {
            return; // Base case: Already sorted or single element
        }

        int mid = s + (e - s) / 2;

        // Recursively sort the left half
        inplaceMergeSort(arr, s, mid);
        // Recursively sort the right half
        inplaceMergeSort(arr, mid, e);

        // Merge the sorted halves back into the original array
        int leftIdx = s;
        int rightIdx = mid;
        int[] sorted = new int[e - s];
        int idx = 0;

        while (leftIdx < mid && rightIdx < e) {
            if (arr[leftIdx] < arr[rightIdx]) {
                sorted[idx++] = arr[leftIdx++];
            } else {
                sorted[idx++] = arr[rightIdx++];
            }
        }

        // Copy any remaining elements from the left half
        while (leftIdx < mid) {
            sorted[idx++] = arr[leftIdx++];
        }
        // Copy any remaining elements from the right half
        while (rightIdx < e) {
            sorted[idx++] = arr[rightIdx++];
        }

        // Copy the sorted elements back to the original array
        System.arraycopy(sorted, 0, arr, s, e - s);
    }

    public static void main(String[] args) {
        int arr[] = { 2, 5, 4, 7, 9, 1 };
        // int n = arr.length;
        // int arr2[] = fn(arr);
        // inplace(arr, 0, 0, arr.length);
        inplaceMergeSort(arr, 0, arr.length);

        // printing the original array
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
}
