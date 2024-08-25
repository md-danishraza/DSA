package recursion;

import java.util.Arrays;

public class quick_sort {
    // since we are not passing sub array in the parameters
    // * so we are passing the low and high index to keep track of subarray in
    // recursion
    static void fn(int arr[], int low, int high) {
        // base case
        if (low >= high) {
            return;
        }

        // now we need to swap
        int s = low;
        int e = high;
        // taking middle element as pivot
        int pivot = arr[(s + (e - s) / 2)];

        // * element<pivot will go LHS and elements>pivot will go RHS
        while (s <= e) {
            // if arr is already sorted it will not swap
            while (arr[s] < pivot) {
                s++;
            }
            while (arr[e] > pivot) {
                e--;
            }
            // the above while loop will stop the index at violation
            // * and we will swapt at that violation point
            if (s <= e) {
                // if condition to cope with last step
                int temp = arr[e];
                arr[e] = arr[s];
                arr[s] = temp;
                e--;
                s++;
            }
        }
        // after this swapping end and start will be adjacent to Pivot
        // e P s

        // now pivot as at correct index
        // sort the left half and right half with recursion
        fn(arr, low, e);
        fn(arr, s, high);

    }

    public static void main(String[] args) {
        int arr[] = { 9, 345, 6, 4, 3, 6, 78, 8 };
        fn(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
        // Arrays.sort(args);
    }
}
