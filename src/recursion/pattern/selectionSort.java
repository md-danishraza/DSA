package recursion.pattern;

import java.util.Arrays;

public class selectionSort {
    static void sort(int arr[], int rows, int col, int max) {
        if (rows == 0) {
            return;
        }
        if (col < rows) {
            if (arr[col] > arr[max]) {
                sort(arr, rows, col + 1, col);  // Update max to the current column
            } else {
                sort(arr, rows, col + 1, max);  // Keep the previous max
            }
        } else {
            // Swap the max element with the last element in the current subarray
            int temp = arr[max];
            arr[max] = arr[rows - 1];
            arr[rows - 1] = temp;
            // Sort the remaining subarray
            sort(arr, rows - 1, 0, 0);
        }
    }
    
    public static void main(String[] args) {
        int arr[] = {4,3,2,1};
        sort(arr, arr.length-1, 0, 0);

        System.out.println(Arrays.toString(arr));
    }
}
